import { ChakraProvider } from '@chakra-ui/react'

import { Layout } from './components/Layout/Layout';
import { Card } from './components/Card/Card';

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Card />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
