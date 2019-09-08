<template>
  <div>ItemModal</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import api from '../plugins/api'
import eventBus from '../plugins/eventBus'

@Component({})
export default class ItemModal extends Vue {
  constructor() {
    super()
    api.get('products').then((response: any) => {
      console.log(response)
    });
  }

  mounted() {
    setTimeout(() => {
      eventBus.$emit('item_modal', 2)
    }, 3000)
  }
}
</script>
