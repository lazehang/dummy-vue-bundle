<template>
  <div class="mt-5">
    <div class="container">
      <div class="row">
  
        <div class="col-12 col-md-6 col-sm-12 watch">
          <img v-if="active !== 'back'" :src="`https://undone.com/api/previewImage/${imageData}`" width="auto" />
          <img v-else :src="backImg" width="auto" />
          <!-- <a href="#" @click="toggleView" class="upperCase">Turn Around</a> -->
        </div>
        <div class="col-12 col-sm-12 col-md-6">
          <div class="watch-cate">
            <h2>Tropical </h2>
            <h3 class="py-2">HK$ {{isStandard ? 2735 : 3000}}</h3>
          </div>
          <div class="watch-cate">
            <div class="mx-auto my-auto categories d-flex">
              <div class="mx-auto px-2 icon-box d-flex align-items-center" :class="activeCate('dial')" @click="select('dial')">
                <IconBase width="40" height="40">
                  <iconDial />
                </IconBase>
              </div>
              <div class="mx-auto px-2 icon-box d-flex align-items-center" :class="activeCate('case')" @click="select('case')">
                <IconBase width="40" height="40">
                  <iconCase />
                </IconBase>
              </div>
              <div class="mx-auto px-2 icon-box d-flex align-items-center" :class="activeCate('hands')" @click="select('hands')">
                <IconBase width="40" height="40">
                  <iconHands />
                </IconBase>
              </div>
              <div class="mx-auto px-2 icon-box d-flex align-items-center" :class="activeCate('strap')" @click="select('strap')">
                <IconBase width="40" height="40">
                  <iconStrap />
                </IconBase>
              </div>
              <div class="mx-auto px-2 icon-box d-flex align-items-center" :class="activeCate('back')" @click="select('back')">
                <IconBase width="40" height="40">
                  <iconBack />
                </IconBase>
              </div>
  
            </div>
          </div>
          <div class="watch-cate">
            <div class="col">
              <span class="bread-crumb  text-uppercase">
                                  {{active}}
                                </span>
              <span class="bread-crumb  text-uppercase px-2">
                                    |
                                </span>
              <span class="bread-crumb  text-uppercase">
                                    {{activePartObj.name ? activePartObj.name : ''}}
                                </span>
            </div>
  
            <div class="d-flex">
              <div class="col-3 partimage" v-for="item in activeParts" :key="item.id" @click="changePart(item.id, active)">
                <div :class="item.id == selected ? 'inner active': 'inner'" :style="`background-image:url(${item.img})`"></div>
              </div>
            </div>
          </div>
          <div class="watch-cate" v-if="active === 'dial'">
            <div class="w-100  d-flex justify-content-between my-3 bread-crumb-container">
              <div class="col">
                <span class="bread-crumb  text-uppercase">  
                                          EXTRA ADD-ON
                                      </span>
                <span class="bread-crumb  text-uppercase px-2">  
                                      | 
                                      </span>
                <span class="bread-crumb  text-uppercase">  
                                          ADD INITIAL 
                                      </span>
              </div>
            </div>
            <div class="row glassPrint no-gutters dial-initial">
              <div class="col-12">
                <div class="row no-gutters">
                  <div class="col-12">
                    <div class="row no-gutters d-none d-sm-flex">
                      <div class="col ">
                        <div class="h4">ADDING INITIAL</div>
                      </div>
                      <div class="col-auto text-right h5 dial-initial__price">+ HK$ 160</div>
                    </div>
                    <div class="row no-gutters align-items-center">
                      <input type="text" placeholder="ADD INITIAL" maxlength="12" class="form-control form-control-input pl-2 my-0">
                      <button class="dial-initial__button ml-3 text-uppercase">apply</button>
                      <div class="ml-auto d-block d-sm-none h5 dial-initial__price">+ HK$ 160</div>
                    </div>
                    <div class="row no-gutters">
                      <div class="col">
                        <div class="row select-font-wrapper w-100 mt-3">
                          <div class="col-4   col-lg-4">
                            <div class="d-none d-sm-block">
                              POSITION
                            </div>
                            <select class="custom-select dial-initial__selecter">
                                <option value="left">
                                  Left
                                </option>
                                <option value="right">
                                  Right
                              </option>
                              </select>
                          </div>
                          <div class="col-4   col-lg-4">
                            <div class="d-none d-sm-block">
                              COLOR
                            </div>
                            <select class="custom-select dial-initial__selecter">
                                    <option value="#000">
                                        Black
                                    </option>
                                    <option value="#fff">
                                        White
                                    </option>
                                  </select>
                          </div>
  
                          <div class="col-4   col-lg-4">
                            <div class="d-none d-sm-block">
                              FONT
                            </div>
                            <select class="custom-select dial-initial__selecter">
                                    <option value="roboto">
                                        Roboto
                                    </option>
                                    <option value="poiret_one">
                                        Poiret One
                                    </option>
                                    <option value="georgia">
                                        Georgia
                                    </option>
                                  </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="watch-cate">
            <div id="add-to-cart-btn">
              <button type="button" @click="hideModal" class="btn action-button action-button-buy btn--add-to-cart  btn_add_to_cart btn-secondary"> 
                                ADD TO CART
                              </button>
            </div>
          </div>
  
  
        </div>
      </div>
    </div>
  
    <div class="icon3-row row no-gutters text-white justify-content-center my-5 my-md-3 bg-dark">
      <div class="col-12 col-md-auto justify-content-center d-flex align-items-center py-3 mx-4 icon-row-3 ">
        <a href='#' class="link-light">
          <IconBase scale="0.9" width="20" height="20" iconColor="white">
            <plane />
          </IconBase>
          <h4>
            FREE SHIPPING WORLDWIDE
          </h4>
        </a>
      </div>
      <div class="col-12 col-md-auto justify-content-center d-flex align-items-center py-3 mx-4 icon-row-3 ">
        <a href='#' class="link-light">
          <IconBase scale="0.9" width="20" height="20" iconColor="white">
            <dtfae />
          </IconBase>
          <h4>
            12-MONTH WARRENTY
          </h4>
        </a>
      </div>
      <div class="col-12 col-md-auto justify-content-center d-flex align-items-center py-3 mx-4 icon-row-3 ">
        <a href='#' class="link-light">
          <IconBase scale="0.9" width="20" height="20" iconColor="white">
            <dhb />
          </IconBase>
          <h4>
            100% MADE TO ORDER
          </h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import IconBase from "./icons/iconBase.vue";
  import iconStrap from "./icons/strap.vue";
  import iconCase from "./icons/case.vue";
  import iconDial from "./icons/dial.vue";
  import iconHands from "./icons/hands.vue";
  import iconBack from "./icons/back.vue";
  import iconMovement from "./icons/movement.vue";
  import plane from "./icons/plane.vue"
  import dtfae from "./icons/dtfae.vue"
  import dhb from "./icons/dhb.vue"
  
  export default {
    name: "Undone",
    components: {
      IconBase,
      iconCase,
      iconDial,
      iconHands,
      iconMovement,
      iconStrap,
      iconBack,
      plane,
      dtfae,
      dhb
    },
    data() {
      return {
        isStandard: true,
        dial: "216",
        strap: "314",
        case: "209",
        hands: "204",
        second: "225",
        movement: "243",
        bezel: "274",
        active: "dial",
        backtype: 2,
        selected: "",
        backImgUrl: "https://www.undone.com/api/previewBackImage/",
        watch: {
          dial: [{
              id: 216,
              img: "https://www.undone.com/media/t/14042/dial_v01.png",
              name: "standard"
            },
            {
              id: 224,
              img: "https://www.undone.com/media/t/14042/dial_v05.png"
            },
            {
              id: 227,
              img: "https://www.undone.com/media/t/14042/dial_v07.png"
            }
          ],
          case: [{
              id: 209,
              img: "https://www.undone.com/media/t/14029/case_sil.png"
            },
            {
              id: 208,
              img: "https://www.undone.com/media/t/14029/case_blk.png"
            },
            {
              id: 210,
              img: "https://www.undone.com/media/t/14029/case_gd.png"
            },
            {
              id: 211,
              img: "https://www.undone.com/media/t/14029/case_rgd.png"
            }
          ],
          hands: [{
              id: 204,
              img: "https://www.undone.com/media/t/14077/hands_ip_blu.png"
            },
            {
              id: 195,
              img: "https://www.undone.com/media/t/14077/hands_blk.png"
            },
            {
              id: 196,
              img: "https://www.undone.com/media/t/14077/hands_sil.png"
            }
          ],
          strap: [{
              id: 314,
              img: "https://www.undone.com/media/t/14098/Ustrap_caviar_brn.png"
            },
            {
              id: 315,
              img: "https://www.undone.com/media/t/14098/Ustrap_caviar_blk.png"
            }
          ],
          back: [{
              id: 1,
              img: "https://www.undone.com/images/filter/U_caseback/caseback_glass.png"
            },
            {
              id: 2,
              img: "https://www.undone.com/images/filter/U_caseback/caseback_solid.png"
            }
          ]
        }
      };
    },
    computed: {
      imageData() {
        return (
          this.case+
          "-" +
          this.bezel +
          "-" +
          this.dial +
          "-" +
          this.hands +
          "-" +
          this.second +
          "-" +
          this.movement +
          "-" +
          this.strap
        );
      },
      activeParts() {
        switch (this.active) {
          case "dial":
            this.selected = this.dial;
            return this.watch.dial;
            break;
          case "case":
            this.selected = this.case;
            return this.watch.case;
            break;
          case "hands":
            this.selected = this.hands;
            return this.watch.hands;
            break;
          case "strap":
            this.selected = this.strap;
            return this.watch.strap;
            break;
          case "back":
            this.selected = this.backtype;
            return this.watch.back;
            break;
          default:
            return {};
        }
      },
      backImg() {
        return this.backImgUrl + this.imageData + "/" + this.backtype;
      },
      activePartObj() {
        const active = this.activeParts.find(part => part.id == this.selected);
        if (active) {
          return active;
        }
      }
    },
    methods: {
      hideModal() {
        this.$emit('hide')
      },
      activeCate(cate) {
        return cate == this.active ? "active" : "";
      },
      toggleView() {
        if (this.active !== "back") {
          this.preview = "back";
        } else {
          this.preview = "front";
        }
      },
      select(part) {
        this.active = part;
      },
      changePart(id, part) {
        switch (part) {
          case "dial":
            this.dial = id;
            break;
          case "case":
            this.case = id;
            break;
          case "hands":
            this.hands = id;
            break;
          case "strap":
            this.strap = id;
            break;
          case "back":
            this.backtype = id;
            break;
          default:
        }
  
        this.selected = id;
      }
    },
    mounted() {
      console.log(this.watch.dial);
    }
  };
