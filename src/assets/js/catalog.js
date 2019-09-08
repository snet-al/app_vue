var categories = null;
var items = null;

$net.ready(function () {
  $.ajax({
    url: window['API_CATEGORY_LIST'] || 'categories.json',
    dataType: 'json',
    method: 'get',
    success: function (result) {
      categories = result;
      categoriesStore.add(result);
      $vm = $net.view.vue({
        stype: "#left-categories-tpl",
        //data: categories,
        scope: {
          categories: categoriesStore,
          title: "Kategorite"
        },
        renderTo: "#category-tpl-ct"
      });
    }
  });

  $.ajax({
    url: window['API_ITEMS_LIST'] || 'items.json',
    dataType: 'json',
    method: 'get',
    success: function (results) {
      items = results.items;
      $vm = $net.view.vue({
        stype: "#items-tpl",

        /*data:{items:items}, */
        scope: {
          store: items,
        },
        renderTo: "#items-ct"
      });
    }
  });

  $vm = $net.view.vue({
    stype: "#pager-results-tpl",
    data: categories,
    scope: {
      button_show_all: "Show All",
      button_pager: "Pager",
      results_num: 0

    },
    renderTo: "#result-pannel"
  });


  $vm = $net.view.vue({
    stype: "#header-tpl",
    renderTo: "#user-header"
  });

  $vm = $net.view.vue({
    stype: "#search-header-tpl",
    renderTo: "#search-header"
  });
});

function startModal() {  

  
  $(document.body).append($net.view.create({
    stype: "#modal-tpl",
    //appendTo: "body"
  }));

  $('#myModal').on('hidden.bs.modal', function (e) {
    $('.modal').remove();
    // $(".modal-backdrop").remove();
    return e;
  });
}




