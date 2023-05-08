import axios from "axios";

const baseUrl = "http://192.168.1.175:1880";

export const addActivity = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}/post`, data);
        if (response.status === 200) {
            return "data berhasil ditambahkan"
        } else {
            return "data gagal ditambahkan";
        }
    } catch (error) {
        return error
    }
}

export const login = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}/login_user`, data)
        return response
    } catch (error) {
        return error
    }
}

export const profile = async () => {
    try {
        const response = await axios.get(`${baseUrl}/notification`)
        return response
    } catch (error) {
        return error
    }
}