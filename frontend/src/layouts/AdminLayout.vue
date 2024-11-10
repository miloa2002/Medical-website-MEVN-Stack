<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useAdminStore } from '@/stores/admin';

const route = useRoute();
const admin = useAdminStore();

const icons = {
    dashboard: '🏠',
    appointments: '📅',
    addDoctor: '➕',
    doctorList: '👥',
    logout: '↩️'
};
</script>

<template>
    <div class="flex">
        <nav class="w-72 h-screen bg-white shadow-md p-4">
            <ul class="space-y-4">
                <li>
                    <RouterLink :to="{ name: 'dashboard' }"
                        class="flex items-center p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-500 rounded-lg transition duration-200"
                        :class="route.name === 'dashboard' ? 'bg-blue-100 border-r-4 border-blue-500 text-blue-500' : ''">
                        <span class="text-xl mr-3">{{ icons.dashboard }}</span>
                        <span>Dashboard</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'all-appointments' }"
                        class="flex items-center p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-500 rounded-lg transition duration-200"
                        :class="route.name === 'all-appointments' ? 'bg-blue-100 border-r-4 border-blue-500 text-blue-500' : ''">
                        <span class="text-xl mr-3">{{ icons.appointments }}</span>
                        <span>Citas</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'add-doctor' }"
                        class="flex items-center p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-500 rounded-lg transition duration-200"
                        :class="route.name === 'add-doctor' ? 'bg-blue-100 border-r-4 border-blue-500 text-blue-500' : ''">
                        <span class="text-xl mr-3">{{ icons.addDoctor }}</span>
                        <span>Añadir doctor</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'doctor-list' }"
                        class="flex items-center p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-500 rounded-lg transition duration-200"
                        :class="route.name === 'doctor-list' ? 'bg-blue-100 border-r-4 border-blue-500 text-blue-500' : ''">
                        <span class="text-xl mr-3">{{ icons.doctorList }}</span>
                        <span>Lista de doctores</span>
                    </RouterLink>
                </li>
                <li>
                    <button
                        @click="admin.logout"
                        class="flex items-center p-3 w-full text-gray-700 hover:bg-blue-50 hover:text-blue-500 rounded-lg transition duration-200">
                        <span class="text-xl mr-3">{{ icons.logout }}</span>
                        <span>Salir</span>
                    </button>
                </li>
            </ul>
        </nav>

        <div class="flex-1 p-6">
            <RouterView />
        </div>
    </div>
</template>
