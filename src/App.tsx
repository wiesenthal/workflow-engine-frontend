import React from 'react';
import './styles/App.css';
import { socket, SocketContext } from './context/socket';
import { Box, ChakraProvider } from '@chakra-ui/react'
import AppContent from './components/AppContent';
import theme from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <SocketContext.Provider value={socket}>

        <Box className="App"
          alignItems="center"
          width="100vw"
          height="100vh"
          flexDirection="column">

          <AppContent />

        </Box>

      </SocketContext.Provider>
    </ChakraProvider>
  );
}

export default App;
