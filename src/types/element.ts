
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type ElementType<T> = DetailedHTMLProps<HTMLAttributes<T>, T>

export type ElementPassPropsType<P, T> = Omit<DetailedHTMLProps<HTMLAttributes<T>, T>,'children'>  & {
    children: (props: P) => ReactNode
}

export type ItemType = {
    id:string
} 