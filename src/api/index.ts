import { BASE_URL } from '@env'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
})
