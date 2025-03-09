import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import TypeScripts from './pages/TypeScriptsLearning'
import MenuFood from './pages/MenuFood'

function Hi(num: any, string) {
    const h = num + string
}

function App() {
    const [color, setC] = useState()
    const [t, setT] = useState(false)
    const [string, setTring] = useState('hi')

    return (
        <>
            <Routes>
                <Route index element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route path="ts" element={<TypeScripts />} />
                <Route path="menu" element={<MenuFood />} />
            </Routes>
        </>
    )
}

export default App
