import adminArea from "@/api/adminArea";
import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

export const useAdminStore = defineStore("admin", () => {

    const userAdmin = ref({});

    onMounted(async () => {
        try {
            const { data } = await adminArea.authAdmin();
            userAdmin.value = data;       
        } catch (error) {
            console.log(error);
        }
    })

    return {
        userAdmin      
    }
})