import React from 'react'
import './App.css'
import AppRoutes from './utils/routerConfig.js'
import AppContextProviders from './pages/Contexts/AppContexts.js'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
    return (
        <div className="App">
            <ChakraProvider>
                <AppContextProviders>
                    <AppRoutes />
                </AppContextProviders>
            </ChakraProvider>
        </div>
    )
}

export default App
