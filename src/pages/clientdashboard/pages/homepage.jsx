import React from "react"
import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Link } from "react-router-dom"
import Diagram from "../components/diagram"
import { Icon } from "@iconify/react"
import { useTheme } from "../../../contexts/themecontext"
import IntegrationCardImg from "../../../assets/client/integration-card-img.png"
import SourceCardImg from "../../../assets/client/source-card-img.png"
import SourceDarkCardImg from "../../../assets/client/source-darkcard-img.png"
import DestinationsCardImg from "../../../assets/client/destination-card-img.png"
import DestinationsDarkCardImg from "../../../assets/client/destination-darkcard-img.png"






const HomePage = () =>{

     const {theme} = useTheme()

    return(
        <div className="flex flex-col gap-4">
            {/* <SecondaryHomeCard /> */}
            <PrimaryHomeCard />
            <div className="grid grid-cols-12 gap-4">
                <Card className="xs:col-span-12 md:col-span-6 dark:border-none">
                    <CardContent className="pt-10 grid grid-cols-12 gap-x-6">
                        <div className="col-span-7 flex flex-col gap-4">
                            <h4 className="text-[#0E1B26] dark:text-white font-[600] m-0">Source</h4>
                            <p className="m-0 text-sm text-[#757575] dark:text-[#cfcfcf]">
                                A source, whether it's a website, server library, mobile SDK,
                                or cloud app, sends data to Journify. Add sources to gather insights
                                into your customers and product usage. Create a source for each website
                                or app you wish to track.
                            </p>
                            <Link className="capitalize font-[500] text-[14px] text-[#1E43FA]" to="#">
                              learn more
                            </Link>
                        </div>
                        <div className="col-span-5 flex justify-end">
                           <img 
                              alt="source-card-img"
                              className="h-[250px]"
                              loading="lazy"
                              src={theme==="light"?SourceCardImg:SourceDarkCardImg}
                            />
                        </div>
                    </CardContent>
                </Card>
                <Card className="xs:col-span-12 md:col-span-6 dark:border-none">
                    <CardContent className="pt-10 grid grid-cols-12 gap-x-6">
                        <div className="col-span-7 flex flex-col gap-4">
                            <h4 className="text-[#0E1B26] dark:text-white font-[600] m-0">Destinations</h4>
                            <p className="m-0 text-sm text-[#757575] dark:text-[#cfcfcf]">
                                A source, whether it's a website, server library, mobile SDK,
                                or cloud app, sends data to Journify. Add sources to gather insights
                                into your customers and product usage. Create a source for each website
                                or app you wish to track.
                            </p>
                            <Link className="capitalize font-[500] text-[14px] text-[#1E43FA]" to="#">
                              learn more
                            </Link>
                        </div>
                        <div className="col-span-5 flex justify-end">
                           <img 
                              alt="source-card-img"
                              className="h-[250px]"
                              loading="lazy"
                              src={theme==="dark"?DestinationsDarkCardImg:DestinationsCardImg}
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default HomePage

const PrimaryHomeCard = () =>{
    return(
        <Card className="dark:border-none">
            <CardHeader>
                <CardTitle className="text-lg">Your Integration</CardTitle>
                <CardDescription className="text-sm dark:text-[#cfcfcf]">
                    A visual representation providing a comprehensive overview of all your data syncs.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="border-[2px] border-[#21D1B7] rounded-md grid grid-cols-12">
                    <div className="xs:col-span-12 md:col-span-6 py-10 px-6 flex flex-col gap-6">
                        <p className="text-[#757575] dark:text-[#cfcfcf] m-0">
                            Welcome to  Kepixel! We are thrilled to have you on board.
                            Explore our range of features and enhance your experience.
                            Are you ready to get started?
                        </p>
                        <Button 
                            className="w-fit"
                            style={{
                                background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                            }}
                        >
                           <Link className="flex items-center gap-2 dark:text-[#ECF5FF]" to={"/dashboard/datasource"}>
                                <Icon icon="ic:twotone-add" fontSize={22} />
                                <span className="capitalize text-[14px] font-[600]">
                                    Creat New Source
                                </span>
                           </Link>
                        </Button>
                    </div>
                    <div className="xs:col-span-12 md:col-span-6">
                        <img 
                            alt="integration-card-img"
                            className="h-full w-full"
                            loading="lazy"
                            src={IntegrationCardImg}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
const SecondaryHomeCard = () =>{
    return(
        <Card>
            <CardHeader className="flex flex-row xs:flex-wrap md:flex-nowrap justify-between gap-6">
                <div className="md:max-w-[660px]">
                    <CardTitle>Your Integration</CardTitle>
                    <CardDescription className="mt-2">
                        A visual representation providing a comprehensive overview 
                        of all your data syncs.
                    </CardDescription>
                </div>
                <div className="flex gap-2">
                    <Button 
                        className="w-fit felx gap-2 !m-0"
                        style={{
                            background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                        }}
                    >
                        <Icon icon="ic:twotone-add" fontSize={22} />
                        <span className="capitalize font-[500]">Create Destinations</span>
                    </Button>
                    <Button 
                        className="w-fit felx gap-2 !m-0 bg-inherit hover:bg-inherit border border-[#1E43FA] text-[#1E43FA]"
                    >
                        <Icon icon="ic:twotone-add" fontSize={22} />
                        <span className="capitalize font-[500]">Create Source</span>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Diagram />
            </CardContent>
        </Card>
    )
}