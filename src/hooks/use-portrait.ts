'use client'
import { useEffect, useState } from "react"

export const usePortrait = () => {
    const [isPortrait, setIsPortrait] = useState<boolean | undefined>(undefined)


    useEffect(() => {
        const portrait = window.matchMedia("(orientation: portrait)")
        const checkIsPortrait = (match: MediaQueryList | MediaQueryListEvent) => {
            return match.matches
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
    }, [])

    return {
        isPortrait
    }
}