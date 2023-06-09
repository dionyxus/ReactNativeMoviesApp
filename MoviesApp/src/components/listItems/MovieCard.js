import { Box, Button, Center, Divider, Heading, Image, Text, VStack, View } from 'native-base'
import { StyleSheet } from 'react-native';

const MovieCard = props => {
  const { id, image, label, popularity, releasedate, navigation } = props
  return (
    <View>
      <View style={styles.card}>
        <Image alt={label} source={{ uri: image }} size='md' />
        <View style={styles.details}>
          <Heading size='xs'>{label}</Heading>
          <Text>Popularity: {popularity}</Text>
          <Text>Release Date: {releasedate}</Text>
          <Button
            onPress={() => {
              navigation.navigate('Details', {
                id: id
              })
            }}
          >
            More Details
          </Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10
  },
  details: {
    paddingLeft: 10
  }
})

export default MovieCard

