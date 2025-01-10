import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ElementType } from "@/types/element"
import { DisplayColumnCenterBox } from "../../layout/displayItem/DisplayColumnCenterBox"

type AppButtonI = ElementType<HTMLButtonElement> & ButtonProps


export const AppButton = ({ children, ...props }: AppButtonI) => {
    return <Button {...props}>{children}</Button>
}

export const PrimaryAppButton = ({ children, ...props }: AppButtonI) => {
    return <AppButton {...props} className="bg-sky-700" variant='default'>{children}</AppButton>
}

export const SecondaryAppButton = ({ children, ...props }: AppButtonI) => {
    return <AppButton {...props} variant='secondary'>{children}</AppButton>
}

export const GhostAppButton = ({ children, ...props }: AppButtonI) => {
    return <AppButton {...props} variant="ghost">{children}</AppButton>
}



export const PrimaryIconAppButton = ({ children, className, ...props }: AppButtonI) => {
    return <AppButton {...props} className={className}>
        {children}
    </AppButton>
}

export const GhostIconWithUnderTextAppButton = ({ children, className, ...props }: AppButtonI) => {
    return <GhostAppButton {...props} className={cn('!h-fit flex-1', className)}>
        <DisplayColumnCenterBox>
            {children}
        </DisplayColumnCenterBox>
    </GhostAppButton>
}

