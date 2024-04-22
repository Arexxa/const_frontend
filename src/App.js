import React from 'react'
import './App.css'
import AppRoutes from './utils/routerConfig.js'
import AppContextProviders from './pages/Contexts/AppContexts.js'

function App() {
    return (
        <div className="App">
            <AppContextProviders>
                <AppRoutes />
            </AppContextProviders>
        </div>
    )
}

export default App