</script>

<style scoped>
  .categories {
    height: 55px;
    background: #e6e6e6;
  }
  
  .partimage {
    padding: 1px;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 16.66666667%;
    flex: 0 1 16.66666667%;
    height: 100px;
  }
  
  .partimage .inner {
    width: 90px;
    height: 100%;
    background-color: #e6e6e6;
    background-size: 90px;
    color: #000;
    background-position: 0 6px;
    text-transform: uppercase;
    background-repeat: no-repeat;
    border: 1px solid transparent;
  }
  
  .partimage .inner.active,
  .partimage .inner:hover {
    color: #000;
    border-color: #f1f2f2;
    position: relative;
  }
  
  .partimage .inner.active::before,
  .partimage .inner:hover::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 1px solid #000;
    background-color: rgba(0, 0, 0, 0.433);
  }
  
  .upperCase {
    text-transform: uppercase;
  }
  
  .watch-cate {
    margin-bottom: 1rem;
  }
  
  .watch img {
    height: 500px;
  }
  
  .icon-box.active {
    background-color: #000;
    border-color: #000;
  }
  
  .icon-box.active svg g {
    fill: white;
  }
  
  .glassPrint {
    background-color: #e6e6e6;
    min-height: 110px;
    padding: 15px;
    border: 1px solid transparent;
  }
  
  .glassPrint .form-control-input {
    padding: 2px 0;
    width: 200px;
    max-width: 100%;
    color: #000;
  }
  
  .glassPrint body button.dial-initial__button,
  .glassPrint button.dial-initial__button,
  body button.btn--dark {
    font-family: big_noodle_titling;
    letter-spacing: 0.18rem;
    font-size: 1.116rem;
    border: 1px solid transparent;
    cursor: pointer;
    height: 40px;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
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
    background-color: #000;
    color: #fff;
  }
  
  .bg-dark {
    background-color: #000 !important;
  }
  
  .link-light {
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  
  .link-light h4 {
    color: #fff;
    margin-left: 5px;
    line-height: 1.25rem;
    letter-spacing: 0.18rem;
  }
  
  .link-light:hover {
    color: #cbcbcb;
  }
  
  .bread-crumb {
    font-size: 1.116rem;
    letter-spacing: 0.18rem;
  }
</style>
