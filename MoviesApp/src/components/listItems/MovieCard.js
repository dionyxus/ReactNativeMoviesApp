import { Box, Button, Center, Divider, Heading, Image, Text, VStack } from 'native-base'

const MovieCard = props => {
  const { image, label, source, uri, navigation } = props
  return (
    <Box borderWidth={1}>
      <VStack space={4} divider={<Divider />}>
        <Center>
          <Heading size='xs'>{label}</Heading>
        </Center>
      </VStack>
    </Box>
  )
}

export default MovieCard
