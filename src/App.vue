<template> 
  <div>
    <h1>A Garden Journal</h1>

    <input placeholder="Plant name" v-model="name" />
    <input placeholder="Notes" v-model="notes" />
    <button @click="handleAddPlant">Add Plant</button>

    <div v-for="plant in plants" :key="plant.id">
      <h2>{{ plant.name }}</h2>
      <p>{{ plant.notes }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const plants = ref<{ id: number; name: string; notes: string }[]>([])
const name = ref('')
const notes = ref('')

function handleAddPlant() {
  if (name.value === '')  return
  plants.value.push({ id: Date.now(), name: name.value, notes: notes.value})
  name.value = ''
  notes.value = ''
}

</script>

<style>
</style>