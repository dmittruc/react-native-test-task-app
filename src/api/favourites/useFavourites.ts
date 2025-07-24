import { useMutation } from '@tanstack/react-query'
import { addFavouritesApi } from './favouritesApi'
import { Alert } from 'react-native'

const useFavourites = () => {
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

export default useFavourites
