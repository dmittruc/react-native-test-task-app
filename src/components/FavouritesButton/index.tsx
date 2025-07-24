import { TouchableOpacity, Text, View } from 'react-native'
import tw from 'twrnc'

interface FavouritesButtonProps {
  onPress: () => void
}

const FavouritesButton = ({ onPress }: FavouritesButtonProps) => {
  return (
    <TouchableOpacity
      style={tw`absolute bottom-1 left-0 right-0`}
      onPress={onPress}
    >
      <View style={tw`bg-black rounded-full mx-6 p-5`}>
        <Text style={tw`text-white text-center text-lg`}>Add to Favorites</Text>
      </View>
    </TouchableOpacity>
  )
}

export default FavouritesButton
