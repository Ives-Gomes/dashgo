import { Flex, useBreakpointValue } from '@chakra-ui/react'

import Profile from '@components/Header/Profile'
import NotificationsNav from '@components/Header/NotificationsNav'
import SearchBox from '@components/Header/SearchBox'
import Logo from '@components/Header/Logo'

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
