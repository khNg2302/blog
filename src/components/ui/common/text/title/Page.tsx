import { ElementType } from "@/types/element"
import { Text } from "../Text"

export const PageTitle = ({children}:ElementType<HTMLHeadingElement>) => {

    return <Text>
      <h1>{children}</h1>
    </Text>
}