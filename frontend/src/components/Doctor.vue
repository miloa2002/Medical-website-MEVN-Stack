<script setup lang="ts">
import type { IDoctor } from '@/interfaces/Doctor';

defineProps<{ doctor: IDoctor }>();
</script>

<template>
  <div class="w-64 bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-100">
    <div class="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mb-4">
      <img :src="doctor.image" alt="Doctor's profile image" class="w-full h-full object-cover" />
    </div>

    <h2 class="text-lg font-semibold text-gray-800">{{ doctor.fullname }}</h2>
    <p class="text-sm text-gray-500">{{ doctor.speciality }}</p>
  </div>
</template>
