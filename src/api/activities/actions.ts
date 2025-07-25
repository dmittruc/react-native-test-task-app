import { axiosInstance } from 'api'
import { IActivity } from 'interfaces'

export const getActivitiesApi = async () => {
  const { data } = await axiosInstance.get<IActivity[]>('/activities')

  return data
}

export const addFavouritesApi = async (id: number) => {
  const { data } = await axiosInstance.post<{ message: string }>('/favorites', {
    id,
  })

  return data.message
}
