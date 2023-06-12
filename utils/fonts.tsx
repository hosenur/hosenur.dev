import localFont from "next/font/local"
import {Silkscreen} from "next/font/google"
export const kollektif = localFont({src:"../fonts/Kollektif.ttf"})
export const bold = localFont({src:"../fonts/Kollektif-Bold.ttf"})
export const dankMono = localFont({src:"../fonts/DankMono.woff2",variable: '--font-dank-mono'})
export const silkscreen = Silkscreen({weight:["700"],subsets:["latin"]})