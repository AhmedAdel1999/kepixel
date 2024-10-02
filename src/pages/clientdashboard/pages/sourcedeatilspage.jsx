import { useState } from "react";
import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "../../../components/ui/card";
import {Tabs,TabsList,TabsContent,TabsTrigger} from "../../../components/ui/tabs"
import OverviewTab from "../components/sourcedetailstabs/overviewTab";
import SyncTab from "../components/sourcedetailstabs/syncTab";
import SettingsTab from "../components/sourcedetailstabs/settingsTab";
import googletagimg from "../../../assets/client/googletage-img.png"
import { Icon } from "@iconify/react";




const SourceDetailsPage = () =>{

    const [activeTab,setActiveTab] = useState("overview")

    return(
        <div className="flex flex-col gap-4">
           <Card className="dark:border-none dark:bg-[#171C32]">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <img 
                                className="card-logo"
                                src={googletagimg} 
                            />
                            <div>
                                <CardTitle className="mb-1 text-[#0E1B26)] text-[16px] font-[500]">
                                    Google Tag Manager Browser Template
                                </CardTitle>
                                <CardDescription className="text-sm dark:text-[#cfcfcf]">
                                    Build dynamic audiences using customer data sent
                                    from your Google Tag Manager
                                </CardDescription>
                            </div>
                        </div>
                        <div className="flex items-center rounded-lg h-[22px] w-[80px] text-[#00AC98] bg-[#D5FFF9]">
                            <Icon icon="octicon:dot-fill-16" fontSize={20} />
                            <span>Enabled</span>
                        </div>
                    </div>
                </CardHeader>
           </Card>

           <Card className="dark:border-none dark:bg-[#171C32]">
                <CardHeader>
                    <CardTitle className="text-[#0E1B26)] text-[18px] font-[600]">Source details</CardTitle>
                    <CardDescription className="max-w-[600px] text-sm dark:text-[#cfcfcf]">
                        Sources can be websites, libraries, mobile SDKs, POS,
                        or cloud applications that send data into Journify.
                        Gather customer data to understand how your product
                        is being used and who your customers are.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="overview">
                        <TabsList className="bg-white dark:bg-inherit">
                            {
                                ["overview","syncs","debugger","settings"].map((item,index)=>{
                                    return(
                                       <TabsTrigger 
                                          key={index} value={item}
                                          onClick={()=>setActiveTab(item)}
                                          className={`capitalize !rounded-none !shadow-none ${activeTab===item?
                                          "!text-[#1E43FA] border-[#1E43FA] border-b-[1px]":""} 
                                          dark:!text-white dark:!border-white dark:bg-inherit `}
                                       >
                                         {item}
                                       </TabsTrigger>
                                    )
                                })
                            }
                        </TabsList>
                        <TabsContent value="overview">
                            <OverviewTab />
                        </TabsContent>
                        <TabsContent value="syncs"><SyncTab /></TabsContent>
                        <TabsContent value="debugger">debugger</TabsContent>
                        <TabsContent value="settings"><SettingsTab /></TabsContent>
                    </Tabs>
                </CardContent>
           </Card>
        </div>
    )
}
export default SourceDetailsPage;