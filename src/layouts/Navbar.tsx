import { useState } from 'react'
import ListSvg from '../assets/icons/ListSvg'

import { twMerge } from 'tailwind-merge'
import CloseNavIcon from '../assets/icons/CloseNavIcon'
import RightArrowIcon from '../assets/icons/RightArrowIcon'
import SearchOrder from '../pages/order/SearchOrder'

const navBarOptions = ['NFT', 'Crypto', 'Blockchain', 'Web3', 'Metaverse']

const NavbarData = [
   {
      name: 'LeetCode',
      items: [
         {
            name: 'cherrik',
            subitems: ['sticky note', 'index', 'viewpoint', 'hello sir'],
         },
         {
            name: 'matrixx',
            subitems: [
               'binary search',
               'dynamic grid',
               'prefix sum',
               'sliding range',
            ],
         },
         {
            name: 'ghostify',
            subitems: [
               'linked list',
               'hash map',
               'recursion base',
               'pointer shift',
            ],
         },
         {
            name: 'astrox',
            subitems: [
               'bit manipulation',
               'stack queue',
               'interval merge',
               'reverse in k',
            ],
         },
      ],
   },
   {
      name: 'Frontend',
      items: [
         {
            name: 'reactverse',
            subitems: [
               'useEffect',
               'props drilling',
               'memoization',
               'lazy loading',
            ],
         },
         {
            name: 'tailmind',
            subitems: [
               'flexbox tricks',
               'custom themes',
               'responsive grid',
               'animation delay',
            ],
         },
         {
            name: 'formzy',
            subitems: [
               'React Hook Form',
               'Yup validation',
               'controlled input',
               'autofocus',
            ],
         },
         {
            name: 'viteblast',
            subitems: [
               'Vite setup',
               'alias config',
               'env file',
               'plugin usage',
            ],
         },
      ],
   },
   {
      name: 'Backend',
      items: [
         {
            name: 'expressy',
            subitems: [
               'middlewares',
               'routing',
               'error handler',
               'body parser',
            ],
         },
         {
            name: 'nodestream',
            subitems: [
               'file uploads',
               'buffering',
               'stream piping',
               'end signal',
            ],
         },
         {
            name: 'mongozap',
            subitems: [
               'mongoose schema',
               'populate',
               'aggregation',
               'indexing',
            ],
         },
         {
            name: 'authcore',
            subitems: ['JWT', 'OAuth2', 'refresh token', 'role-based access'],
         },
      ],
   },
   {
      name: 'DevOps',
      items: [
         {
            name: 'docklet',
            subitems: [
               'Dockerfile',
               'volume',
               'port mapping',
               'multi-stage build',
            ],
         },
         {
            name: 'pipeloop',
            subitems: [
               'CI/CD',
               'GitHub Actions',
               'auto deploy',
               'test coverage',
            ],
         },
         {
            name: 'cloudflareX',
            subitems: [
               'DNS setup',
               'SSL certs',
               'firewall rules',
               'page rules',
            ],
         },
         {
            name: 'vercelite',
            subitems: [
               'project deploy',
               'preview URL',
               'build settings',
               'env vars',
            ],
         },
      ],
   },
]

const NavDivider = () => {
   return (
      <div className="mx-6 px-2.5 py-1.5">
         <div className="bg-border-soft h-[28px] w-[1px]"></div>
      </div>
   )
}
function Navbar() {
   const [open, setIsOpen] = useState<boolean>(false)

   const onToggle = (): void => setIsOpen((open: boolean) => !open)

   return (
      <nav className="relative flex min-h-[140px] w-full flex-col justify-center bg-amber-50 px-4 py-[14px] md:px-30 md:py-5">
         {/* Upper */}
         <div className="flex max-h-[44px] w-full items-center justify-between">
            <img
               src="/images/logo.svg"
               className="h-[48px] overflow-hidden object-none"
            />

            {/* <FormField type={FormType.FORM_INPUT} /> */}

            <SearchOrder />

            <div className="">
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
            <button className="bg-bg-slate-50 rounded p-2" onClick={onToggle}>
               {open ? <CloseNavIcon /> : <ListSvg />}
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

         {/* Sub Nav Toggle */}

         <div
            className={twMerge(
               'absolute top-[140px] left-0 z-99 flex w-full justify-between overflow-hidden bg-amber-50 px-4 pt-6 transition-all duration-300 md:px-30',
               open ? 'h-[394px] overflow-visible' : 'h-[0px]'
            )}
         >
            {NavbarData.map((item, index) => (
               <div className="min-w-[200px]" key={index}>
                  <h1 className="text-primary-500 mb-3 text-lg font-semibold">
                     {item.name}
                  </h1>
                  <ul>
                     {item.items.map((item, index) => (
                        <li
                           className="text-md group text-text-1 relative p-3 font-normal"
                           key={index}
                        >
                           <div className="flex items-center justify-between">
                              <p className="group-hover:text-primary-500 transition-all duration-300 ease-in-out group-hover:font-semibold">
                                 {item.name}
                              </p>
                              <span className="shrink-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                 <RightArrowIcon />
                              </span>
                           </div>
                           <div className="invisible absolute top-0 left-full z-100 w-full min-w-[240px] rounded-lg bg-white p-4 opacity-0 shadow-lg transition-all duration-300 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                              <div>
                                 <h1 className="text-primary-500 mb-3 text-lg font-semibold">
                                    {item.name}
                                 </h1>
                                 <ul>
                                    {item.subitems.map((item, index) => (
                                       <li
                                          key={index}
                                          className="text-md text-text-1 hover:text-primary-500 relative p-3 font-normal transition-all duration-300 ease-in-out"
                                       >
                                          {item}
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </nav>
   )
}

export default Navbar
