import Vue from 'vue'
import router from '../router'
import store from '../store'

Vue.config.productionTip = false

let elements = document.getElementsByTagName('module')
let modules: any = {}
for (let element of elements) {
  modules[element.id] = element.getAttribute('name')
}

for (let id in modules) {
  let ComponentModule = modules[id]
  new Vue({
    store,
    render: h => h(require('../modules/' + ComponentModule + '.vue').default),
  }).$mount('module#' + id)
}
