'use client'
import { useScreenStore } from "@/providers/screen"
import { useEffect, useState } from "react"

export const usePortrait = () => {
    const [isPortrait, setIsPortrait] = useState<boolean | undefined>(undefined)

    const isMobile = useScreenStore(state=>state.isMobile)
 
    useEffect(() => {
        const portrait = window.matchMedia("(orientation: portrait)")
        const checkIsPortrait = (match: MediaQueryList | MediaQueryListEvent) => {
            return isMobile ? match.matches : true
        }

        const handleIsPortrait = () => {
            setIsPortrait(true)
        }

        const handleIsNotPortrait = () => {

            setIsPortrait(false)

        }

        const handlePortraitSetUp = (match: MediaQueryList | MediaQueryListEvent) => {
            if (checkIsPortrait(match)) {
               
                handleIsPortrait()
            } else {
                handleIsNotPortrait()
            }

        }

        handlePortraitSetUp(portrait)

        portrait.addEventListener("change", e => {
            handlePortraitSetUp(e)
        });

        return () => {
            portrait.removeEventListener('change', handlePortraitSetUp)
        }
    }, [isMobile])

    return {
        isPortrait
    }
}