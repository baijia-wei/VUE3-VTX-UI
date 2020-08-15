<template>
  <div>
    导航栏
    <router-link to="/">frank</router-link>|
    <router-link to="/xxx">frank2</router-link>
  </div>

  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
