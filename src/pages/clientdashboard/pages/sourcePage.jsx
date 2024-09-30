import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "../../../components/ui/card"
import TableShared from "../../../components/global/tableShared"
import { Button } from "../../../components/ui/button"
import { useTheme } from "../../../contexts/themecontext"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import SourceCardImg from "../../../assets/client/source-card-bigimg.png"
import SourceDarkCardImg from "../../../assets/client/source-darkcard-bigimg.png"
import googlemanagerlogo from "../../../assets/client/google-tag-manager-logo.png"
import googleanalyticlogo from "../../../assets/client/google-analytic-logo.png"
import metalogo from "../../../assets/client/meta-logo.png"
import hubspotlogo from "../../../assets/client/hubSpot-Logo.png"
import snapchatlogo from "../../../assets/client/snapchat-logo.png"




const SourcePage = () =>{
    return(
        <div className="flex flex-col gap-4">
            <SourcePrimaryComponent />
            <SourceSecandryComponent />
        </div>
    )
}
export default SourcePage

const SourcePrimaryComponent = () =>{
    const {theme} = useTheme()
    const isDark = theme === "dark"
    return(
        <Card className="dark:border-none dark:bg-[#171C32]">
            <CardHeader>
                <CardTitle className="text-lg font-[600]">Your Integration</CardTitle>
                <CardDescription className="text-sm dark:text-[#cfcfcf]">
                    A visual representation providing a comprehensive overview of all your data syncs.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="border-[2px] border-[#21D1B7] rounded-md grid grid-cols-12">
                    <div className="xs:col-span-12 md:col-span-7 py-10 px-6 flex flex-col gap-6">
                        <h4 className="font-[600] text-[24px]">Sources</h4>
                        <p className="text-[#757575] dark:text-[#cfcfcf] m-0">
                            Sources can be websites, libraries, mobile SDKs, POS, or cloud
                            applications that send data into Journify. Gather customer data
                            to understand how your product is being used and who your customers are.
                        </p>
                        <Button 
                            className="w-fit dark:text-[#ECF5FF]"
                            style={{
                                background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                            }}
                        >
                            <Link className="flex gap-2" to={"/dashboard/datasource"}>
                                <Icon icon="ic:twotone-add" fontSize={22} />
                                <span className="capitalize text-sm font-[600]">New Source</span>
                            </Link>
                        </Button>
                    </div>
                    <div className="xs:col-span-12 md:col-span-5 px-4">
                        <img 
                            alt="source-card-img"
                            className="h-full "
                            loading="lazy"
                            src={isDark?SourceDarkCardImg:SourceCardImg}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
const SourceSecandryComponent = () =>{

    const tableHeader = ["Title","Status","Type","Sync to","Created At","Created By"]
    const tableBody = [
        {
            cell1:(
                <div className="flex items-center gap-2">
                    <img src={googlemanagerlogo} alt="google-tag-manager-logo" />
                    <span>Google Tag Manager </span>
                </div>
            ),
            cell2:(
                <div className="flex items-center rounded-lg h-[22px] w-[80px] text-[#00AC98] bg-[#D5FFF9]">
                    <Icon icon="octicon:dot-fill-16" fontSize={20} />
                    <span>Enabled</span>
                </div>
            ),
            cell3:(<span>Event Streams</span>),
            cell4:(
                <div className="flex gap-2">
                    <img src={metalogo} alt="meta-logo" />
                    <img src={snapchatlogo} alt="snapchat-logo" />
                </div>
            ),
            cell5:(<span>2 months ago</span>),
            cell6:(
                <div className="flex items-center gap-2">
                    <img src={googlemanagerlogo} alt="google-tag-manager-logo" />
                    <span>Mohamed Ashref</span>
                </div>
            )
        },
        {
            cell1:(
                <div className="flex items-center gap-2">
                    <img src={hubspotlogo} alt="google-tag-manager-logo" />
                    <span>HubSpot</span>
                </div>
            ),
            cell2:(
                <div className="flex items-center rounded-lg h-[22px] w-[80px] text-[#00AC98] bg-[#D5FFF9]">
                    <Icon icon="octicon:dot-fill-16" fontSize={20} />
                    <span>Enabled</span>
                </div>
            ),
            cell3:(<span>Offline Data</span>),
            cell4:(
                <div className="flex gap-2">
                    <img src={googleanalyticlogo} alt="snapchat-logo" />
                </div>
            ),
            cell5:(<span>3 months ago</span>),
            cell6:(
                <div className="flex items-center gap-2">
                    <img src={googlemanagerlogo} alt="google-tag-manager-logo" />
                    <span>Mohamed Ashref</span>
                </div>
            )
        },
    ]

    return(
        <Card className="dark:border-none dark:bg-[#171C32]">
            <CardHeader className="flex flex-row xs:flex-wrap md:flex-nowrap justify-between gap-6">
                <div className="md:max-w-[660px]">
                    <CardTitle className="text-lg font-[600]">Your Integration</CardTitle>
                    <CardDescription className="mt-2 dark:text-[#cfcfcf]">
                        Sources can be websites, libraries, mobile SDKs, POS, or
                        cloud applications that send data into Journify. Gather
                        customer data to understand how your product is being used
                        and who your customers are.
                    </CardDescription>
                </div>
                <Button 
                    className="w-fit !m-0 dark:text-[#ECF5FF]"
                    style={{
                        background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                    }}
                >
                    <Link className="flex gap-2" to={"/dashboard/datasource"}>
                        <Icon icon="ic:twotone-add" fontSize={22} />
                        <span className="capitalize text-sm font-[600]">New Source</span>
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <TableShared tableBody={tableBody} tableHeader={tableHeader} />
            </CardContent>
        </Card>
    )
}
