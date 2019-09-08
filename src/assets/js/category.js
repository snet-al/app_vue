let category = null;
var $userModule;
var $vmUserModal;

$net.ready(function () {


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
});