
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type ElementType<T> = DetailedHTMLProps<HTMLAttributes<T>, T>

export type ElementPassPropsType<P, T> = Omit<DetailedHTMLProps<HTMLAttributes<T>, T>, 'children'> & {
    children: ChildrenPassPropsType<P>
}

export type ItemType = {
    id: string
    prefixItem?: string
    currentParentId?: string
    parentId?: string
}

export type ChildrenPassPropsType<P> = (props: P) => ReactNode