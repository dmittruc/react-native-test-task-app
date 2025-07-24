import { useMutation } from '@tanstack/react-query'
import { addFavouritesApi } from 'api/activities/actions'
import { Alert } from 'react-native'

const useActivitiesMutation = () => {
  const { mutate } = useMutation({
    mutationFn: (id: number) => addFavouritesApi(id),
    onSuccess: message => {
      Alert.alert(message)
    },
    onError: () => {
      Alert.alert('Error', 'Probably wrong ID, or bad network connection')
    },
  })

  return { mutate }
}

export default useActivitiesMutation
