var cart = null;

$net.ready(function () {

  $.ajax({
    url: window['API_CART_LIST'] || 'cart.json',
    dataType: 'json',
    method: 'get',
    success: function (result) {
      cart = result;

      $vm = $net.view.vue({
        stype: "#cart-tpl",
        scope: {
          store: cart,
          table_head_id: "#",
          table_head_product: "Produkti",
          table_head_amount: "Sasia",
          table_head_price: "Cmimi",
          table_head_total: "Totali",
          table_head_status: "Gjendje",
          title: "Cart",
          total_text: "Total",
          total_num: "( 0.00 ALL )",
          button_order: "Porosit"
        },
        renderTo: "#cart-tpl-ct"
      });
    }
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


