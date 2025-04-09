import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import TypeScripts from './pages/TypeScriptsLearning'
import MenuFood from './pages/MenuFood'
import PageContainer from './layouts/PageContainer'
import ErrorPage from './pages/ErrorPage'
import Order from './pages/order/Order'
import OrderItem from './pages/order/OrderItem'
import CreateOrder from './pages/order/CreateOrder'

function App() {
    const [color, setC] = useState()
    const [t, setT] = useState(false)
    const [string, setTring] = useState('hi')

    return (
        <>
            <Routes>
                <Route path="/" element={<PageContainer />}>
                    <Route index element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="ts" element={<TypeScripts />} />
                    <Route path="menu" element={<MenuFood />} />
                    <Route path="order" element={<CreateOrder />} />
                    <Route path="order/:orderId" element={<Order />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
