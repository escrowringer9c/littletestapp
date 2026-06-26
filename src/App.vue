<template>
  <div>
    <nav class="flex gap-4 p-4 bg-[#4a5720]">
      <router-link to="/journal" class="text-[#FDFBD4] font-semibold">Journal</router-link>
      <router-link to="/weather" class="text-[#FDFBD4] font-semibold">Weather</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style>
</style>