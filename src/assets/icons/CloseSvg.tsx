import React, { SVGProps } from 'react'
import { twMerge } from 'tailwind-merge'

function CloseSvg({ className, ...props }: SVGProps<SVGSVGElement>) {
   return (
      <svg
         className={twMerge(className)}
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="100"
         height="100"
         viewBox="0 0 48 48"
         {...props}
      >
         <path
            fill="#ffab91"
            d="M44,17L39,12c-0.8-0.8-2-0.8-2.8,0L28,20.2L19.8,12c-0.8-0.8-2-0.8-2.8,0L12,17c-0.8,0.8-0.8,2,0,2.8l8.2,8.2	L12,36.2c-0.8,0.8-0.8,2,0,2.8L17,44c0.8,0.8,2,0.8,2.8,0l8.2-8.2l8.2,8.2c0.8,0.8,2,0.8,2.8,0L44,39c0.8-0.8,0.8-2,0-2.8L35.8,28	l8.2-8.2C44.8,19,44.8,17.8,44,17z"
         ></path>
         <path
            fill="none"
            stroke="#18193f"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            d="M11.7,28.5L8,32.2c-0.8,0.8-0.8,2,0,2.8L13,40c0.8,0.8,2,0.8,2.8,0l8.2-8.2l8.2,8.2c0.8,0.8,2,0.8,2.8,0L40,35	c0.8-0.8,0.8-2,0-2.8L31.8,24l8.2-8.2c0.8-0.8,0.8-2,0-2.8l-2.6-2.6"
         ></path>
         <path
            fill="none"
            stroke="#18193f"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            d="M33.1,7.1L24,16.2L15.8,8c-0.8-0.8-2-0.8-2.8,0L8,13c-0.8,0.8-0.8,2,0,2.8l8.2,8.2"
         ></path>
      </svg>
   )
}

export default CloseSvg
