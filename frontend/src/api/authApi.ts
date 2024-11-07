import { api } from "@/lib/axios"
import type { User, UserLogin } from "@/interfaces/User";

export default {
    register(data: User) {
        return api.post("/user/register", data);
    },
    loginAdmin(data : UserLogin) {
        return api.post("/user/login-admin", data);
    }
}