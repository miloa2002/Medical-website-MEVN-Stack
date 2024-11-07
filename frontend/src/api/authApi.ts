import { api } from "@/lib/axios"
import type { User } from "@/interfaces/User";

export default {
    register(data: User) {
        return api.post("/user/register", data);
    }
}