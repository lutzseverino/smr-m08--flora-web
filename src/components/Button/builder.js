import clb from 'clb'

const buttonBuilder = clb({
  base: 'font-exo rounded-full pl-6 pr-6 shadow-inner-component dark:shadow-inner-dark-component',
  defaultVariants: {
    type: 'default',
    disabled: false,
  },
  variants: {
    type: {
        accent: 'p-2 text-white bg-blue dark:bg-green dark:text-black',
        dropdown: 'p-1 text-black bg-gray-200 dark:bg-gray-700 dark:text-gray-300',
        default: 'p-2 text-black bg-gray-200 dark:bg-gray-700 dark:text-gray-300',
    },
    disabled: {
        true: 'cursor-not-allowed opacity-70',
        false: 'transition-transform hover:scale-105 active:scale-95',
    },
  },
  compoundVariants: [
    // { type: 'default', disabled: true, classes: '' },
    // { type: 'accent', disabled: true, classes: '' },
    // { type: 'default', disabled: false, classes: '' },
    // { type: 'accent', disabled: false, classes: '' },
  ],
})

export default buttonBuilder;