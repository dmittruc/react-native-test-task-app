import { View, Pressable } from 'react-native'
import tw from 'twrnc'
import { IActivity } from 'interfaces'
import useNavigateHook from 'hooks/useNavigateHook'
import ImageCard from '@components/ImageCard'
import ActivityInfo from '@components/ActivityInfo'
import ActivityRating from '@components/ActivityRating'

interface ActivityCardItemsProps {
  activity: IActivity
}

const ActivityListItem = ({ activity }: ActivityCardItemsProps) => {
  const { photoUrl, name, location, rating, price } = activity
  const { handleNavigateDetails } = useNavigateHook({ activity })

  return (
    <Pressable
      onPress={() => handleNavigateDetails()}
      style={tw`mb-4 w-90% self-center`}
    >
      <ImageCard photoUrl={photoUrl} />
      <View
        style={tw`bg-gray-50 p-4 rounded-20px h-85px flex-row justify-between items-center`}
      >
        <ActivityInfo name={name} location={location} />
        <ActivityRating rating={rating} price={price} />
      </View>
    </Pressable>
  )
}

export default ActivityListItem
