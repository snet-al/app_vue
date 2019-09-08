<template>
  <div>
    <div class="col-auto" v-for="product in filteredProducts" :key="product.id">
      <div class="card" style="width: 250px;">
        <div class="item-image mb-2" @click="viewModal()">
          <img class="card-img-top" :src="product.full_image_default" alt="Card image cap" />
        </div>
        <div class="item-title pl-3 pr-3">
          <a href="test.html">
            <h6 class="card-title">{{ product.name }}</h6>
          </a>
        </div>
        <div class="item-price pl-3 text-muted">
          <span class="price">{{ product.sale_price }} ALL</span>
        </div>
        <div class="item-description pl-3 mb-3 pr-3">
          <p class="card-text">
            {{ product.description }}
            <a class="text-info" @click="viewModal()">Me shume</a>
          </p>
        </div>
        <button type="button" class="btn btn-primary w-50 ml-3" @click="doOrder(product.id)">Porosit</button>
        <div class="add-cart" @click="addToCart(product.id)">
          <span>
            <i class="mov fa fa-cart-plus"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import api from '../plugins/api'
import { Component, Prop, Vue } from 'vue-property-decorator'
import eventBus from '../plugins/eventBus'

@Component
export default class Item extends Vue {
  products: any = []
  filteredProducts: any = []

  mounted() {
    api.get('products').then((response: any) => {
      this.products = response.data.data
      this.filteredProducts = this.products
    })
    eventBus.$on('search_module_changed_value', (valueToSearch: string) => {
      this.searchProducts(valueToSearch)
    })
  }

  addToCart(id: any) {}

  doOrder(id: any) {
    alert(id)
  }

  searchProducts(valueToSearch: any) {
    valueToSearch = valueToSearch.toLowerCase()
    console.log(valueToSearch)
    if (valueToSearch === '') {
      this.filteredProducts = this.products
      return false
    }
    this.filteredProducts = this.products.filter((item: any) => {
      if (
        item.name.toLowerCase().indexOf(valueToSearch) >= 0 ||
        (item.description &&
          item.description.toLowerCase().indexOf(valueToSearch) >= 0)
      ) {
        return item
      }
      return false
    })
  }

  // get cutDescription() {
  //   if (this.products.description && this.products.description.length > 91) {
  //     return this.products.description.substring(0, 30) + '...'
  //   } else if (this.products.description) {
  //     return this.products.description
  //   } else {
  //     return ''
  //   }
  // }
}
</script>

<style scoped></style>
