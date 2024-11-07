import { api } from "@/lib/axios"

export default {
    authAdmin() {
        const token = localStorage.getItem("AUTH_TOKEN");
        return api.get("/admin-area/get-admin", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}