import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import tw from 'twrnc'
import { IActivity } from 'interfaces'
import ImageCard from '@components/ImageCard'
import ActivityInfo from '@components/ActivityInfo'
import ActivityRating from '@components/ActivityRating'

interface ActivityListItemsProps extends TouchableOpacityProps {
  activity: IActivity
}

const ActivityListItem = ({ activity, ...props }: ActivityListItemsProps) => {
  const { photoUrl, name, location, rating, price } = activity

  return (
    <TouchableOpacity {...props} style={tw`mb-4 w-90% self-center`}>
      <ImageCard photoUrl={photoUrl} />
      <View
        style={tw`bg-gray-50 p-4 rounded-20px h-85px flex-row justify-between items-center`}
      >
        <ActivityInfo name={name} location={location} />
        <ActivityRating rating={rating} price={price} />
      </View>
    </TouchableOpacity>
  )
}

export default ActivityListItem
