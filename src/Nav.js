import {
  Box,
  Flex,
  Stack
} from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import NavCollapseMenu from './NavCollapseMenu'

export default function Nav() {
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box></Box> {/*  Logo */}
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
                <ConnectButton />
                <NavCollapseMenu />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}