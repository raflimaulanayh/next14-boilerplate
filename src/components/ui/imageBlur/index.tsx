'use client'

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ImageProps {
    src: string
    className?: string
    ref?: any
    quality?: number
    priority?: boolean
    alt?: string
}

export default function ImageBlur({ src, className, ref, alt = "", quality = 80, priority = true, ...rest }: ImageProps) {
    const [isLoading, setLoading] = useState(true);

    return (
        <Image
            onLoadingComplete={() => setLoading(false)}
            alt={alt}
            ref={ref}
            src={src}
            fill
            quality={quality}
            priority={priority}
            className={cn(className, isLoading ? 'blur-md' : 'blur-0', 'duration-300 transition-all ease-in-out group-hover:opacity-75')}
            {...rest}
        />
    )
}
