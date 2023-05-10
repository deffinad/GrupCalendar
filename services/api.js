import axios from "axios"

const BASE_URL = "http://192.168.1.112:1880/"

export const getAllActivity = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}activities/${id}`)
        return response.data
    } catch (error) {
        return error
    }
}

export const addActivity = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}activities`, data);
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
        const response = await axios.post(`${BASE_URL}login`, data)
        return response.data
    } catch (error) {
        return error
    }
}

export const getActivityByLabel = async (label, id) => {
    try {
        const response = await axios.get(`${BASE_URL}activities/${label}/${id}`)
        return response.data
    } catch (error) {
        return error
    }
}
export const getNotifications = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}notifications/${id}`)
        return response.data
    } catch (error) {
        return error
    }
}

export const getEmployeeForAsign = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}employee/asign/${id}`)
        return response.data
    } catch (error) {
        return error
    }
}