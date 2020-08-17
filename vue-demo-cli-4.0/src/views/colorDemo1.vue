<template>
  <div>
    <Button @click="changeColor('dark')">换肤操作(黑色)</Button>&nbsp;&nbsp;
    <Button @click="changeColor('light')">换肤操作(白色)</Button>
    
    <div class="backColor">
      <span class="textColor">换肤Demo</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      theme: true
    };
  },
  methods: {
    changeColor(theme) {
      document.querySelector('#theme').setAttribute('href','./skinCss/'+theme+'.css')
    }
  },
};
</script>

<style lang="less">
  .backColor {
    width: 500px;
    height: 500px;
    background-color: var(--frameBackgroundColor);
    .textColor {
      color: var(--frameTextColorDefault);
    }
  }
</style>
