<template>
  <div class="button-assembly">
    <div >button组件</div>
    <button class="button">这个是个按钮</button>
  </div>

  <div class="input-assembly">
    <div class="input-zuj">input组件</div>
    <input type="text" class="shur" value="输入框" />
  </div>


</template>

<script>
export default {
  components: { },
setup(){

}
};
</script>

<style scoped lang="scss">
.button {
  padding: 10px;
  border-radius: 5px;
  background: rgb(12, 255, 214);
  border: none;
  outline: none;
}
.input-assembly{
  >.shur{
width: 200px;
height: 30px;
outline: none;
  }

}

</style>
