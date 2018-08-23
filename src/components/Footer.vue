<template>
    <div class="footer_nav ">
        <div class="enews-popup">
            <div class="enews-popup-wrapper d-flex">
                <button type="button" class="close light" aria-label="Close" style=""></button>
                <div class="container">
                    <div class="row py-4 align-items-center">
                        <div class="col-auto">
                            <h1 class="h1">NEWSLETTER</h1>
                        </div>
                        <div class="col">
                            <h6>Sign up for the newsletter and gain access to exclusive offers and benefits.</h6>
                        </div>
                        <div class="col-auto ml-auto">
                            <div class="d-flex">
                                <input class="form-control next_row white" id="new_letter_email" type="text" name="email" placeholder="ENTER EMAIL ADDRESS" style="font-weight: normal;">
                                <button class="btnGrey col-auto" id="new_letter_submit">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper container">
            <div class="row wrap_content pt-3">
                <div class="col-lg-4 px-4 text-lg-left text-center">
    
                    <a class="collapse-toggle">
                        <h5 class="h5 hover-effect text-uppercase">collection</h5>
                    </a>
                    <div id="exampleAccordion1" class="collapse show" role="tabpanel" style="">
                        <a href="https://dev.undone.com/collection/lists/urban-chronograph">
                                'Build Your Own' Urban Chronograph
                            </a>
                        <a href="https://dev.undone.com/collection/lists/urban-fixed-design">
                                Urban Vintage  
                            </a>
                        <a href="https://dev.undone.com/collection/lists/urban-fixed-design1">
                                Urban Modern
                            </a>
                        <a href="https://dev.undone.com/collection/lists/urban-tropical">
                                Urban Tropical  
                            </a>
                        <a href="https://dev.undone.com/collection/lists/urban-mystique">
                                Urban Mystique
                            </a>
                        <a href="https://dev.undone.com/collection/lists/Aqua">
                                Standard Custom Aqua
                            </a>
                        <a href="https://dev.undone.com/collection/lists/aqua1960">
                                Aqua 1960
                            </a>
                        <a href="https://dev.undone.com/collection/lists/Aqua-cerakote">
                                Cerakote Coated Aqua
                            </a>
                    </div>
    
                </div>
                <div class="col-lg-4 px-4 text-lg-left text-center">
    
                    <a class=" collapse-toggle">
                        <h5 class="h5 hover-effect text-uppercase">accessories</h5>
                    </a>
                    <div id="exampleAccordion6" class="collapse show" role="tabpanel" style="">
                        <a href="https://dev.undone.com/accessories/details/packaging">packaging</a>
                        <a href="https://dev.undone.com/accessories/items_carousel/calf">22mm straps</a>
                        <a href="https://dev.undone.com/accessories/items_carousel/urban-perlon-20mm">20mm straps</a>
                        <a href="https://dev.undone.com/accessories/details/giftcard-450">giftcard</a>
                    </div>
    
                </div>
    
                <div class="col-lg-4 px-4 text-lg-left text-center">
                    <a class=" collapse-toggle">
                        <h5 class="h5 hover-effect text-uppercase">
                            contact us
                        </h5>
                    </a>
    
                    <div id="exampleAccordion3" class="collapse show" role="tabpanel" style="">
                        <a href="https://dev.undone.com/page/ContactUs">contact us</a>
                        <a href="https://dev.undone.com/page/career">Career</a>
                        <a href="https://dev.undone.com/page/FAQ">FAQ</a>
                        <a href="https://dev.undone.com/page/shipping-and-returns">Shipping And Returns</a>
                    </div>
                </div>
            </div>
    
            <div class="row wrap_content pb-5">
                <div class="col-lg-4 px-4 text-lg-left text-center">
                    <a class=" about collapse-toggle">
                        <h5 class="h5 hover-effect text-uppercase">ABOUT</h5>
                    </a>
                    <div id="exampleAccordion4" class="collapse show" role="tabpanel" style="">
                        <a href="https://dev.undone.com/page/AboutUs">
                                About us			</a>
                        <!-- <a href="https://dev.undone.com/gallery" >
                                gallery			</a> -->
                        <a href="https://dev.undone.com/page/news">
                                news			</a>
                        <a href="https://dev.undone.com/PressCenter">
                                Press Center			</a>
                        <a href="https://dev.undone.com/PressCenter/affiliate">
                                Affiliate Program			</a>
                    </div>
                </div>
                <div class="col-lg-4 px-4 text-lg-left text-center d-flex align-items-stretch flex-column">
                    <a class="h6 about collapse-toggle d-none d-lg-block" id="channel">
                        <h5 class="h5 hover-effect text-uppercase">OUR CHANNEL</h5>
                    </a>
                    <div class="social_row" id="">
                        <a href="https://www.facebook.com/UndoneWatches/" class="fb" target="_blank"></a>
                        <a href="https://www.instagram.com/UndoneWatches/" class="photo" target="_blank"></a>
                        <a href="https://twitter.com/undonewatches" class="tw-icon" target="_blank"></a>
                        <a href="http://www.youtube.com/c/UndoneWatches" class="youtube" target="_blank"></a>
                        <!-- <a href="http://pinterest.com/undone0002" class="print" target="_blank"></a>
                            <a href="http://google.com/+UndoneWatches" class="gplus" target="_blank"></a> -->
                    </div>
                </div>
    
                <div class="col-lg-4 px-4">
                    <div class="h6 b-no mt-5">
                        <h5 class="text-uppercase new_letter_title ">Sign up to our newsletter for product updates and promotions.</h5>
                    </div>
                    <div>
                        <div class="d-flex">
                            <input class="form-control next_row" id="bottom-newletter-field" type="text" name="email" placeholder="ENTER EMAIL ADDRESS" style="font-weight: normal;">
                            <button class="btn--dark col-auto" id="bottom-newletter-submit">SUBMIT</button>
                        </div>
                        <div class="enews-sign-up-result"></div>
    
                    </div>
    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
    }
</script>

<style>
    .footer_nav {
        margin-top: 59px;
    }
    
    .footer_nav a {
        text-transform: uppercase;
    }
    
    .form-control {
        border-radius: 0%;
    }
    
    .enews-popup {
        position: relative;
        width: 100%;
        bottom: 0px;
        left: 0;
        z-index: 100;
        background-color: #000;
        color: #fff;
        height: 100px;
    }
    
    .enews-popup .enews-popup-wrapper .close {
        position: absolute;
        right: 10px;
        top: 10px;
    }
    
    .footer_nav .collapse a {
        font-family: titillium_semibold;
        letter-spacing: 0.02rem;
        font-size: 0.8866rem;
        text-transform: uppercase;
        color: #000;
        -webkit-transition: 0.5s all;
        transition: 0.5s all;
    }
    
    .footer_nav .wrap_content a {
        padding: 3px 0;
        display: block;
        color: #b0aba9;
    }
    
    .footer_nav .collapse-toggle {
        margin-top: 3rem;
        margin-bottom: 1.5rem;
    }
</style>