import { useState } from "react";
import { Icon } from "@iconify/react";
import { Card, CardContent } from "../../../components/ui/card";
import {Tabs,TabsList,TabsContent,TabsTrigger} from "../../../components/ui/tabs"
import GeneralTab from "../components/settingstabs/generalTab";
import BillingTab from "../components/settingstabs/billingTab";
import MembersTab from "../components/settingstabs/membersTab";
import AccountTab from "../components/settingstabs/accountTab";
const SettingsPage = () =>{
    const [activeTab,setActiveTab] = useState("general")
    return(
        <Card className="min-h-full dark:bg-[#171C32] dark:border-none">
            <CardContent className="min-h-full">
                <Tabs className="min-h-full flex flex-row gap-4 pt-4" defaultValue="general">
                            <TabsList className="bg-white dark:bg-inherit !h-[inherit] flex flex-col justify-start !items-start w-[200px] p-0 pe-6 rounded-none border-r">
                                <TabsTrigger 
                                className={`flex justify-start items-center !shadow-none w-full gap-2 px-2 py-1 cursor-pointer
                                    ${["general","billing","members"].includes(activeTab)?
                                    "!bg-[#F9F9F9] dark:!bg-[#0B1029] !text-[#1E43FA] dark:!text-white"
                                    :"text-[#757575] dark:text-[#cfcfcf]"}
                                `}
                                value="general"
                                onClick={()=>setActiveTab("general")}
                                >
                                    <Icon icon="ic:round-settings" fontSize={20} />
                                    <span>Organization</span>
                                </TabsTrigger>
                                <div className="flex flex-col gap-2 ps-8 py-2">
                                    {
                                        ["general","billing","members"].map((item,index)=>{
                                            return(
                                            <TabsTrigger 
                                                key={index} value={item}
                                                onClick={()=>setActiveTab(item)}
                                                className={`capitalize !bg-inherit !rounded-none !shadow-none p-0 justify-start
                                                ${activeTab===item?"!text-[#1E43FA] dark:!text-white":"text-[#757575] dark:text-[#cfcfcf]"}
                                                `}
                                            >
                                                {item}
                                            </TabsTrigger>
                                            )
                                        })
                                    }
                                </div>
                                <TabsTrigger 
                                    value="account"
                                    onClick={()=>setActiveTab("account")}
                                    className={`flex justify-start items-center !shadow-none w-full gap-2 px-2 py-1.5
                                        ${activeTab==="account"?
                                        "!bg-[#F9F9F9] dark:!bg-[#0B1029] !text-[#1E43FA] dark:!text-white":
                                        "text-[#757575] dark:text-[#cfcfcf]"}
                                    `}
                                >
                                    <Icon icon="mingcute:user-4-line" fontSize={20} />
                                    <span>My Account</span>
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent className="m-0 grow" value="general">
                               <GeneralTab />
                            </TabsContent>
                            <TabsContent className="m-0 grow" value="billing">
                                <BillingTab />
                            </TabsContent>
                            <TabsContent className="m-0 grow" value="members">
                                <MembersTab />
                            </TabsContent>
                            <TabsContent className="m-0 grow" value="account">
                                <AccountTab />
                            </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}
export default SettingsPage;