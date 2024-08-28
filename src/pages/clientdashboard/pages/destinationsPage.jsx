import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import TableShared from "../../../components/global/tableShared"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import DestinationCardImg from "../../../assets/client/destination-card-bigimg.png"
import googlemanagerlogo from "../../../assets/client/google-tag-manager-logo.png"
import googleanalyticlogo from "../../../assets/client/google-analytic-logo.png"
import metalogo from "../../../assets/client/meta-logo.png"
import hubspotlogo from "../../../assets/client/hubSpot-Logo.png"
import snapchatlogo from "../../../assets/client/snapchat-logo.png"


const DestinationsPage = () =>{
    return(
        <div className="flex flex-col gap-4">
            <DestinationsPrimaryComponent />
            <DestinationsSecondryComponent />
        </div>
    )
}
export default DestinationsPage

const DestinationsPrimaryComponent = () =>{
    return(
        <Card>
            <CardHeader>
                <CardTitle>Your Integration</CardTitle>
                <CardDescription>
                    A visual representation providing a comprehensive overview of all your data syncs.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="border-[2px] border-[#21D1B7] rounded-md grid grid-cols-12">
                    <div className="xs:col-span-12 md:col-span-7 py-10 px-6 flex flex-col gap-6">
                        <h4 className="font-[600] text-[24px]">Destinations</h4>
                        <p className="text-[#757575] m-0">
                            Destinations are the business tools or applications to
                            which Journify forwards your data. Integrating destinations
                            empowers you to leverage your data and gain real-time insights
                            into your customers.
                        </p>
                        <Button 
                            className="w-fit !m-0"
                            style={{
                                background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                            }}
                        >
                            <Link className="flex gap-2" to={"/dashboard/destinationdata"}>
                                <Icon icon="ic:twotone-add" fontSize={22} />
                                <span className="capitalize font-[500]">New Destination</span>
                            </Link>
                        </Button>
                    </div>
                    <div className="xs:col-span-12 md:col-span-5 px-4">
                        <img 
                            alt="destinations-card-img"
                            className="h-full "
                            loading="lazy"
                            src={DestinationCardImg}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
const DestinationsSecondryComponent = () =>{
    const tableHeader = ["Sync Data To",,"Type","Last Sync","Status","Created By"]
    const tableBody = [
        {
            cell1:(
                <div className="grid grid-cols-2">
                    <div className="col-span-1 flex items-center gap-2">
                        <img src={googlemanagerlogo} alt="google-tag-manager-logo" />
                        <span>Google Tag Manager</span>
                    </div>
                    
                    <div className="col-span-1 flex items-center gap-2">
                        <Icon icon="pajamas:arrow-right" color="#00AC98" fontSize={20} />
                        <img src={metalogo} alt="google-tag-manager-logo" />
                        <span>Meta Ads</span>
                    </div>
                </div>
            ),
            cell2:(<span>Event Streams</span>),
            cell3:(<span>Realtime</span>),
            cell4:(
                <div className="flex items-center rounded-lg h-[22px] w-[71px] text-[#00AC98] bg-[#D5FFF9]">
                    <Icon icon="octicon:dot-fill-16" fontSize={20} />
                    <span>Active</span>
                </div>
            ),
            cell5:(
                <div className="flex items-center gap-2">
                    <img src={googlemanagerlogo} alt="google-tag-manager-logo" />
                    <span>Mohamed Ashref</span>
                </div>
            )
        },
        {
            cell1:(
                <div className="grid grid-cols-2">
                    <div className="col-span-1 flex items-center gap-2">
                        <img src={hubspotlogo} alt="google-tag-manager-logo" />
                        <span>HubSpot</span>
                    </div>
                    
                    <div className="col-span-1 flex items-center gap-2">
                        <Icon icon="pajamas:arrow-right" color="#EA5935" fontSize={20} />
                        <img src={snapchatlogo} alt="google-tag-manager-logo" />
                        <span>Snapchat Ads</span>
                    </div>
                </div>
            ),
            cell2:(<span>Offline Data</span>),
            cell3:(<span>N/A</span>),
            cell4:(
                <div className="flex items-center rounded-lg h-[22px] w-[87px] text-[#EA5935] bg-[#FFE6E4]">
                    <Icon icon="octicon:dot-fill-16" fontSize={20} />
                    <span>Disactive</span>
                </div>
            ),
            cell5:(
                <div className="flex items-center gap-2">
                    <img src={googlemanagerlogo} alt="google-tag-manager-logo" />
                    <span>Mohamed Ashref</span>
                </div>
            )
        },
    ]

    return(
        <Card>
            <CardHeader className="flex flex-row xs:flex-wrap md:flex-nowrap justify-between gap-6">
                <div className="md:max-w-[660px]">
                    <CardTitle>Your Integration</CardTitle>
                    <CardDescription className="mt-2">
                        Sources can be websites, libraries, mobile SDKs, POS, or
                        cloud applications that send data into Journify. Gather
                        customer data to understand how your product is being used
                        and who your customers are.
                    </CardDescription>
                </div>
                <Button 
                    className="w-fit !m-0"
                    style={{
                        background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                    }}
                >
                    <Link className="flex gap-2" to={"/dashboard/destinationdata"}>
                        <Icon icon="ic:twotone-add" fontSize={22} />
                        <span className="capitalize font-[500]">New Destination</span>
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <TableShared tableBody={tableBody} tableHeader={tableHeader} />
            </CardContent>
        </Card>
    )
}