import axios from "axios"

const BASE_URL = "http://192.168.1.112:1880/"

export const getAllActivity = async () => {
    try {
        const response = await axios.get(`${BASE_URL}activities`)
        return response.data
    } catch (error) {
        return error
    }
}

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

export const getAcivityById = async (activity_id) => {
    try {
        const response = await axios.get(`${BASE_URL}activity/${activity_id}`)
        return response.data
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

export const getActivityByLabel = async (label) => {
    try {
        const response = await axios.get(`${BASE_URL}activities/${label}`)
        return response.data
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