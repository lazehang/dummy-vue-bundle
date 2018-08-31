<template>
  <div class="undone-customizer">
    <productCard @toggleUndone="toggleUndone" v-if="hasProductWrapper"/>
    <a v-else class="undone-trigger">Undone</a>
    <transition name="slide-fade">
      <div id="undone-customizer-modal" v-show="showModal">
        <Undone @toggle="toggleUndone"/>
      </div>
    </transition>
  </div>
</template>

<script>
  import Undone from './Undone.vue'
  import productCard from './ProductCard.vue'
  
  export default {
    name: 'Customizer',
    components: {
      Undone, productCard
    },
    data() {
      return {
        showModal: false,
        hasProductWrapper: false
      }
    },
    methods: {
      hideModal() {
        this.$refs.undoneModal.hide()
      },
      toggleUndone() {
        this.showModal = !this.showModal;

        if (this.showModal) {
          document.body.style = "position:fixed"
        }else {
          document.body.style = ""
        }

      }
    },
    mounted() {
      if (document.getElementsByClassName('product-sec1')) {
        this.hasProductWrapper = true
      }
    },
  }
</script>

<style>
  .undone-customizer {
    height: 100%;
    width: 100%;
  }

  #undone-customizer-modal {
    z-index: 111;
    position: fixed;
    left:0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow-y:auto;
    overflow-x: hidden;
    background: #0000008c;
  }

    
  #undone-customizer-modal .undone-customizer-dialog{
    font-size: 14px;
    letter-spacing: 0.02rem;
  }

  .undone-trigger{
    padding: 0.5rem 2rem;
    background: #000;
    border-radius: 0;
    position: fixed;
    bottom: 3rem;
    left: 0;
    z-index:1111;
  
  }

  .undone-trigger img {
    height: 80px;
    width: auto;
    margin: 0 auto;
  }
  #undone-customizer-modal h1,
  #undone-customizer-modal h3,
  #undone-customizer-modal h4,
  #undone-customizer-modal .h4,
  #undone-customizer-modal .h5  {
    font-family: big_noodle_titling;
  }
  
  #undone-customizer-modal h1 {
    letter-spacing: 0.02rem;
    font-size: 24px;
  }
  
  #undone-customizer-modal h3 {
    font-family: titillium_semibold;
    letter-spacing: 0.02rem;
    font-size: 19px;
  }
  
  #undone-customizer-modal h4 {
    font-size: 17px;
  }
  
  #undone-customizer-modal h2 {
    font-family: big_noodle_titling;
    letter-spacing: 0.18rem;
    font-size: 22px;
  }
  
  #undone-customizer-modal h6 {
    font-family: titillium_semibold;
    letter-spacing: 0.02rem;
    font-size: 16px;
  }

  #undone-customizer-modal .h4  {
    font-family: big_noodle_titling;
    letter-spacing: 0.18rem;
    font-size: 17px;
  }

  #undone-customizer-modal .h5  {
    font-size: 16px;
  }
  
  #undone-customizer-modal a {
    font-family: titillium_semibold;
    letter-spacing: 0.02rem;
    font-size: 13px;
    color: #000;
    border: none;
  }
  
  #undone-customizer-modal a:hover,
  #undone-customizer-modal a:active,
  #undone-customizer-modal a:focus {
    color: #cbcbcb;
    text-decoration: none;
  }
  
  #undone-customizer-modal.modal {
    font-family: big_noodle_titling;
    
  }
  
  #undone-customizer-modal .modal-header {
    background: #000;
    margin: 0 0;
    color: #fff;
  }
  #undone-customizer-modal .modal-content {
    z-index: 2147483647;    
  }
  #undone-customizer-modal .modal-header>div {
    margin: 0 auto;
  }
  
  #undone-customizer-modal .modal-footer {
    display: block;
    padding: 0;
    border: none;
  }
  
  .src {
    height: 50px;
  }
  
  #undone-customizer-modal .modal-footer {
    display:none;
  }
  
  #undone-customizer-modal {
    text-align: left;
  }
  
  .watch-cate {
    margin-bottom: 1rem;
  }

  .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
