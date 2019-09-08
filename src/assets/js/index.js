var $userModule;
var $vmUserModal;

$.ajaxSetup({
  xhrFields: {
    withCredentials: true
  }
});

$.ajax({
  url: API_CONFIG,
  async: false,
  dataType: 'json',
  success: function (result) {
    console.log(result.data);
    if ((result && result.success && result.data)) {
      window.php_global_data = result;
    }
  }
});

$net.ready(function () {

  $userModule = $net.module({
    stype: '#user-module',
    scope: {
      contact: 'Ndihma & Kontanti',
      userName: '',
      loginLogout: 'Login',
      UserModelInstance: UserModelInstance
    },
    methods: {
      userAction: function (id) {
        if (!UserModelInstance) {
          $('#login-modal').modal('toggle');
          return false;
        }
        $.ajax(API_LOGOUT || '/index.php?/loginctrl/logout_user');
        UserModelInstance = null;
        this.UserModelInstance = null;
        this.userName = '';
        this.loginLogout = 'Login';
      }
    },
    renderTo: '#user-header'
  });

  if (window.php_global_data && window.php_global_data.data && window.php_global_data.data['is_logged']) {
    $.ajax({
      url: window['API_LOGIN'] || 'login.php',
      method: "POST",
      data: {},

      dataType: 'json',
      success: function (result) {
        if (!(result && result.success && result.message === 'is_logged' && result.data)) {
          return false;
        }
        UserModelInstance = UserModel.create(result.data);
        $userModule.userName = UserModelInstance.data['name'];
        $userModule.loginLogout = 'Logout';
        $userModule.UserModelInstance = UserModelInstance;

      }

    });
  }

  $.ajax({
    url: 'headLinks.json',
    dataType: 'json',
    success: function (result) {
      var headLinks = result;
      $net.module({
        stype: '#search-header-tpl',
        scope: {
          searchHeader: headLinks.search_head,
          CartDropdownStore: CartDropdownStore,
          title: 'Shporta',
          link: 'cartpage.html',
          icon: 'fa fa-cart-arrow-down',
          cart_amount: '$0.00',
          input: '',
          logo: './resources/img/topsell-logo.jpg'
        },
        methods: {
          getTotalAmount: function () {
            var total = 0;
            this.CartDropdownStore.data.forEach(function (record) {
              total += record.data['total'];
            });
            return total.toFixed(2);
          },

          searchOnKeyUp: function (event, value) {
            var valueToSearch = this.input;
            ItemStore.searchBy(valueToSearch);
            if (valueToSearch) {
              $('#category-header-tpl-ct').slideUp('slow');
            } else {
              $('#category-header-tpl-ct').slideDown('slow');
            }
          },
          toggleCart: function () {
            $('.shopping-cart').fadeToggle('fast');
          }
        },
        renderTo: '#search-header'
      });

      $vmUserModal = $net.module({
        stype: '#login-modal-template',
        methods: {
          submitLoginData: function () {
            var formElement = document.getElementById("login-form");
            var formData = new FormData(formElement);

            $.ajax({
              url: window['API_LOGIN'] || 'login.php',
              method: "POST",
              data: {
                username: formData.get('username'),
                password: formData.get('password')
              },
              dataType: 'json',
              success: function (result) {
                if (!(result && result.success && result.data)) {
                  return false;
                }
                UserModelInstance = UserModel.create(result.data);
                $("#login-modal").modal("toggle");
                $userModule.userName = UserModelInstance.data['name'];
                $userModule.loginLogout = 'Logout';
                $userModule.UserModelInstance = UserModelInstance;
              },
              error: function (xhr, resp, text) {
              }
            });
          },
          submitRegisterData: function () {
            var formElement = document.getElementById("register-form");
            var formData = new FormData(formElement);

            $.ajax({
              url: window['API_REGISTER'] || 'login.php',
              method: "POST",
              processData: false,
              contentType: false,
              data: formData,
              success: function (result) {
                try {
                  var response = $.parseJSON(result);
                } catch (e) { }
                if (!response || !response.success) {
                  return false;
                }
                UserModelInstance = UserModel.create(response.data);
                $("#login-modal").modal("toggle");
                $userModule.userName = UserModelInstance.data['name'];
                $userModule.loginLogout = 'Logout';
              },
              error: function (xhr, resp, text) {
              }
            });
          },

          showRegister: function () {
            $('#login-fields').hide('slow');
            $("#collapse-login").show('slow');
            $(".text-change").html("<h3 class='mx-auto mt-2 reg'>Regjistrohu</h3>");
          },
          backToLogin: function () {
            $('#login-fields').show('slow');
            $("#collapse-login").hide('slow');
            $(".text-change").html("<h3 class='mx-auto mt-2 reg'>Login</h3>");
          }
        },
        renderTo: '#module-login'
      });
    }
  });

  $.ajax({
    url: window['API_CATEGORY_LIST'] || 'categories.json',
    dataType: 'json',
    method: 'get',
    success: function (result) {
      if (result && result.success) {
        CategoriesStore.add(result.data);
      }
      $vm = $net.module({
        stype: '#top-categories-tpl',
        scope: {
          id: 'my-list',
          CategoriesStore: CategoriesStore
        },
        methods: {
          filterItems: function (categoryId) {
            ItemStore.searchByCategory(categoryId);
          }
        },
        renderTo: '#category-header-tpl-ct'
      });
    }
  });

  $vm = $net.module({
    stype: '#cart-dropdown-tpl',
    scope: {
      CartDropdownStore: CartDropdownStore,
      UserModelInstance: UserModelInstance,
      counter: 0,
      disableBtn: true,
      currency: 'Lek',
      cartQuatities: new Array(CartDropdownStore.data.length)
    },
    methods: {
      updateQuantity: function (index, qty) {
        this.CartDropdownStore.data[index].data.quantity = qty;
        this.CartDropdownStore.data[index].set('total', qty * this.CartDropdownStore.data[index].data['price']);
      },
      removeCartItem: function (index) {
        this.CartDropdownStore.removeAt(index)
      },
      countItems: function () {
        return this.CartDropdownStore.data.length;
      },
      getTotal: function () {
        var total = 0;
        this.CartDropdownStore.data.forEach(function (record) {
          total += record.data['total'];
        });
        return total.toFixed(2);
      },
      dropdownOrderAction: function (id) {

        if (!UserModelInstance) {
          $("#login-modal").modal("toggle");
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
              alert(2)
            }
          }
        });
        return;
      }
    },
    renderTo: 'module#cart-dropdown-module'
  });

  $net.module({
    stype: '#footer-tpl',
    renderTo: '#footer-container'
  });
});