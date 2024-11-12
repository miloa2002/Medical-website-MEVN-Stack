export interface IDoctor {
    _id: string
    fullname: string
    email: string
    password: string
    experience: number
    fees: number
    about: string
    speciality: string
    degree: string
    address?: string | null
    phone: string
    image: string
}
