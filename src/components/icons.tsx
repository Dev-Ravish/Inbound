import { HTMLAttributes } from "react"

type IconProp=HTMLAttributes<SVGAElement>
export const Icons={
    earth: (prop:IconProp)=>{
        return (<div>Earth Icons</div>)
    }
}