var item = null;
var itemId = null;
var queryString = window.location.href;
var pageHash = null;
if (queryString) {
  queryString = queryString.split('#!');
  if (queryString[1]) {
    pageHash = queryString[1];
  }
  if (pageHash) {
    arr = pageHash.split('&');
    for (i = 0; i < arr.length; i++) {
      var a = arr[i].split('=');
      if (a[0] === 'id') {
        if (a[1]) {
          itemId = a[1];
        }
      }
    }
  }
}

$net.ready(function () {
  $.ajax({
    url: (window['API_ITEM_DATA'] + '/' + itemId) || 'item.json' && window["API_ITEMS_SAME_CATEGORY"] ,
    dataType: 'json',
    method: 'get',
    success: function (result) {
      item = result.data.item;
      console.log(result);
      var itemModelInstance = $net.model('Item').create(item.base);

      $vm = $net.module({
        id: "item-view-template",
        stype: "#itemview-module",
        scope: {
          domain: DOMAIN,
          path: DOMAIN + '/store/images/items/',
          item: itemModelInstance,
          photos: item.modules.photos
        },
        renderTo: "#item-tpl-ct"
      });

      $net.module({
        id: "itemdetails-tab-template",
        stype: "#tab-module",
        scope: {
          item: itemModelInstance,
          tabs: [{
            name: 'product_description',
            default: true,
            label: 'Description'
          }, {
            name: 'product_specification',
            label: 'Specification'
          }]
        },
        renderTo: "#tab-tpl-ct"
      });
    }
  });

  $.ajax({
    url:  (window['API_SAME_CATEGORY'] + '/' + itemId) || window['API_CATEGORY_LIST'] || 'items.json',
    dataType: 'json',
    method: 'get',
    success: function (results) {
      if (results && results.success) {
        SameCategoryItemStore.add(results.data.rows);
      }
      $net.module({
        id: "itemdetails-tab-template",
        stype: "#item-carousel",
        renderTo: "#same-category-items",
        scope: {
          domain: DOMAIN,
          path: DOMAIN + '/store/images/items/',
          ItemStore: SameCategoryItemStore,
          UserModelInstance:UserModelInstance
        },
        methods: {
          viewMore: function (index, id) {
            $net.module({
              stype: "#item-modal-tpl",
              scope: {
                ItemRecord: ItemStore.data[index],
                UserModelInstance: UserModelInstance
              },
              methods: {
                doOrder(id) {
                  if (!UserModelInstance) {
                    if ($("#login-modal").modal("toggle")) {
                      $("#orders_modal_").css("opacity", "0");
                    }
                    $("#login-modal").on("hidden.bs.modal", function (e) {
                      $("#orders_modal_").css("opacity", "1");
                      return e;
                    });
                    return;
                  }
                  $.ajax({
                    url: window['API_DO_ORDER'] || 'login.php',
                    method: "POST",
                    data: {
                      user_id: UserModelInstance.get('id'),
                      item_id: id,
                      qty: 1
                    },
                    dataType: 'json',
                    success: function (result) {
                      if (result && result.success && result.data) {
                        alert(1)
                      }
                    }
                  });
                },
              },
              renderTo: "#module-modal"
            });

            $("#orders_modal_").modal("show");
            $("s-page").css("filter", "blur(5px)");
            $("#orders_modal_").on("hidden.bs.modal", function (e) {
              $("s-page").removeAttr("style");
              return e;
            });
          },
          addCartItem: function (index) {
            var itemRecord = this.ItemStore.data[index];
            var found = -1;
            for (var i = 0; i < CartDropdownStore.data.length; i++) {
              if (CartDropdownStore.data[i].data.item_id == itemRecord.data.id) {
                found = i;
                break;
              }
            }
            if (found > -1) {
              $('#cart-plus-' + itemRecord.data.id).click()
            } else {
              CartDropdownStore.add([{
                item_id: itemRecord.get('id'),
                item_photo: itemRecord.get('photo_id'),
                item_name: itemRecord.get('name'),
                quantity: 1,
                price: itemRecord.get('price'),
                discount: 0,
                total: 1 * itemRecord.get('price')
              }]);
            }
          }
        }
      });
      setTimeout(function() {
        $("#same-category-item-tpl .owl-carousel").owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          items: 4,
           });
      }, 100);
    }
  })
  
});


$(document).ready(function(){
  
});