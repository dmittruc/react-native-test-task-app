import { axiosInstance } from 'api'

export const addFavouritesApi = async (id: number) => {
  const response = await axiosInstance.post('/favorites', { id })
  return response.data.message
}
