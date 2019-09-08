var order = null;
$userInfoModule = null;
$net.ready(function () {
  $.ajax({
    url: window["API_ORDER_LIST"] || "order.json",
    datatype: "json",
    method: "get",
    success: function (results) {
      if (results) {
        OrderStore.add(results);
      }

      $vm = $net.module({
        stype: "#order-tpl",
        scope: {
          OrderStore: OrderStore,
          order_items_title: "Order Items",
          order_id: "#",
          order_data: "Data",
          order_value: "Vlera",
          order_money: "Money",
          order_status: "Statusi",
          order_tot: "*",
          product_order_name: "Emertimi",
          product_order_quantity: "Sasia",
          product_order_price: "Cmimi"
        },
        methods: {
          openOrderDetails: function (indexOfOrder) {
            OrderDetailsStore.removeAll().add(
              OrderStore.data[indexOfOrder].get("details")
            );
            $net.module({
              stype: "#modal-tpl",
              scope: {
                OrderDetailsStore: OrderDetailsStore
              },
              renderTo: "#module-modal"
            });

            $("#orders_modal_").modal("show");
            $("s-page").css("filter", "blur(5px)");
            $("#orders_modal_").on("hidden.bs.modal", function (e) {
              // $('.modal').remove();
              // $('.modal-backdrop').remove();
              $("s-page").removeAttr("style");

              return e;
            });
          }
        },
        renderTo: "#order-items"
      });
    }
  });

  $vmUserAccount = $net.module({
    stype: "#account-tpl",
    data: order,
    scope: {
      account_head_text: "Account",
      account_username: "Username",
      account_name: "Emri",
      account_user_gender: "Gjinia",
      account_address1: "Adresa 1",
      account_address2: "Adresa",
      account_city: "Qyeti",
      account_country: "Shteti",
      account_phone: "Phone",
      account_mobile: "Cel",
      account_mail: "Email",
      button_update_pass: "Update",
      button_change_pass: "Ndrysho Password",
      UserModelInstance: UserModelInstance
    },
    methods: {
      updateUserInfo: function () {
        var formElement = document.getElementById("address-modal-form");
        var formData = new FormData(formElement);

        $.ajax({
          url: window['API_UPDATE_USER'] || 'login.php',
          method: "POST",
          processData: false,
          contentType: false,
          data: formData,
          success: function (result) {
            try {
              var response = $.parseJSON(result);
            } catch (e) {}
            if (response && response.success) {
              $userModule.userName = UserModelInstance.data['name'];
              console.log(UserModelInstance.data['name']);
            }
          },
          error: function (xhr, resp, text) {}
        });
      },
    },
    renderTo: "#account-zone"
  });
  $userInfoModule = $net.module({
    stype: "#address-module",
    scope: {
      user: UserModelInstance
    },
    renderTo: "module#address"
  });

  $net.module({
    stype: '#change-password-modal',
    scope: {

    },
    renderTo: '#module-changepassword',
    methods: {
      saveNewPass: function () {
        var formElement = document.getElementById("changePassword-form");
        var formData = new FormData(formElement);

        $.ajax({
          url: window['API_UPDATE_PASSWORD'] || 'login.php',
          method: "POST",
          data: {
            password: formData.get('password'),
            newpassword: formData.get('newpassword'),
            retypepassword: formData.get('retypepassword')
          },
          dataType: 'json',
          success: function (result) {
            if (result && result.success && result.data) {
              console.log('Jemi brenda success')
              alert(1)
            }
          }
        });
      }
    }
  })


  $.ajax({
    url: window['API_LOGIN'] || 'login.php',
    method: "POST",
    data: {},
    dataType: 'json',
    success: function (result) {
      if (result && result.success && result.message === 'is_logged' && result.data) {
        UserModelInstance = UserModel.create(result.data);
        $userModule.userName = UserModelInstance.data['name'];
        $userModule.loginLogout = 'Logout';
        $userModule.UserModelInstance = UserModelInstance;
        $userInfoModule.user = UserModelInstance;
        $vmUserAccount.UserModelInstance = UserModelInstance;
      }
    }
  });



  $vm = $net.module({
    stype: "#social-tpl",
    data: order,
    scope: {
      social_head_text: "Family"
    },
    renderTo: "#social-zone"
  });

});