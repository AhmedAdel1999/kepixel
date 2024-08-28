import { useState } from "react"
import { Icon } from "@iconify/react"
import { DropdownMenu,DropdownMenuContent,DropdownMenuTrigger,DropdownMenuItem } from "../ui/dropdown-menu"

export default function ChangeMode () {

    const [mode,setMode] = useState("ligth")
    const [open,setOpen] = useState(false)

    return(
        <DropdownMenu onOpenChange={()=>setOpen(!open)}>
            <DropdownMenuTrigger className="outline-none" asChild>
                <button className="flex gap-x-1">
                   <Icon icon="solar:sun-linear" fontSize={22} />
                   {
                    !open?
                        <Icon icon="iconamoon:arrow-down-2" fontSize={22} />
                        :
                        <Icon icon="iconamoon:arrow-up-2" fontSize={22} />
                   }
                   
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => setMode("ligth")}>
                   Ligth
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setMode("dark")}>
                   Dark
                </DropdownMenuItem>
            </DropdownMenuContent>
    </DropdownMenu>
    )
}