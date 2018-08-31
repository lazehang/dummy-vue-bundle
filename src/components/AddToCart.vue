<template>
    <div id="add-to-cart-btn">
        <b-modal centered id="addToCartModal" ref="addToCartModal" title="You have successfully added product to cart!">
            <div class="d-flex flex-column">
                <button class="btn btn-dark" @click="checkout">Checkout</button>
                <button class="btn btn-light" @click="hideModal">Continue Shopping</button>
            </div>
        </b-modal>
        <form action="#" method="post">
            <input type="hidden" name="cmd" value="_cart">
            <input type="hidden" name="add" value="1">
            <input type="hidden" name="shoe_item" value="Undone Customized">
            <input type="hidden" name="amount" value="2340.00">
            <button type="submit"  class="btn btn-secondary btn--add-to-cart" @click="checkout"> 
                ADD TO CART
            </button>
            <a href="#" data-toggle="modal" data-target="#myModal1"></a>
        </form>
       
    </div>
</template>

<script>
    import bModal from 'bootstrap-vue/es/components/modal/modal'
    
    export default {
        name: 'addToCart',
        components: {
            'b-modal': bModal
        },
        methods: {
            checkout() {
                this.hideModal()
                this.$emit('checkout')
            },
            hideModal() {
                this.$refs.addToCartModal.hide()
            }
        }
    }
</script>
<style>
    #addToCartModal button {
        width: 150px;
        margin: 0 auto 1rem;
    }
    #addToCartModal footer.modal-footer {
        display: none ;
    }
    .btn.btn-secondary.btn--add-to-cart {
        font-family: big_noodle_titling;
        letter-spacing: .18rem;
        font-size: 17px;
        border: 1px solid transparent;
        cursor: pointer;
        height: 40px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 0;
        padding-left: 15px;
        padding-right: 15px;
        width: 260px;
        height: 45px;
        background-color: #961c12;
        color: #fff;
        border-color: #961c12;
    }
</style>