<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
      <li>菜单3</li>
      <li>菜单1</li>
      <li>菜单2</li>
      <li>菜单3</li>
      <li>菜单1</li>
      <li>菜单2</li>
      <li>菜单3</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>('xxx')

    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }

    return { toggleMenu }
  },
}
</script>

<style scoped lang="scss">
.topnav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 12px;
    display: none;
    transform: translateX(-50%);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
