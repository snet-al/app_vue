<template>
  <modal :scrollable="true" name="register" width="25%" height="auto">
    <div class="modal-header text-center header-content">
      Register <i class="fa fa-user-plus"></i>
    </div>
    <div class="container pb-3 pt-2">
      <form>
        <div class="form-group">
          <label for="input_name">Emri</label>
          <input
            type="text"
            v-model="firstName"
            class="form-control"
            id="input_name"
            aria-describedby="emailHelp"
            placeholder="Emri"
          />
        </div>

        <div class="form-group">
          <label for="input_surname">Mbiemri</label>
          <input
            v-model="lastName"
            type="text"
            class="form-control"
            id="input_surname"
            aria-describedby="emailHelp"
            placeholder="Mbiemer"
          />
        </div>
        <div class="form-group">
          <label for="input_email">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="input_email"
            placeholder="Email"
          />
        </div>

        <div class="form-group">
          <label for="input_password">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="input_password"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <label for="input_number">Numer Telefoni</label>
          <input
            min="13"
            max="13"
            v-model="phone"
            type="number"
            class="form-control"
            id="input_number"
            placeholder="Numer Telefoni"
          />
        </div>
        <div class="form-group">
          <label for="input_birthday">Ditelindja</label>
          <input
            v-model="birthday"
            type="date"
            class="form-control"
            id="input_birthday"
            placeholder="Ditelindja"
          />
        </div>

        <div class="d-flex">
          <button
            type="button"
            @click="register"
            class="btn btn-primary flex-grow-1"
          >
            Regjistrohu
          </button>
        </div>
      </form>
    </div>
  </modal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import api from '../plugins/api'
import eventBus from '../plugins/eventBus'
import '../plugins/globals'

@Component({})
export default class RegisterModal extends Vue {
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  password: any = ''
  phone: string | number = ''
  birthday: string = ''

  register() {
    let payload: object = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      birthday: this.birthday,
      phone: this.phone,
    }

    api.post('register', payload).then(response => {
      console.log(response)
    })
  }
}
</script>

<style scoped></style>
