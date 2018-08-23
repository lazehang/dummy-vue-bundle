<template>
  <div class="undone-customizer">
    <a href="javascript:void(0)" class="btn undone-trigger" v-b-modal.undone-modal>
      <img src="../assets/images/logo.png" alt="undone"/>
    </a>
  
    <b-modal centered id="undone-modal" ref="undoneModal" class="px-0">
      <div slot="modal-header">
        <div slot="modal-title" class="mx-auto">
          <img src="https://www.undone.com/icons/Undone_logo_wht.png" alt="undone" class="src">
        </div>
      </div>
      <Undone @hide="hideModal" />
      <div slot="modal-footer">
        <u-footer />
      </div>
    </b-modal>
  </div>
</template>

<script>
  import bModal from 'bootstrap-vue/es/components/modal/modal'
  import Undone from './Undone.vue'
  import Footer from './Footer.vue'
  
  export default {
    name: 'Customizer',
    components: {
      'b-modal': bModal,
      Undone,
      'u-footer': Footer
    },
    methods: {
      hideModal() {
        this.$refs.undoneModal.hide()
      }
    }
  }
</script>

<style>
  .undone-customizer {
    position: fixed;
    bottom: 3rem;
    left: 0;
  }

  .undone-trigger{
    padding: 0.5rem 2rem;
    background: #000;
    border-radius: 0;
  
  }

  .undone-trigger img {
    height: 80px;
    width: auto;
    margin: 0 auto;
  }
  #undone-modal h1,
  #undone-modal h3,
  #undone-modal h4 {
    font-family: big_noodle_titling;
  }
  
  #undone-modal h1 {
    letter-spacing: 0.02rem;
    font-size: 2rem;
  }
  
  #undone-modal h3 {
    font-family: titillium_semibold;
    letter-spacing: 0.02rem;
    font-size: 1.364rem;
  }
  
  #undone-modal h4 {
    font-size: 1.116rem;
  }
  
  #undone-modal h2 {
    letter-spacing: 0.18rem;
    font-size: 1.4rem;
  }
  
  #undone-modal h6 {
    font-family: titillium_semibold;
    letter-spacing: 0.02rem;
    font-size: 0.8866rem;
  }
  
  #undone-modal {
    font-size: 1.116rem;
    letter-spacing: 0.02rem;
  }
  
  #undone-modal a {
    font-family: titillium_semibold;
    letter-spacing: 0.02rem;
    font-size: 0.86rem;
    color: #000;
    border: none;
  }
  
  #undone-modal a:hover,
  #undone-modal a:active,
  #undone-modal a:focus {
    color: #cbcbcb;
    text-decoration: none;
  }
  
  #undone-modal.modal {
    font-family: big_noodle_titling;
    background-color: #f1f2f2;
    padding-left: 0px !important;
  }
  
  #undone-modal .modal-body {
    padding: 0;
    overflow: auto;
    height: 100%;
    width: 100%;
  }
  
  #undone-modal .modal-header {
    background: #000;
    border-radius: 0%;
    margin: 0 0;
  }
  #undone-modal .modal-content {
    z-index: 2147483647;    
  }
  #undone-modal .modal-header>div {
    margin: 0 auto;
  }
  
  #undone-modal .modal-footer {
    display: block;
    padding: 0;
    border: none;
  }
  
  .src {
    height: 50px;
  }
  
  #undone-modal .modal-dialog {
    max-width: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  
  #undone-modal .modal-content {
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
