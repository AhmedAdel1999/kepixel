import { useContext, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Icon } from "@iconify/react"
import { Button } from "../../components/ui/button"
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger,} from "../../components/ui/accordion"
import { Popover,PopoverTrigger,PopoverContent } from "../../components/ui/popover"
import CreateProject from "./components/createprojectmodal"
import { ProjectContext } from "../../contexts/projectcontext"
import avatar from "../../assets/asset 1.png"
import logo from "../../assets/client/sidebar-logo.png"







const DashboardSidebar = () =>{

    const routes =[
        {path:"/dashboard",name:"home",icon:<Icon icon="bx:home" fontSize={22} />,isDropDown:false},
        {name:"integration",icon:<Icon icon="iconoir:union-alt" fontSize={22} />,isDropDown:true,
          dropdownmenu:[
            {
                path:"integration/sources",name:"sources",
                icon:<Icon icon="bx:data" fontSize={22} />,
                relatedPages:["datasource","sourcedetails","createsource"]
            },
            {
                path:"integration/destinations",name:"destinations",
                icon:<Icon icon="mi:cloud-upload" fontSize={22} />,
                relatedPages:["destinationdata","createdestination","destinationdetails"]
            },
          ]
        },
        {path:"automation",name:"Automation",icon:<Icon icon="akar-icons:arrow-cycle" fontSize={22} />,isDropDown:false,notFinshed:true},
        {path:"analytic",name:"Analytic",icon:<Icon icon="uim:analytics" fontSize={22} />,isDropDown:false,notFinshed:true},
    ]

    const {projects,setProjects} = useContext(ProjectContext)
    const [selectedProject,setSelectedProject] = useState("")
    const route = useLocation()

    const checkPathName = (value) =>{
        if(route.pathname.endsWith(value)){
            return true
        }else{return false}
    }

    return(
        <div 
          className={`bg-white h-screen max-h-screen overflow-auto min-w-[320px]
          border-r-[1px] border-t-[1px] flex flex-col
          `}>

            <div className="grow flex flex-col p-4">
               <div className="grow">
                    <div className="mb-4 flex flex-col gap-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="rounded-sm px-2 py-2 w-full flex gap-x-3">
                                <img 
                                alt="logo" src={logo} 
                                className="h-[45px] w-[48px] rounded-md"
                                />
                                <div>
                                    <h4 className="font-bold m-0">Kemarq</h4>
                                    <p className="text-[#b0afaf]">Default</p>
                                </div>
                            </div>
                            <div className="border rounded">
                                <Icon icon="ri:arrow-left-s-line" fontSize={33} />
                            </div>
                        </div>
                        <div className="px-2 flex flex-col gap-2">
                           <CreateProject 
                              setSelectedProject={setSelectedProject} 
                              setProjects={setProjects}
                           />
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1" className="border-none">
                                    <AccordionTrigger className="no-underline hover:no-underline text-[#757575] p-0">
                                        {
                                            selectedProject?selectedProject:"Select Project"
                                        }
                                    </AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-2 pb-0">
                                      <div className="w-full flex flex-col gap-4 px-2">
                                        {
                                            projects.map((project,index)=>{
                                                return(
                                                    <div 
                                                    key={index}
                                                    className={`flex items-center gap-x-2 cursor-pointer ${selectedProject===project?"text-[#00887A]":""}`}
                                                    onClick={()=>setSelectedProject(project)}
                                                    >
                                                        <span className="text-[#757575]">{project}</span>
                                                        {
                                                            selectedProject===project&&
                                                            <Icon icon="material-symbols:check" fontSize={20} />
                                                        }
                                                        
                                                    </div>
                                                )
                                            })
                                        }
                                      </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <nav className="flex flex-col gap-y-3 pt-5 border-t-2">
                        {
                            routes.map((item,index)=>{
                                if(!item.isDropDown){
                                    return(
                                        <Link key={index} to={item.path} 
                                         className={`flex gap-x-3 items-center rounded-lg px-4 py-1 
                                          ${checkPathName(item.path)?"bg-[#F9F9F9] text-[#1E43FA]":"text-[#757575]"}`}
                                         >
                                            {item.icon}
                                            <span className="capitalize">{item.name}</span>
                                            {
                                                item.notFinshed&&
                                                <span className="ml-auto py-1 px-[12px] rounded-md text-sm font-bold bg-[#E7FFFB] text-[#00AC98]">
                                                   Comming soon
                                                </span>
                                            }
                                        </Link>
                                    )
                                }else{
                                   return(
                                    <Accordion type="single" collapsible className="my-second-step my-third-step w-full">
                                        <AccordionItem value="item-1" className="border-none">
                                            <AccordionTrigger className={`no-underline hover:no-underline  !px-4 !py-1 rounded-lg text-[#757575] p-0
                                             ${(route.pathname.includes(item.name) ||
                                               item.dropdownmenu.map((item)=>item.relatedPages).flat()
                                               .some(substr => route.pathname.includes(substr))
                                            )?"bg-[#F9F9F9] text-[#1E43FA]":"text-[#757575]"}
                                            `}>
                                                <div 
                                                  className={`flex gap-x-3 items-center`}>
                                                    {item.icon}
                                                    <span className="capitalize">{item.name}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-2 pt-4 pl-6 pb-0">
                                            <div className="w-full flex flex-col gap-4">
                                                {
                                                    item.dropdownmenu.map((menuitem,index)=>{
                                                        return(
                                                            <Link key={index} to={menuitem.path} 
                                                            className={`flex gap-x-3 items-center rounded-lg
                                                            ${(checkPathName(menuitem.path) ||
                                                            menuitem.relatedPages.some(substr => route.pathname.includes(substr))
                                                            )?"text-[#1E43FA]":"text-[#757575]"}`}
                                                            >
                                                                {menuitem.icon}
                                                                <span className="capitalize">{menuitem.name}</span>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                   )
                                }
                            })
                        }
                    </nav>
                </div>
                <div className="w-full self-end flex flex-col gap-4">
                    <Link 
                       to={`/dashboard/settings`}
                       className={`flex gap-x-3 items-center rounded-lg px-4 py-1 
                        ${checkPathName("settings")?"bg-[#F9F9F9] text-[#1E43FA]":"text-[#757575]"}`}
                    > 
                      <Icon icon="ic:round-settings" fontSize={20} />
                      <span className="capitalize">Settings</span>
                    </Link>
                    <Button className="text-[#757575] !bg-inherit flex justify-start items-center gap-3">
                       <Icon icon="solar:logout-2-broken" fontSize={20} />
                       <span className="">Log Out</span>
                    </Button>
                </div>
            </div>
            <div className="w-full self-end border-t-2 p-5">
               <Popover>
                    <PopoverTrigger>
                        <div className="flex gap-x-4 items-center">
                            <div className="w-10 min-w-10 h-10 rounded-[50%] overflow-hidden">
                                <img 
                                alt="avatar" src={avatar} loading="lazy" 
                                className="w-full h-full"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <h4 className="m-0 font-bold text-left">Mostafa Hatata</h4>
                                <p className="truncate text-sm">mostafa.hatata@tryord.net</p>
                            </div>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-[240px]">
                        <ul className="list-none flex flex-col gap-y-3">
                            <li><Link to={"#"}>Organization Settings</Link></li>
                            <li><Link to={"#"}>My Account</Link></li>
                            <li><Button className="p-0 bg-inherit hover:bg-inherit text-black">Sign Out</Button></li>
                        </ul>
                    </PopoverContent>
               </Popover>
            </div>

        </div>
    )
}
export default DashboardSidebar