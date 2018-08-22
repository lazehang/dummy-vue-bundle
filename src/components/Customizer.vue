<template>
  <div class="undone-customizer">
    <button v-b-modal.undone-modal>Customizer</button>

    <b-modal centered id="undone-modal" ref="undoneModal">
        <div slot="modal-header">
          <div slot="modal-title" class="mx-auto">
            <img src="https://www.undone.com/icons/Undone_logo_wht.png" alt="undone" class="src">
          </div>
        </div>
      <Undone @hide="hideModal"/>
      <div slot="modal-footer"></div>
    </b-modal>
  </div>
</template>

<script>
import bModal from 'bootstrap-vue/es/components/modal/modal'
import Undone from './Undone.vue'

export default {
  name: 'Customizer',
  components: {
    'b-modal': bModal, Undone
  },
  methods: {
    hideModal () {
      this.$refs.undoneModal.hide()
    }
  }
}
</script>
<style>
@font-face {
    font-family: big_noodle_titling;
    src: url(../assets/font/big_noodle_titling.ttf);
}
#undone-modal {
  font-family: big_noodle_titling;
  padding: 0%;
  background-color: #f1f2f2;
}
#undone-modal .modal-header{
  background: #000;
}
.src {
  height: 50px;
}
#undone-modal .modal-dialog {
  max-width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

#undone-modal .modal-content {
  height: auto;
  min-height: 100%;
  border-radius: 0;
}
#undone-modal {
  text-align: left;
}

.watch-cate {
  margin-bottom: 1rem;
}

</style>
