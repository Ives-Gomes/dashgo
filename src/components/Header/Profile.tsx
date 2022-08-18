import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Ives Moreira</Text>
        <Text color="gray.300" fontSize="small">
          ivesmoreira3@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Ives Moreira" src="https://github.com/ives-gomes.png" />
    </Flex>
  )
}
