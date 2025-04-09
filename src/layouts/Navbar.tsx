import React from 'react'
import FormInput from '../components/formfield/FormInput'
import ListSVG from '/icon/list.svg'
import ListSvg from '../assets/icons/ListSvg'

import SearchOrder from '../pages/order/SearchOrder'
import { useForm } from 'react-hook-form'

const navBarOptions = ['NFT', 'Crypto', 'Blockchain', 'Web3', 'Metaverse']

const NavDivider = () => {
    return (
        <div className="mx-6 px-2.5 py-1.5">
            <div className="bg-border-soft h-[28px] w-[1px]"></div>
        </div>
    )
}
function Navbar() {
    return (
        <nav className="flex min-h-[140px] w-full flex-col justify-center bg-amber-50 px-4 py-[14px] md:px-30 md:py-5">
            {/* Upper */}
            <div className="flex max-h-[44px] w-full items-center justify-between">
                <img
                    src="/images/logo.svg"
                    className="h-[48px] overflow-hidden object-none"
                />

                {/* <FormField type={FormType.FORM_INPUT} /> */}

                <SearchOrder />

                <div className="flex flex-col">
                    <p className="text-text-1 text-sm font-normal">Log out</p>
                    <span>
                        <span className="text-text-1 text-sm font-normal">
                            {`  Welcome back, `}
                        </span>
                        <span className="text-text-2 text-base font-semibold">
                            Van Huy
                        </span>
                    </span>
                </div>
            </div>

            {/* Below */}

            <div className="mt-5 flex items-center">
                <button className="bg-bg-slate-50 rounded p-2">
                    <ListSvg />
                </button>

                <ul className="text-primary-500 ml-6 flex items-center text-lg">
                    {navBarOptions.map((item: string, index: number) => (
                        <div className="flex items-center" key={index}>
                            <li key={item}>{item}</li>
                            {index === navBarOptions.length - 1 ? null : (
                                <NavDivider />
                            )}
                        </div>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
