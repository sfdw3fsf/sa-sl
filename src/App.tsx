import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function Hi(num: any, string) {
    const h = num + string
}

function App() {
    const [color, setC] = useState()
    const [t, setT] = useState(false)
    const [string, setTring] = useState('hi')

    return (
        <>
            <div className="text-primary-600 flex h-10 w-[500px] items-center justify-center bg-[#353]">
                <h1 className="text-xl">Hi</h1>
            </div>
            <p>Switzland Service greet you !</p>
            <p className="hi there">""</p>
        </>
    )
}

export default App
