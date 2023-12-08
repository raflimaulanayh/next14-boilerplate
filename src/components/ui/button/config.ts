import { cn } from '@/lib/utils'

export type Variant = 'primary' | 'light-primary' | 'outline-black' | 'outline-primary' | 'gray' | 'default'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | ''

export const styles = (classes?: string, rounded?: Size, shadow?: Size) => {
  return cn(
    'disabled:bg-opacity-50 disabled:text-hint flex items-center justify-center',
    rounded && `rounded-${rounded}`,
    shadow && `shadow-${shadow}`,
    classes
  )
}

export const theme = (variant: Variant = 'default') => {
  let className = {
    textColor: '',
    borderColor: '',
    bgColor: ''
  }
  switch (variant) {
    case 'primary':
      className = {
        textColor: 'text-white',
        borderColor: '',
        bgColor: 'bg-primary hover:bg-light-primary'
      }
      break
    case 'light-primary':
      className = {
        textColor: 'text-white',
        borderColor: '',
        bgColor: 'bg-light-primary'
      }
      break
    case 'outline-black':
      className = {
        textColor: 'md:text-black text-white hover:text-white',
        borderColor: 'border-2 md:border-[#121212] text-white hover:border-primary',
        bgColor: 'bg-transparent hover:bg-primary'
      }
      break
    case 'outline-primary':
      className = {
        textColor: 'text-primary hover:text-white',
        borderColor: 'border border-primary hover:border-light-primary',
        bgColor: 'bg-white hover:bg-light-primary'
      }
      break
    case 'gray':
      className = {
        textColor: 'text-[#333333]',
        borderColor: '',
        bgColor: 'bg-[#E0E0E0] hover:bg-[#BDBDBD]'
      }
      break
    case 'default':
      /* eslint-disable no-self-assign */
      className = className
      break

    default:
      break
  }
  return className
}

export const sizes = (size: Size) => {
  let className = ''
  switch (size) {
    case 'xs':
      className = 'px-3 text-sm py-2px'
      break
    case 'sm':
      className = 'px-4 py-2 text-sm'
      break
    case 'md':
      className = 'px-5 py-2.5'
      break
    case 'lg':
      className = 'py-3 px-9'
      break
    default:
      /* eslint-disable no-self-assign */
      className = className
      break
  }
  return className
}