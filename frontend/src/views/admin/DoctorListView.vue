<script setup lang="ts">
import { onMounted, ref } from 'vue';
import adminArea from '@/api/adminArea';
import Doctor from '@/components/Doctor.vue';
import type { IDoctor } from '@/interfaces/Doctor';

const doctors = ref<IDoctor[]>([]);

onMounted(async () => {
    try {
        const {data} = await adminArea.getDoctors();
        doctors.value = data;
    } catch (error) {
        console.log(error);
    }
})
</script>

<template>
    <div>
        <Doctor v-for="doctor in doctors" :key="doctor._id" :doctor="doctor" />
    </div>
</template>