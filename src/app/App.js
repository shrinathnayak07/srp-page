import { ChakraProvider } from "@chakra-ui/react"

import SRP from '../views/SRP';

const App = () => {
  return (
    <ChakraProvider>
      <SRP />
    </ChakraProvider>
  );
}

export default App;
