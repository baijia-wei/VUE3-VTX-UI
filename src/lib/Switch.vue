<template>
  <div>Swith组件</div>
  <button @click="toggle" :class="{checked:value}">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("input", !props.value);
    };

    return { toggle };
  },
};
</script>

<style scoped lang="scss">
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;

  background: rgb(82, 82, 82);
  border-radius: $h/2;
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: left 300ms;
}

button.checked {
  background: blue;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
button:focus {
  outline: none;
}
</style>
