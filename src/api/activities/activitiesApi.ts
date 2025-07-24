import { axiosInstance } from 'api'

export const getActivitiesApi = async () => {
  const response = await axiosInstance.get('/activities')
  return response.data
}
