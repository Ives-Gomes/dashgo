import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Ives Moreira</Text>
          <Text color="gray.300" fontSize="small">
            ivesmoreira3@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Ives Moreira" src="https://github.com/ives-gomes.png" />
    </Flex>
  )
}
