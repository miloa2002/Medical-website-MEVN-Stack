import adminArea from "@/api/adminArea";
import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export const useAdminStore = defineStore("admin", () => {

    const userAdmin = ref({});
    const router = useRouter();

    onMounted(async () => {
        try {
            const { data } = await adminArea.authAdmin();
            userAdmin.value = data;       
        } catch (error) {
            console.log(error);
        }
    })

    const logout = () => {
        localStorage.removeItem("AUTH_TOKEN");
        userAdmin.value = {}
        router.push({name: 'home'})
    }

    return {
        userAdmin,
        logout   
    }
})