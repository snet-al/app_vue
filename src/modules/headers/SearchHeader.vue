<template>
  <div class="search-header">
    <div class="header-logo">
      <a>
        <img class="main-logo" src="../../assets/img/topsell-logo.jpg" />
      </a>
    </div>
    <div class="checkout-header">
      <div class="order-header" @click="toggleCart">
        <button class="icon-checkout">
          <i class="fa fa-cart-arrow-down"></i>
        </button>
        <div class="order-total">
          {{ title }}
          <br />
          <span class="order-amount"> 330.00 </span>
        </div>
      </div>
    </div>
    <div class="searchbox">
      <input
        id="header-search"
        v-model="searchString"
        @keyup="searchOnKeyUp($event)"
        type="search"
        placeholder="Search products & recipes"
        aria-label="Search products & recipes"
      />
      <div class="actionButtonWrapper">
        <button aria-label="Search" type="button" class="actionSearchButton">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
    <div class="header-nav">
      <nav class="coreHeaderNav">
        <li class="coreHeaderNav-link">
          <a href="category.html" class="coreHeaderNav-link">{{ category }}</a>
        </li>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import eventBus from '../../plugins/eventBus';

@Component
export default class SearchHeader extends Vue {
  title: string = 'Shporta'
  category: string = 'Kategorite'
  searchString: string  = ''
  
  data() {
    return {
      
    }
  }

  searchOnKeyUp($event: any) {
    eventBus.$emit('search_module_changed_value', this.searchString)
  }

  toggleCart(): number {
    let num = 4
    alert(num)
    return num
  }
}
</script>
