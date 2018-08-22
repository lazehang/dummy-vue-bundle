<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :width="width" 
    :height="height" 
    :viewBox="viewBox" 
    :aria-labelledby="iconName" 
    role="presentation"
  >
    <title :id="iconName" lang="en">{{iconName}} icon</title>
    <g :fill="iconColor" class="g-wrapper" :style="{ 'transform': `scale(${scale})`  }">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'black'
    },
    scale : {
      type: [Number,String],
      default : 0.5
    },
    viewBox: {
      type: [String],
      default: "0 0 18 20"
    }
    
  }
}
</script>

<style >
svg {
  display: inline-block;
  cursor: pointer;
  vertical-align: baseline;
  /* margin-bottom: -2px; yes, I'm that particular about formatting */
}


</style>