<template>
  <div id="top-categories-tpl">
    <ul id="id" class="s-center">
      <li
        v-for="(category, index) in this.categories"
        class="listed-items"
        :key="index"
      >
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CategoryHeader extends Vue {
  data() {
    return {
      contact: 'Contact',
      orders: 'Porosite',
      userName: 'Armando',
      loginLogout: 'Login or Logout',
      categories: [
        {
          name: 'Shtepiake',
        },
        {
          name: 'Lodra',
        },
        {
          name: 'Fitness',
        },
        {
          name: 'Elektronike',
        },
        {
          name: 'Sport',
        },
      ],
    }
  }
}
</script>
