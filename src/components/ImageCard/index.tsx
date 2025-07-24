import { Image, View } from 'react-native'
import tw from 'twrnc'

interface ImageCardProps {
  photoUrl: string
}

const ImageCard = ({ photoUrl }: ImageCardProps) => {
  return (
    <View>
      <Image
        source={{ uri: photoUrl }}
        style={tw`w-full h-139px rounded-20px`}
      />
    </View>
  )
}

export default ImageCard
