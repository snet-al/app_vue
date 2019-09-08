<template>
  <div class="top-header">
    <ul class="user-header">
      <li>
        <a href="contact.html" class="userheader-link">
          {{ contact }}
        </a>
      </li>
      <li>
        <a href="order.html" class="userheader-link">
          Porosite
        </a>
      </li>
      <li>
        <a href="javascript:console.log(1)" class="userheader-link">
          {{ userName }}
        </a>
      </li>
      <li>
        <a href="#" @click="loginModal" class="userheader-link">
          {{ loginLogout }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import eventBus from '../../plugins/eventBus'

import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TopHeaders extends Vue {
  data() {
    return {
      contact: 'Contact',
      orders: 'Porosite',
      userName: 'Armando',
      loginLogout: 'Login or Logout',
    }
  }
  loginModal() {
    eventBus.$emit('login_modal', this.contact)
  }
}
</script>
