<template>
  <div>
    <Button @click="toggleColor">换肤操作</Button>{{theme}}
    <div class="backColor">
      <span class="textColor">换肤Demo</span>
    </div>
  </div>
</template>

<script>
import { lightTheme, darkTheme } from "../../public/skinLess/variable"
export default {
  name: "Demo",
  data() {
    return {
      theme: true
    };
  },
  methods: {
    toggleColor() {
      this.theme = !this.theme;
      //let currentTheme=this.theme ? lightTheme : darkTheme;
      window.less.modifyVars(this.theme ? lightTheme : darkTheme).then(res => {
        console.log('换肤成功');
      })
    }
  },
};
</script>

<style lang="less">
  .backColor {
    width: 500px;
    height: 500px;
    background-color: @frameBackgroundColor;
    .textColor {
      color: @frameTextColorDefault;
    }
  }
</style>
