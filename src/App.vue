<template> 
  <div class="min-h-screen bg-[#6b7c2a] p-8">
    <h1 class="text-4xl font-bold text-[#FDFBD4] mb-8 tracking-wide">
      My Garden Journal
    </h1>

    <div class="flex gap-3 mb-8">
      <input 
      placeholder="Plant name" 
      v-model="name" 
      class="px-4 py-2 rounded-lg border-none outline-none bg-white/80 text-gray-800 placeholder-gray-400 w-64"/>
      <input placeholder="Notes" 
      v-model="notes" 
      class="px-4 py-2 rounded-lg border-none outline-none bg-white/80 text-gray-800 placeholder-gray-400 w-64"/>
      <button 
      @click="handleAddPlant"
      class="px-6 py-2 bg-[#FDFBD4] text-gray-800 rounded-lg font-semibold hover:bg-[#E86100] hover:text-[#FDFBD4] transition-colors">
      Add Plant
      </button>
    </div>

    <div 
      v-for="plant in plants" 
      :key="plant.id"
      class="bg-white/30 rounded-xl p-5 mb-4 max-w-lg backdrop-blur-sm">
      <h2 class="text-xl font-bold text-[#FDFBD4]">{{ plant.name }}</h2>
      <p class="text-gray-600 mt-1">{{ plant.notes }}</p>
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