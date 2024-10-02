import { useState } from "react";
import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "../../../components/ui/card";
import {Tabs,TabsList,TabsContent,TabsTrigger} from "../../../components/ui/tabs"
import SetupTab from "../components/destinationtabs/setupTab";
import { Icon } from "@iconify/react";
import metaimg from "../../../assets/client/meta-img.png"
import SettingsTab from "../components/destinationtabs/settingsTab";


const DestinationDetailsPage = () =>{

    const [activeTab,setActiveTab] = useState("setup")
    let status = "under_review"  //"not_connect" "under_review","enabled"

    return(
        <div className="flex flex-col gap-4">
           <Card className="dark:border-none dark:bg-[#171C32]">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <img 
                                className="card-logo"
                                src={metaimg} 
                            />
                            <div>
                                <CardTitle className="mb-1 text-[#0E1B26)] text-[16px] font-[500]">
                                   Facebook Custom Audiences
                                </CardTitle>
                                <CardDescription className="text-sm dark:text-[#cfcfcf]">
                                    Build dynamic audiences using customer data sent
                                    from your Google Tag Manager
                                </CardDescription>
                            </div>
                        </div>
                        <div className={`
                           flex items-center justify-center rounded-lg h-[26px] w-[128px]
                           ${status==="not_connect"?"text-[#EA5935] bg-[#FFE6E4]":status==="under_review"?
                            "text-[#F0993E] bg-[#FFF58B]":"text-[#00AC98] bg-[#D5FFF9]"
                           }
                        `}>
                            <Icon icon="octicon:dot-fill-16" fontSize={20} />
                            <span className="capitalize">
                                {
                                    status==="not_connect"?
                                    "not connect":
                                    status==="under_review"?
                                    "under review":"enabled"
                                }
                            </span>
                        </div>
                    </div>
                </CardHeader>
           </Card>

           <Card className="dark:border-none dark:bg-[#171C32]">
                <CardHeader className="flex flex-row flex-wrap justify-between">
                    <div className="flex flex-col">
                        <CardTitle className="text-[#0E1B26)] text-[18px] font-[600]">Destination details</CardTitle>
                        <CardDescription className="max-w-[600px] text-sm dark:text-[#cfcfcf]">
                            Using destinations, you can send your data to different
                            business tools or apps. You can use your data to learn more
                            about your customers and act on destinations in real time.
                        </CardDescription>
                    </div>
                    {
                        activeTab==="setup"&&
                        <div className="px-6 py-1.5 h-fit text-sm font-[500] rounded-lg
                          flex items-center bg-[#f2ff003f]"
                        >
                            <p>
                                Note: you are giving access to a project to
                                <span className="underline"> onboarding@kepixel.io</span>
                            </p>
                        </div>
                    }
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="setup">
                        <TabsList className="bg-white dark:bg-inherit">
                            {
                                ["setup","settings"].map((item,index)=>{
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
                        <TabsContent value="setup">
                            <SetupTab status={status} />
                        </TabsContent>
                        <TabsContent value="settings">
                            <SettingsTab />
                        </TabsContent>
                    </Tabs>
                </CardContent>
           </Card>
        </div>
    )
}
export default DestinationDetailsPage;