<template>
  <modal name="login" width="25%" height="auto" @before-open="beforeOpen">
    <div class="modal-header text-center header-content">
      Log in <i class="fa fa-user-circle"></i>
    </div>
    <div class="container pb-3 pt-2">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="d-flex">
          <button
            type="button"
            @click="login"
            class="btn btn-primary flex-grow-1"
          >
            Hyr
          </button>
          <div class="text-center flex-grow-1" @click="registerModal">
            <p class="register-text">Regjistrohu</p>
          </div>
        </div>
      </form>
    </div>
  </modal>
</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import eventBus from '../plugins/eventBus'
//import '../plugins/globals'
import api from '../plugins/api'

@Component({})
export default class LoginModal extends Vue {
  data() {
    return {
      email: '',
      password: '',
    }
  }
  beforeOpen(event) {
    console.log(event.params)
  }
  mounted() {
    eventBus.$on('login_modal', (data: any) => {
      this.$modal.show('login')
      console.log(data)
    })
  }
  login() {
    let payload: object = {
      email: this.email,
      password: this.password,
    }
    api.post('login', payload).then(response => {
      console.log(response)
    })
  }
  registerModal() {
    this.$modal.hide('login')
    this.$modal.show('register')
  }
}
</script>
