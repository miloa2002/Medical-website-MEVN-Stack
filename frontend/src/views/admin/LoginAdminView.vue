<script setup lang="ts">
import authApi from '@/api/authApi';
import type { ApiError } from '@/interfaces/Error';
import type { UserLogin } from '@/interfaces/User';
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();

const data = reactive<UserLogin>({
    email: "",
    password: ""
})

const adminLogin = async () => {
    try {
        const response = await authApi.loginAdmin(data);
        localStorage.setItem("AUTH_TOKEN", response.data.token);
        Object.assign(data, {
            email: "",
            password: ""
        });
    } catch (error) {
        const err = error as ApiError;
        $toast.error(err.response.data.msg);
    }
}

</script>

<template>
     <div class="flex justify-center items-center mt-24">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 text-center mb-2">Acceso</h2>
        <p class="text-gray-500 text-center mb-6">Por favor inicia sesión para ingresar a la administración</p>
        
        <form @submit.prevent="adminLogin">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm mb-2" for="email">Email</label>
                <input v-model="data.email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" placeholder="Email">
            </div>

            <div class="mb-6">
                <label class="block text-gray-700 text-sm mb-2" for="password">Contraseña</label>
                <input v-model="data.password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" id="password" placeholder="Contraseña">
            </div>

            <button class="w-full bg-customPurple text-white py-2 rounded-lg hover:bg-customBlueDark transition duration-200">Inicia sesión</button>
        </form>
        
        <RouterLink :to="{name: 'home'}" class="text-customPurple hover:underline mt-8 block text-center">Volver al inicio</RouterLink>
    </div>
     </div>
</template>