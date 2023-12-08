import Link from 'next/link'
import { HTMLProps, useMemo } from 'react'

import { cn } from '@/lib/utils'

import * as config from './config'

export interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement & HTMLAnchorElement>, 'size'> {
    text?: string | JSX.Element
    url?: string
    rounded?: config.Size
    shadow?: config.Size
    external?: boolean
    className?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
    variant?: config.Variant
    size?: config.Size
    leftIcon?: JSX.Element
    rightIcon?: JSX.Element
}

export const Loading: React.FC = () => (
    <svg className="w-6 h-6 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
)

export const Button: React.FC<ButtonProps> = ({
    text,
    variant,
    url,
    size = 'lg',
    rounded = '2xl',
    shadow,
    external,
    className = '',
    type = 'button',
    disabled,
    children,
    loading,
    leftIcon,
    rightIcon,
    ...rest
}) => {
    const theme = useMemo(() => config.theme(variant), [variant])
    const styles = useMemo(
        () =>
            cn(
                ...Object.keys(theme).map((index) => theme[index as keyof typeof theme]),
                config.styles(className, rounded, shadow),
                config.sizes(size)
            ),
        [className, rounded, shadow, theme, size]
    )

    // if button had a link
    if (url && !disabled) {
        return (
            <Link href={url} target={external ? '_blank' : '_self'} className={styles} {...(rest as any)}>
                {leftIcon && <span className="mr-2">{leftIcon}</span>}
                {loading ? <Loading /> : text || children}
                {rightIcon && <span className="ml-2">{rightIcon}</span>}
            </Link>
        )
    }
    // if not, then render plain button
    return (
        <button type={type} className={styles} {...rest}>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {loading ? <Loading /> : text || children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </button>
    )
}

export default Button



