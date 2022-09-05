import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';

export default function Nav() {
const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Menu'
          icon={<HamburgerIcon />}
          variant='outline'
        />
        <MenuList minW='0' w={'10em'}>
          <MenuItem
            // Note: Use `command` prop instead of `icon` prop to display icon on right side.
            command={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          >
            { colorMode === 'light' ? 'Dark' : 'Light' } Mode
          </MenuItem>
        </MenuList>
      </Menu>
    </>
);
}