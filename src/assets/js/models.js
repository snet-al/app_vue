var ItemModel = $net.model({
  name: 'Item',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'url_name', type: 'string' },
    { name: 'code', type: 'int' },
    { name: 'barcode', type: 'int' },
    { name: 'name', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'photo_id', type: 'string' },
    { name: 'price', type: 'float' },
    { name: 'cost', type: 'float' },
    { name: 'qty', type: 'float' },
    { name: 'state', type: 'boolean' },
    { name: 'offer', type: 'float' },
    { name: 'auction', type: 'float' },
    { name: 'new', type: 'int' },
    { name: 'photo', type: 'string' },
    { name: 'photos', type: 'object' },
    { name: 'thumbnails', type: 'object' },
    { name: 'category_id', type: 'int' },
    { name: 'categories', type: 'object' }
  ],
  // VALIDATION IS FOR TESTING
  validations: [
    { type: 'length', field: 'id', max: 4 },
    { type: 'format', field: 'name', matcher: /([a-zA-Z])/ },
    { type: 'inclusion', field: 'state', list: ['Gjendje', 'Nuk ka gjendje'] },
    { type: 'format', field: 'description', matcher: /([a-zA-Z]+)[0-9]{2,3}/ },
    { type: 'presence', field: 'price' }
  ]
});
var ItemStore = $net.store({
  name: 'ItemStore',
  model: 'Item'
});
ItemStore.searchBy = function(valueToSearch) {
  this.filterBy(function (record) {
    var name = null;
    if ((name = record.get('name'))) {
      if (name.toLowerCase().match(valueToSearch.toLowerCase())) {
        return true;
      }
    }
    var description = null;
    if ((description = record.get('description'))) {
      if (
        description.toLowerCase().match(valueToSearch.toLowerCase())
      ) {
        return true;
      }
    }
    var code = null;
    if ((code = record.get('code'))) {
      if (code.toLowerCase().match(valueToSearch.toLowerCase())) {
        return true;
      }
    }
    var barcode = null;
    if ((barcode = record.get('barcode'))) {
      if (barcode.toLowerCase().match(valueToSearch.toLowerCase())) {
        return true;
      }
    }
    var price = null;
    if ((price = record.get('price'))) {
      if (price.toLowerCase().match(valueToSearch.toLowerCase())) {
        return true;
      }
    }
  });
}

ItemStore.searchByCategory = function(categoryId) {
  this.filterBy(function (record) {
    var categories = record.get('categories');
    if (!categories) {
      return false;
    }
    for (i = 0; i < categories.length; i++) {
      if (categories[i] === categoryId) {
        return true;
      }
    }
    return false;
  });
}

SameCategoryItemStore = $net.store({
  name: 'SameCategoryItemStore',
  model: 'Item'
});
/* Feature Model and stores that use this model*/
var CategoryModel = $net.model({
  name: 'Feature',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'name', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'photo', type: 'string' }
  ]
});

var CategoriesStore = $net.store({
  name: 'CategoriesStore',
  model: 'Feature'
});

/*Order Model*/

var OrderModel = $net.model({
  name: 'Order',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'date', type: 'int' },
    { name: 'time', type: 'int' },
    { name: 'description', type: 'string' },
    { name: 'value', type: 'float' },
    { name: 'currency', type: 'float' },
    { name: 'xchr', type: 'int' },
    { name: 'status', type: 'boolean' },
    { name: 'discount', type: 'int' },
    { name: 'details', type: 'object' }
  ]
});

var OrderStore = $net.store({
  name: 'OrderStore',
  model: 'Order'
});

var OrderDetailsModel = $net.model({
  name: 'OrderDetails',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'name', type: 'string' },
    { name: 'photo_id', type: 'string' },
    { name: 'order_id', type: 'int' },
    { name: 'item_id', type: 'int' },
    { name: 'qty', type: 'float' },
    { name: 'offer', type: 'float' },
    { name: 'price', type: 'float' }
  ]
});

var OrderDetailsStore = $net.store({
  name: 'OrderDetailsStore',
  model: 'OrderDetails'
});

var UserModel = $net.model({
  name: 'User',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'username', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'gender', type: 'string' },
    { name: 'address1', type: 'string' },
    { name: 'address', type: 'string' },
    { name: 'city', type: 'string' },
    { name: 'country', type: 'string' },
    { name: 'phone', type: 'int' },
    { name: 'mobile', type: 'int' },
    { name: 'email', type: 'string' }
  ]
});
var UserModelInstance = null;

var CartModel = $net.model({
  name: 'CartModel',
  fields: [
    { name: 'item_id', type: 'int' },
    { name: 'item_photo', type: 'string' },
    { name: 'item_name', type: 'string' },
    { name: 'quantity', type: 'float' },
    { name: 'price', type: 'float' },
    { name: 'discount', type: 'float' },
    { name: 'total', type: 'float' }
  ]
});

var CartDropdownStore = $net.store({
  name: 'CartDropdownStore',
  model: 'CartModel',

});
