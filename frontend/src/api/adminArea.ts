import type { IDoctor } from "@/interfaces/Doctor";
import { api } from "@/lib/axios"

export default {
    authAdmin() {
        const token = localStorage.getItem("AUTH_TOKEN");
        return api.get("/admin-area/get-admin", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    getDoctors() {
        const token = localStorage.getItem("AUTH_TOKEN");
        return api.get("/admin-area/get-doctors", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    addDoctor(data:IDoctor) {
        const token = localStorage.getItem("AUTH_TOKEN");
        return api.post("/admin-area/add-doctor", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}