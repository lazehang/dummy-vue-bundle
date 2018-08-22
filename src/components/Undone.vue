<template>
    <div>
        <div class="container">
            <div class="row mt-3">
                
                <div class="col-12 col-md-6 col-sm-12 watch">
                    <img v-if="active !== 'back'" :src="`https://undone.com/api/previewImage/${imageData}`" width="auto"/>
                    <img v-else :src="backImg" width="auto"/>
                    <!-- <a href="#" @click="toggleView" class="upperCase">Turn Around</a> -->
                </div>
                <div class="col-12 col-sm-12 col-md-6">
                 <div class="watch-cate">
                     <h2>Tropical </h2>
                     <b>HK$ {{isStandard ? 2735 : 3000}}</b>
                 </div>
                 <div class="watch-cate">
                    <div class="mx-auto my-auto categories d-flex">
                        <div class="mx-auto px-2 icon-box d-flex align-items-center" :class="activeCate('dial')" @click="select('dial')">
                            <IconBase width="40" height="40" ><iconDial /></IconBase>
                        </div>
                        <div class="mx-auto px-2 icon-box d-flex align-items-center" :class="activeCate('case')" @click="select('case')">
                            <IconBase width="40" height="40" ><iconCase /></IconBase>
                        </div>
                        <div class="mx-auto px-2 icon-box d-flex align-items-center" :class="activeCate('hands')" @click="select('hands')">
                            <IconBase width="40" height="40" ><iconHands /></IconBase>
                        </div>
                        <div class="mx-auto px-2 icon-box d-flex align-items-center" :class="activeCate('strap')" @click="select('strap')">
                           <IconBase width="40" height="40"  ><iconStrap /></IconBase>
                        </div>
                        <div class="mx-auto px-2 icon-box d-flex align-items-center" :class="activeCate('back')" @click="select('back')">
                            <IconBase width="40" height="40"   ><iconBack /></IconBase>
                        </div>

                    </div>
                 </div>
                 <div class="watch-cate">
                     <div class="title">
                         <h6 class="upperCase"> {{active}} {{activePartObj.name ? '| '+activePartObj.name : ''}}</h6>
                     </div>
                     <div class="d-flex" >
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
                                        <div class="col-auto text-right h5 dial-initial__price">+ HK$  160</div>
                                    </div> 
                                    <div class="row no-gutters align-items-center">
                                        <input type="text" placeholder="ADD INITIAL" maxlength="12" class="form-control form-control-input pl-2 my-0"> 
                                            <button class="dial-initial__button ml-3 text-uppercase">apply</button> 
                                            <div class="ml-auto d-block d-sm-none h5 dial-initial__price">+ HK$  160</div>
                                    </div> 
                                    <div class="row no-gutters">
                                        <div class="col"><div class="row select-font-wrapper w-100 mt-3"><div class="col-4   col-lg-4"><div class="d-none d-sm-block">
                                            POSITION
                                        </div> <select class="custom-select dial-initial__selecter"><option value="left">
                                                    Left
                                                </option><option value="right">
                                                    Right
                                                </option></select></div> <div class="col-4   col-lg-4"><div class="d-none d-sm-block">
                                            COLOR
                                        </div> <select class="custom-select dial-initial__selecter"><option value="#000">
                                                    Black
                                                </option><option value="#fff">
                                                    White
                                                </option></select></div> <div class="col-4   col-lg-4"><div class="d-none d-sm-block">
                                            FONT
                                        </div> <select class="custom-select dial-initial__selecter"><option value="roboto">
                                                    Roboto
                                                </option><option value="poiret_one">
                                                    Poiret One
                                                </option><option value="georgia">
                                                    Georgia
                                                </option></select></div></div></div></div></div></div></div></div></div>
                 <div class="watch-cate">
                    <button class="btn btn-danger" @click="hideModal">ADD TO CART</button>
                 </div>


                </div>
            </div>
        </div>

        <div class="icon3-row row no-gutters text-white justify-content-center my-5 my-md-3 bg-dark"><div class="col-12 col-md-auto justify-content-center d-flex align-items-center py-3 mx-4 icon-row-3 "><a href="https://dev.undone.com/page/shipping-and-returns" class="link-light"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 20" aria-labelledby="box" role="presentation"><title id="box" lang="en">box icon</title> <g fill="white" class="g-wrapper" style="transform: scale(0.9);"><g><path d="M16,9l.18-.09a.76.76,0,0,1,.84.13c.17.14.32.29.48.44a.79.79,0,0,1,0,1.13l-.62.66a.18.18,0,0,0,0,.13c.18.51.36,1,.55,1.53h0a.81.81,0,0,1,1.09.12l.38.36A.79.79,0,0,1,19,14.57l-.62.67a.15.15,0,0,0,0,.19L19,17.31a.81.81,0,0,1-.22.94l-.59.54a.76.76,0,0,1-1.08,0c-.27-.3-.53-.62-.79-.93L14,15c-.84-1-1.69-2-2.53-3.07a1.29,1.29,0,0,1-.15-.17l-.37.36c-.83.8-1.72,1.51-2.62,2.22L7,15.27c-.09.07-.07.13,0,.21.23.93.46,1.86.68,2.79a.78.78,0,0,1-.5,1l-.57.23a.8.8,0,0,1-1.07-.35l-1.14-2L4.32,17l-.59.23a.7.7,0,0,1-.7,0,.58.58,0,0,1-.26-.64c.06-.26.15-.52.22-.8L1.8,15.25l-1-.46a.8.8,0,0,1-.46-1.06c.07-.2.13-.41.2-.62a.77.77,0,0,1,.9-.54L4.34,13a.21.21,0,0,0,.24-.11c.83-1.21,1.65-2.42,2.49-3.62.17-.26.39-.49.59-.74l.1-.13-.89-.63L3.28,5.29l-2.85-2A.8.8,0,0,1,.23,2l.44-.57a.78.78,0,0,1,.89-.27l1.52.43a.68.68,0,0,1,.14,0c.3.17.51.06.7-.21A5.11,5.11,0,0,1,4.31,1,.79.79,0,0,1,5.45,1l.37.35A.8.8,0,0,1,6,2.4l.1,0,1.42.39a.19.19,0,0,0,.21-.06c.19-.22.39-.44.6-.65a.76.76,0,0,1,1.11-.06c.17.14.33.29.48.44a.81.81,0,0,1,.13,1l.26.08L11.69,4a.19.19,0,0,0,.23-.06c.54-.58,1.07-1.17,1.62-1.74a7.56,7.56,0,0,1,2.92-2A2.68,2.68,0,0,1,17.83,0a1.15,1.15,0,0,1,1,.74,2.3,2.3,0,0,1,.11,1.13,5.76,5.76,0,0,1-.73,2,8.34,8.34,0,0,1-1.13,1.57c-.52.58-1.06,1.15-1.59,1.72a.17.17,0,0,0-.06.2c.2.51.38,1,.57,1.55ZM3.75,16.31l0,0c.35-.22.69-.42,1-.65.67-.44,1.35-.88,2-1.35s1.32-1,2-1.56a19.54,19.54,0,0,0,2.23-2q2.64-2.84,5.27-5.69a6.8,6.8,0,0,0,.5-.59,6.52,6.52,0,0,0,1.06-1.82A5.58,5.58,0,0,0,18,2.08a1.87,1.87,0,0,0,0-.88.36.36,0,0,0-.36-.32,2.06,2.06,0,0,0-1,.14,6.74,6.74,0,0,0-2.61,1.79C12.82,4.2,11.53,5.62,10.23,7,9.69,7.61,9.14,8.2,8.6,8.8a30.87,30.87,0,0,0-2.86,4c-.62,1-1.17,2-1.75,3A5.38,5.38,0,0,0,3.75,16.31ZM.91,2.56,8.33,7.77l2.82-3L11,4.68,9.26,4.21l-3.82-1L3,2.49l-.14-.08H2.7L1.45,2.06c-.05,0-.12,0-.15,0S1.05,2.39.91,2.56ZM17.7,18.08l.32-.3c.19-.16.19-.16.11-.38l-2-5.55c-.44-1.21-.87-2.42-1.31-3.64L14.73,8l-2.81,3.05ZM1.2,14l2.16,1L4,13.86l-2.62-.42Zm3.89,2.62,1.19,2.07.54-.22-.63-2.58ZM4.57,2A3,3,0,0,0,5,2.12S5.16,2,5.21,2s0-.08,0-.1c-.25-.25-.25-.25-.49,0ZM18,14.39l.31-.34-.21-.25-.1-.07c-.19.14-.19.14-.12.35S17.92,14.26,18,14.39Zm-1.43-4,.32-.35-.35-.32c-.05.09-.13.17-.12.23A2.08,2.08,0,0,0,16.54,10.44ZM9.26,3.08l-.32-.3-.32.34c.12,0,.22,0,.31.09A.23.23,0,0,0,9.26,3.08Z"></path><path d="M16.91,2.7l-.61-.56c.08-.16.16-.35.26-.53a.11.11,0,0,1,.1,0,1,1,0,0,1,.78.73.12.12,0,0,1,0,.11Z"></path><path d="M16.13,2.11,15.57,2a.17.17,0,0,1-.11-.09s0-.08.06-.11a1.44,1.44,0,0,1,.89-.27Z"></path><path d="M17.5,2.55a1.45,1.45,0,0,1-.18.88.5.5,0,0,1-.14.1.35.35,0,0,1-.08-.13C17,3.23,17,3.05,17,2.87Z"></path></g></g></svg> <span>
                      FREE SHIPPING WORLDWIDE
                      </span></a></div> <div class="col-12 col-md-auto justify-content-center d-flex align-items-center py-3 mx-4 icon-row-3 "><a href="https://dev.undone.com/page/FAQ" class="link-light"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 20" aria-labelledby="box" role="presentation"><title id="box" lang="en">box icon</title> <g fill="white" class="g-wrapper" style="transform: scale(0.9);"><g><path d="M17.71,8c0,1.52.06,3.05,0,4.57a8.23,8.23,0,0,1-2,4.78,14,14,0,0,1-6.46,4.56,1.21,1.21,0,0,1-.75,0,14,14,0,0,1-6.91-5.06A8.33,8.33,0,0,1,0,11.79C0,9,0,6.28,0,3.52c0-.43.15-.61.58-.66A20.43,20.43,0,0,0,8.41.15a.75.75,0,0,1,.9,0A20.45,20.45,0,0,0,17,2.85c.52.07.69.26.67.78,0,1.46,0,2.92,0,4.38ZM17,8.1h0V4c0-.25,0-.42-.34-.47A21.76,21.76,0,0,1,9.1.86a.57.57,0,0,0-.48,0,21.57,21.57,0,0,1-7.37,2.6c-.48.07-.56.27-.56.7,0,2.7.07,5.41.05,8.11a6.63,6.63,0,0,0,1.05,3.58A13,13,0,0,0,8.6,21.24a.81.81,0,0,0,.51,0,13.11,13.11,0,0,0,6.94-5.6,7.13,7.13,0,0,0,1-3.42C17.08,10.86,17,9.48,17,8.1Z"></path><path d="M2.51,9c0-1.12,0-2.23,0-3.35,0-.33.12-.46.44-.53a20.65,20.65,0,0,0,5.6-2,.72.72,0,0,1,.61,0,19.55,19.55,0,0,0,5.55,2c.38.08.5.24.5.63,0,2.16,0,4.32,0,6.48a5.69,5.69,0,0,1-1.36,3.43A10.58,10.58,0,0,1,9.28,19a1.19,1.19,0,0,1-.83,0,10.39,10.39,0,0,1-5.11-4.2A5.1,5.1,0,0,1,2.53,12c0-1,0-2,0-3ZM14.58,5.7l-.38-.11a19.2,19.2,0,0,1-5-1.79.66.66,0,0,0-.7,0,18.47,18.47,0,0,1-5,1.78c-.28.06-.42.17-.42.5,0,1.9,0,3.81,0,5.72a5.22,5.22,0,0,0,.78,2.76,10,10,0,0,0,4.77,3.9.75.75,0,0,0,.51,0,10.06,10.06,0,0,0,4.08-3A5.42,5.42,0,0,0,14.61,12c0-2,0-3.94,0-5.92C14.61,6,14.59,5.83,14.58,5.7Z"></path></g></g></svg> <span>
                          12 - MONTH WARRANTY
                      </span></a></div> <div class="col-12 col-md-auto justify-content-center d-flex align-items-center py-3 mx-4 icon-row-3 "><a href="https://dev.undone.com/page/AboutUs" class="link-light"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 20" aria-labelledby="box" role="presentation"><title id="box" lang="en">box icon</title> <g fill="white" class="g-wrapper" style="transform: scale(0.9);"><g><path d="M19.57,10.52c0,1.55,0,3.1,0,4.65a.55.55,0,0,1-.32.55l-9.18,5.19a.5.5,0,0,1-.56,0C6.45,19.19,3.39,17.45.33,15.73A.59.59,0,0,1,0,15.16Q0,10.57,0,6a.79.79,0,0,1,.45-.8Q5,2.66,9.47.09a.58.58,0,0,1,.62,0l9.15,5.17a.61.61,0,0,1,.33.59C19.56,7.41,19.57,9,19.57,10.52ZM.86,6.58a.68.68,0,0,0,0,.12v8.15c0,.15.07.19.16.25l8.15,4.6.2.1v-.29q0-3.92,0-7.83a.42.42,0,0,0-.24-.43L2.73,7.64Zm9.35,13.23a2,2,0,0,0,.27-.15l8-4.54a.35.35,0,0,0,.21-.37c0-2.64,0-5.29,0-7.93V6.59a.28.28,0,0,0-.11,0L16.43,7.87a.23.23,0,0,0-.11.26c0,1,0,1.95,0,2.92a.6.6,0,0,1-.35.61c-.73.37-1.46.77-2.19,1.15-.42.22-.71,0-.71-.46V9.78l-.2.1-2.48,1.4a.31.31,0,0,0-.18.33v8.2ZM12.58,9,12.48,9C9.7,7.41,6.91,5.84,4.11,4.29a.31.31,0,0,0-.25,0c-.41.22-.81.46-1.21.68l-1.41.8.23.14L5.34,8.09l4.29,2.43a.28.28,0,0,0,.25,0C10.77,10.06,11.66,9.55,12.58,9Zm5.75-3.25-.08,0L9.9,1a.31.31,0,0,0-.25,0L7.92,2l-.53.31a2,2,0,0,1,.23.14L10.1,3.85l5.65,3.23a.26.26,0,0,0,.29,0L17.9,6Zm-4.41,6L15.39,11s.07-.12.07-.18c0-.9,0-1.79,0-2.69a.3.3,0,0,0-.12-.21c-.27-.17-.56-.32-.84-.48L6.62,2.88a.22.22,0,0,0-.27,0c-.24.15-.49.28-.73.42l-.71.4a1.46,1.46,0,0,0,.18.11l8.23,4.61c.62.34.6.28.6,1.06S13.92,11,13.92,11.74Z"></path></g></g></svg> <span>
                          100% MADE TO ORDER
                      </span></a></div></div>
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

export default {
  name: "Undone",
  components: {
    IconBase,
    iconCase,
    iconDial,
    iconHands,
    iconMovement,
    iconStrap,
    iconBack
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
        dial: [
          {
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
        case: [
          {
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
        hands: [
          {
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
        strap: [
          {
            id: 314,
            img: "https://www.undone.com/media/t/14098/Ustrap_caviar_brn.png"
          },
          {
            id: 315,
            img: "https://www.undone.com/media/t/14098/Ustrap_caviar_blk.png"
          }
        ],
        back: [
          {
            id: 1,
            img:
              "https://www.undone.com/images/filter/U_caseback/caseback_glass.png"
          },
          {
            id: 2,
            img:
              "https://www.undone.com/images/filter/U_caseback/caseback_solid.png"
          }
        ]
      }
    };
  },
  computed: {
    imageData() {
      return (
        this.case +
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
<style>
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
  width: 100%;
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
.link-light span {
    line-height: 20px;
    margin-left: 5px;
}
</style>
