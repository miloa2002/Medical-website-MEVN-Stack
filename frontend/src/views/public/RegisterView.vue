<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
     <div class="flex justify-center items-center mt-24">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 text-center mb-2">Crear una cuenta</h2>
        <p class="text-gray-500 text-center mb-6">Por favor regístrese para reservar cita</p>
        
        <form @submit.prevent="">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm mb-2" for="full-name">Nombre completo</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="full-name" placeholder="Nombre completo">
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm mb-2" for="email">Email</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" placeholder="Email">
            </div>

            <div class="mb-6">
                <label class="block text-gray-700 text-sm mb-2" for="password">Contraseña</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" id="password" placeholder="Contraseña">
            </div>

            <button class="w-full bg-customPurple text-white py-2 rounded-lg hover:bg-customBlueDark transition duration-200">Crear una cuenta</button>
        </form>
        
        <p class="text-center text-gray-500 mt-6">¿Ya tienes una cuenta? <RouterLink :to="{name: 'login'}" class="text-customPurple hover:underline">Inicia sesión aquí</RouterLink></p>
    </div>
     </div>
</template>