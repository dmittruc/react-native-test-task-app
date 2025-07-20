import { axiosInstance } from './index'

export const addFavoriteApi = async (id: number) => {
  const response = await axiosInstance.post('/favorites', { id })
  return response.data.message
}
