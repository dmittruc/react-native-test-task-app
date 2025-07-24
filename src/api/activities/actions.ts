import { axiosInstance } from 'api'
import { IActivity } from 'interfaces'

export const getActivitiesApi = async (): Promise<IActivity[]> => {
  const { data } = await axiosInstance.get('/activities')

  return data
}

export const addFavouritesApi = async (id: number): Promise<string> => {
  const { data } = await axiosInstance.post<{ message: string }>('/favorites', {
    id,
  })

  return data.message
}
