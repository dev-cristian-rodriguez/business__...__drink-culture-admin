<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <main>
    <h1>Home</h1>
    <HelloWorld msg="You did it!" />

    <nav :class="$style.navContent">
      <RouterLink :class="$style.navItem" to="/">Home</RouterLink>
      <RouterLink :class="$style.navItem" to="/about">About</RouterLink>
    </nav>
  </main>
</template>

<style module>
.navContent {
  display: flex;
  border-top: 1px solid rgb(47, 47, 166);
  margin-top: 15px;
  gap: 10px;
}

.navItem {
  color: rgb(47, 47, 166);
  text-decoration: underline;
}
</style>
