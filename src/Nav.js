import {
  Box,
  Flex,
  Button,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box></Box> {/*  Logo */}
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
                <ConnectButton />
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}