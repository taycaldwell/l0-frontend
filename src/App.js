import { useColorMode } from '@chakra-ui/react'
import Nav from './Nav'

const App = () => {

  const { toggleColorMode } = useColorMode();

  return (

    <>
      <Nav />
    </>
  );
};

export default App;
