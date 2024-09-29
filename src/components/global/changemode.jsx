import { useState } from "react"
import { Icon } from "@iconify/react"
import { useTheme } from "../../contexts/themecontext"
import { DropdownMenu,DropdownMenuContent,DropdownMenuTrigger,DropdownMenuItem } from "../ui/dropdown-menu"

export default function ChangeMode () {

    const {theme, toggleTheme} = useTheme()
    const [open,setOpen] = useState(false)

    return(
        <DropdownMenu onOpenChange={()=>setOpen(!open)} value={theme}>
            <DropdownMenuTrigger className="outline-none" asChild>
                <button className="flex gap-x-1">
                    {
                        theme === "light"?
                        <Icon icon="solar:sun-linear" fontSize={22} className="text-black dark:text-white" />
                        :
                        <Icon icon="solar:moon-linear" fontSize={22} className="text-black dark:text-white" />
                    }
                   {
                    !open?
                        <Icon icon="iconamoon:arrow-down-2" fontSize={22} className="text-black dark:text-white" />
                        :
                        <Icon icon="iconamoon:arrow-up-2" fontSize={22} className="text-black dark:text-white" />
                   }
                   
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={`${theme === "dark"?"bg-[#0B1029] border-none":""}`}>
                <DropdownMenuItem className={`flex justify-between ${theme === "light"?"text-green-800":"text-[#cfcfcf]"}`}
                   onSelect={() => toggleTheme("light")}
                 >
                   <div className="flex items-center gap-1">
                      <Icon icon="solar:sun-linear" fontSize={22} />
                     <span>Light</span>
                   </div>
                   {
                    theme === "light"&&
                    <Icon icon="weui:done-filled" fontSize={22} />
                   }
                </DropdownMenuItem>
                <DropdownMenuItem className={`flex justify-between ${theme === "dark"?"text-green-800":"text-[#edebeb"}`} 
                  onSelect={() => toggleTheme("dark")}
                >
                   <div className={`flex items-center gap-1`}>
                      <Icon icon="solar:moon-linear" fontSize={18} />
                      <span>Dark</span>
                   </div>
                   {
                    theme === "dark"&&
                    <Icon icon="weui:done-filled" fontSize={22} />
                   }
                </DropdownMenuItem>
            </DropdownMenuContent>
    </DropdownMenu>
    )
}