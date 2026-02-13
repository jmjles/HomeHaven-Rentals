import { IconButtonPropsSizeOverrides } from "@mui/material"

export default function Icons(props:IconsProps){
    
}

type IconNameType = "building" | "bathroom" | "bedroom" | "size" | "pets"

type IconsProps = {
    icon:IconNameType
    size?:IconButtonPropsSizeOverrides
}