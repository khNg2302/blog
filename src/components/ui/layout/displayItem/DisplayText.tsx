import { ElementType } from "@/types/element"


export const DisplayText = ({ children }: ElementType<HTMLHeadingElement | HTMLParagraphElement>) => {
    return <>{children}</>
}
