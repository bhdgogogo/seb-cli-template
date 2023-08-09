<template>
  <div class="home">
    <img alt="karl-cli logo" src="../assets/seb.png" />
    <HelloWorld />
  </div>
</template>

<script setup>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<style scoped>
img {
  margin-top: 20px;
  height: 240px;
  width: 300px;
}
</style>
