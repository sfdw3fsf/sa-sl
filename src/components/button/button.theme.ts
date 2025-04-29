export const spacing = {
   xl: 'py-3 px-5 rounded gap-2',
   lg: 'px-4 py-2 rounded gap-2',
   md: 'px-4 py-2 rounded gap-2',
   xs: 'px-2 py-0.5 rounded gap-1.5',
}

export const fontSize = {
   xl: 'text-lg font-semibold',
   lg: 'text-lg font-semibold',
   md: 'text-xs font-semibold',
   xs: 'text-xs font-bold',
}

export const buttonTheme = {
   base: {
      buttonCont:
         'flex justify-center items-center group transition-all duration-300 ease-in-out',
      fontSize: fontSize,
      spacing: spacing,
   },

   variants: {
      primary: {
         color: 'text-white',
         base: 'bg-azure-500 enabled:hover:bg-azure-600 enabled:active:bg-azure-800 disabled:bg-gray-400',
         border: '',
      },

      border_box: {
         color: 'text-gray-500 group-hover:text-azure-700 disabled:text-gray-400',
         base: 'bg-transparent  enabled:active:bg-azure-800 disabled:bg-gray-400',
         spacing: spacing,
         border:
            'border enabled:border-gray-400 enabled:hover:border-azure-500  ',
      },
   },
}
