import { Route, Routes } from 'react-router'
import './App.css'
import PageContainer from './layouts/PageContainer'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import TypeScripts from './pages/TypeScriptsLearning'
import MainLeetCodePage from './pages/leetCodeParatice/MainLeetCodePage'
import MenuFood from './pages/menu/MenuFood'
import CreateOrder from './pages/order/CreateOrder'
import Order from './pages/order/Order'
import StudyingPage from './pages/prevent_re-renders-by-props/StudyingPage'
import AuthRoute from './router/AuthRoute'
import UnAuthRoute from './router/UnAuthRoute'

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<PageContainer />}>
               <Route element={<UnAuthRoute />}>
                  <Route index element={<Login />} />
                  <Route path="login" element={<Login />} />
               </Route>

               <Route element={<AuthRoute />}>
                  <Route path="menu" element={<MenuFood />} />
                  <Route path="order" element={<CreateOrder />} />
                  <Route path="order/:orderId" element={<Order />} />
               </Route>
               <Route path="ts" element={<TypeScripts />} />

               <Route path="studying" element={<StudyingPage />} />
               <Route path="order/createOrder" element={<CreateOrder />} />
               <Route path="leetcode" element={<MainLeetCodePage />} />

               <Route path="*" element={<ErrorPage />} />
            </Route>
         </Routes>
      </>
   )
}

export default App
