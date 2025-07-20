import { axiosInstance } from './index'

export const getActivitiesApi = async () => {
  const response = await axiosInstance.get('/activities')
  return response.data
}
