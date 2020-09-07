<template>
  <div class="button-assembly">
    <div class="font">按钮类型</div>
    <button class="button-a">主要类型</button>
    <button class="button-b">信息按钮</button>
    <button class="button-e">信息按钮</button>
    <div class="font">朴素按钮</div>
    <button class="button-c">信息按钮</button>
    <button class="button-d">信息按钮</button>
  </div>
</template>

<script>
export default {
  components: {},
  setup() {},
};
</script>

<style scoped lang="scss">
.button-assembly {
  width: 400px;

  .button-a,
  .button-e,
  .button-b,
  .button-c,
  .button-d {
    margin-right: 20px;
    width: 100px;
    height: 35px;
    border-radius: 1px;
    background: rgb(12, 255, 214);
    border: none;
    outline: none;
  }

  .button-c {
    background: rgb(255, 255, 255);
    border: 1px solid rgb(0, 255, 115);
    color: rgb(0, 255, 115);
  }
  .button-d {
    background: rgb(255, 255, 255);
    border: 1px solid rgb(9, 185, 255);
    color: rgb(9, 185, 255);
  }
  .button-b {
    color: rgb(255, 255, 255);
    background: rgb(3, 129, 247);
  }
  .font{
    color: rgb(206, 203, 203);
  }
}
</style>
