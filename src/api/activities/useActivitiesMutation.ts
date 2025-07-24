import { useMutation } from '@tanstack/react-query'
import { addFavouritesApi } from 'api/activities/actions'
import { Alert } from 'react-native'

export const handleSuccess = (message: string) => {
  Alert.alert(message)
}

export const handleError = (message: string) => {
  Alert.alert(message)
}

const useActivitiesMutation = () => {
  const addActivity = useMutation({
    mutationFn: (id: number) => addFavouritesApi(id),

    onSuccess: message => {
      handleSuccess(message)
    },

    onError: () => {
      handleError('Probably wrong ID, or bad network connection')
    },
  })

  return { mutate: addActivity.mutate }
}

export default useActivitiesMutation
