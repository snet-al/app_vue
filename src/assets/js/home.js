$net.ready(function () {
  $.ajax({
    url: window["API_ITEMS_LIST"] || "items.json",
    dataType: "json",
    method: "get",
    success: function (results) {
      if (results && results.success) {
        ItemStore.add(results.data.rows);
      }
      $net.module({
        stype: "#items-module-tpl",
        scope: {
          domain: DOMAIN,
          path: DOMAIN + '/store/images/items/',
          ItemStore: ItemStore
        },
        methods: {
          viewMore: function (index, id) {
            $net.module({
              stype: "#item-modal-tpl",
              scope: {
                domain: DOMAIN,
                path: DOMAIN + '/store/images/items/',
                disableBtn: false,
                counter: 0,
                ItemRecord: ItemStore.data[index],
                UserModelInstance: UserModelInstance
              },
              methods: {
                doOrder(id){
                  if (!UserModelInstance) {
                    if($("#login-modal").modal("toggle")){
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
                }
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
          },
          doOrder(id){
            if (!UserModelInstance) {
              if($("#login-modal").modal("toggle")){
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
          }
        },
        renderTo: "module#items"
      });
    }
  });
});