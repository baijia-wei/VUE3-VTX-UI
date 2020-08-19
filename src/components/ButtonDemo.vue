<template>
  <div>button组件</div>
  <button class="button">这个是个按钮</button>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
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
</style>
