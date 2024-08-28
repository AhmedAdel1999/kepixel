import { useState } from "react"
import { Icon } from "@iconify/react"
import { DropdownMenu,DropdownMenuContent,DropdownMenuTrigger,DropdownMenuItem } from "../ui/dropdown-menu"

export default function ChangeLang () {

    const [lang,setLang] = useState("EN")
    const [open,setOpen] = useState(false)

    return(
        <DropdownMenu onOpenChange={()=>setOpen(!open)}>
            <DropdownMenuTrigger className="outline-none" asChild>
                <button className="flex gap-x-1">
                   <Icon icon="ant-design:global-outlined" className="translate-y-[2px]" fontSize={20} />
                   <span className="text-[16px]">{lang}</span>
                   {
                    !open?
                        <Icon icon="iconamoon:arrow-down-2" fontSize={22} />
                        :
                        <Icon icon="iconamoon:arrow-up-2" fontSize={22} />
                   }
                   
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => setLang("EN")}>
                  EN
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setLang("AR")}>
                   AR
                </DropdownMenuItem>
            </DropdownMenuContent>
    </DropdownMenu>
    )
}