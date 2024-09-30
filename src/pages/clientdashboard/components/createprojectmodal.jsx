import { useState } from "react";
import { Icon } from "@iconify/react";
import { Dialog,DialogContent, DialogTitle, DialogTrigger } from "../../../components/ui/dialog"
import {Button} from "../../../components/ui/button"
import { useForm } from "react-hook-form";
import logo from "../../../assets/Logo.jpg"
import darklogo from "../../../assets/dark-Logo.png"
import salaimg from "../../../assets/client/sala-img.png"
import shopifyimg from "../../../assets/client/shopify-img.png"
import orderimg from "../../../assets/client/order-img.png"
import easyorderimg from "../../../assets/client/easyorder-img.png"
import wuiltimg from "../../../assets/client/wuilt-img.png"
import wordpressimg from "../../../assets/client/wordpress-img.png"
import { useTheme } from "../../../contexts/themecontext";


const CreateProject = ({setProjects,setSelectedProject}) =>{

    const [openDialog,setOpenDialog] = useState(false)

    return(
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
                <div 
                    className="my-first-step w-full text-[#1E43FA] flex justify-between cursor-pointer"
                >
                    <span className="capitalize dark:text-white">New Project</span>
                    <Icon icon="carbon:add" fontSize={23} className="dark:text-white" />
                </div>
            </DialogTrigger>
            <CreateProjectModalBody 
              setOpenDialog={setOpenDialog} 
              setProjects={setProjects}
              setSelectedProject={setSelectedProject}
            />
        </Dialog>
    )
}
export default CreateProject

export const CreateProjectModalBody = ({setOpenDialog,setProjects,setSelectedProject}) => {

     const {theme} = useTheme()
     const isDark = theme === "dark"

    const cmsTypes = [
        {name:"wordpress",value:"wordpress",icon:wordpressimg},
        {name:"shopify",value:"shopify",icon:shopifyimg},
        {name:"sala",value:"sala",icon:salaimg},
        {name:"order",value:"order",icon:orderimg},
        {name:"easyorder",value:"easyorder",icon:easyorderimg},
        {name:"wuilt",value:"wuilt",icon:wuiltimg},
    ]


    const {register,handleSubmit,formState,watch} = useForm({
        defaultValues:{ 
            projectName:"",url:"",cmsType:"wordpress"
        },
        mode:"onChange"
    })
    const {errors} = formState
    const currentCMSType = watch("cmsType")

    const onSubmit = (data) =>{
        setOpenDialog(false)
        setProjects((prev)=>[...prev,data.projectName])
        setSelectedProject(data.projectName)
    }

    return(
        <DialogContent className={`!min-w-[700px] ${isDark&&"bg-[#171C32] border-none text-white"}`}>
               <DialogTitle>
                <div className={`
                    flex justify-center items-center gap-4 pb-5 border-b-2 
                    ${isDark&&"border-[#242D5A] text-white"}`
                }>
                    <h3 className="font-[600] text-2xl">Welcome to</h3>
                    <img alt="logo" src={isDark?darklogo:logo} className="h-[22px]" />
                </div>
               </DialogTitle>
               <div className="flex flex-col gap-4">
                    <h3 className="font-[600] text-lg">New Project</h3>
                    <p className={`${isDark?"text-[#cfcfcf]":"text-[#757575]"} max-w-[520px]`}>
                        Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                          <div className="flex flex-col gap-1.5">
                              <label className={`text-sm ${isDark&&"text-[#cfcfcf]"}`}>Project Name</label>
                              <input
                                 className={
                                    `px-4 py-2 outline-none bg-inherit rounded-[8px] 
                                    border-[1px] border-[#C1D5F6]`
                                 } 
                                 type="text"
                                 placeholder="Give your Project a name"
                                 {...register("projectName", {
                                    required: "projectName is required",
                                  })}
                               />
                               {errors.projectName&&<span className="text-red-600">{errors.projectName.message}</span>}
                           </div>

                           <div className="flex flex-col gap-1.5">
                              <label className={`text-sm ${isDark&&"text-[#cfcfcf]"}`}>URL</label>
                              <input
                                 className={
                                    `px-4 py-2 outline-none bg-inherit rounded-[8px] 
                                    border-[1px] border-[#C1D5F6]`
                                 }  
                                 type="text"
                                 placeholder="Enter URL"
                                 {...register("url", {
                                    required: "url is required",
                                    pattern: {
                                        value: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+(com|org|net|edu|gov|mil|info|io|co|biz|me|us|uk|in|ca|au|de|fr|jp)(\/[^\s]*)?$/,
                                        message: "Invalid url format",
                                    },
                                  })}
                               />
                               {errors.url&&<span className="text-red-600">{errors.url.message}</span>}
                           </div>
                           <div className="flex flex-col gap-1.5">
                               <label className={`text-sm ${isDark&&"text-[#cfcfcf]"}`}>CMS Type</label>
                               <div className="flex flex-wrap gap-4">
                                    {
                                        cmsTypes.map((item,index)=>{
                                            return(
                                                <div key={index}>
                                                    <input 
                                                        className="hidden" value={item.value}
                                                        type="radio" name="cms" id={item.name} 
                                                        placeholder="Enter URL"
                                                        {...register("cmsType")}
                                                     />
                                                    <label
                                                        className={`${currentCMSType===item.value?"bg-[#1E43FA]":""} 
                                                         realtive cursor-pointer flex gap-3 items-center justify-center w-[200px] h-[46px] py-2 px-4 border rounded-md`
                                                        } 
                                                        htmlFor={item.name}
                                                    >
                                                        <img src={item.icon} alt={item.name} className="z-10" />
                                                        {
                                                            currentCMSType===item.value&&
                                                            <Icon icon="weui:done-filled" className="text-white" fontSize={20} />
                                                        }
                                                    </label>
                                                </div>
                                            )
                                        })
                                    }
                               </div>
                           </div>

                           <div className="flex justify-end gap-4">
                                <button 
                                    type="button" 
                                    onClick={()=>setOpenDialog(false)}
                                    className={`capitalize font-[600] text-sm ${isDark?"text-white":"text-[#1E43FA]"}`}
                                >
                                    skip
                                </button>
                                <Button 
                                    type="submit"
                                    className="capitalize"
                                    style={{
                                        background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                                    }}
                                >
                                    Create Project
                                </Button>
                           </div>
                    </form>
               </div>
        </DialogContent>
    )
}
