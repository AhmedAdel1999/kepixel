import { useContext, useState } from "react";
import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "../../../components/ui/card"
import { Dialog,DialogContent,DialogTrigger,DialogTitle,
DialogFooter, DialogHeader,DialogDescription } from "../../../components/ui/dialog";
import { ProjectContext } from "../../../contexts/projectcontext";
import { Button } from "../../../components/ui/button";
import { Icon } from "@iconify/react";
import { dataSource } from "../../../constants/datasource";
import { Link } from "react-router-dom";
import { CreateProjectModalBody } from "../components/createprojectmodal";



const DataSourcePage = () =>{


    const {projects} = useContext(ProjectContext)
    const filterLabels=[
        "Advertising","Analytic","CRM","Customer Success","Email",
        "Internal Notifications","Payments"
    ]

    const [currentDataSource,setCurrentDataSource] = useState([...dataSource])
    const [checkedLabels,setCheckedLables] = useState([...filterLabels])

    const handelChange = (e) => {
        
        const {name,checked} = e.target
        if(checked){
            if(name==="All"){
                setCheckedLables(filterLabels)
                setCurrentDataSource([...dataSource])
            }else{
                setCheckedLables([...checkedLabels,name])
                setCurrentDataSource(dataSource.filter((item)=>[...checkedLabels,name].includes(item.category)))
            }
        }else{
            if(name==="All"){
                setCheckedLables([])
                setCurrentDataSource([])
            }else{
                setCheckedLables(checkedLabels.filter((label)=>label!==name))
                setCurrentDataSource(dataSource.filter((item)=>checkedLabels.filter((label)=>label!==name).includes(item.category)))
            }
        }
    }
    

    return(
        <div className="flex flex-col gap-4">
            <Card>
                <CardHeader className="flex flex-row xs:flex-wrap md:flex-nowrap justify-between gap-6">
                    <div className="md:max-w-[600px]">
                        <CardTitle>Create your data source</CardTitle>
                        <CardDescription className="mt-2">
                            Sources can be websites, libraries, mobile SDKs,
                            POS, or cloud applications that send data into Journify.
                            Gather customer data to understand how your product is being
                            used and who your customers are.
                        </CardDescription>
                    </div>
                    <div className="rounded-md px-2 h-fit border flex items-center">
                        <input 
                            type="text" 
                            placeholder="Search in Destination "
                            className="py-2 outline-none"
                        />
                        <Icon icon="weui:search-outlined" fontSize={20} />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="mb-4 flex gap-6 items-center">
                        <div className="flex items-center gap-[6px]">
                            <input 
                                type="checkbox" 
                                name={"All"}
                                className="w-4 h-4 cursor-pointer"
                                onChange={(e)=>handelChange(e)}
                                defaultChecked={true}
                            />
                            <span className="text-[#757575] capitalize">
                                All
                            </span>
                        </div>
                        {
                            filterLabels.map((label,index)=>{
                                return(
                                    <div className="flex items-center gap-[6px]" key={index}>
                                        <input 
                                            type="checkbox" 
                                            name={label}
                                            checked={checkedLabels.includes(label)}
                                            className="w-4 h-4 cursor-pointer"
                                            onChange={(e)=>handelChange(e)}
                                        />
                                        <span className="text-[#757575] capitalize">
                                            {label}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col gap-8">
                        {
                            currentDataSource.map((item,index)=>{
                                return(
                                    <div className="flex flex-col gap-4" key={index}>
                                        <h3 className="font-bold">{item.category}</h3>
                                        <div className="flex gap-4">
                                        {
                                            item.items.map((card,index)=>{
                                                return(
                                                    <Dialog key={index}>
                                                        <DialogTrigger>
                                                           <div className="cursor-pointer rounded-md border p-4 flex flex-col gap-4 h-[148px] max-w-[267px]">
                                                                <div className="flex items-center gap-2">
                                                                    <img src={card.img} alt={card.titel} />
                                                                    <h4 className="text-sm">{card.titel}</h4>
                                                                </div>
                                                                <p className="h-[47px] line-clamp-2 text-[12px] text-[#757575]">{card.text}</p>
                                                            </div>
                                                        </DialogTrigger>
                                                        {
                                                            projects.length>0?
                                                            <DialogContent className="max-w-[600px]">
                                                                <DialogHeader className="mb-6">
                                                                    <div className="flex items-center gap-x-4">
                                                                        <img 
                                                                        alt="source-img" src={card.img} 
                                                                        className="h-full"
                                                                        />
                                                                        <div>
                                                                            <DialogTitle className="mb-1.5">{card.titel}</DialogTitle>
                                                                            <DialogDescription className="max-w-[350px]">
                                                                                Build dynamic audiences using customer data
                                                                                sent from your Google Tag Manager
                                                                            </DialogDescription>
                                                                        </div>
                                                                    </div>
                                                                </DialogHeader>
                                                                <div className="border-y-2 py-6 flex flex-col gap-8">

                                                                    <div className="flex flex-col gap-0.5">
                                                                        <h4 className="font-[600] text-[#0E1B26]">Compatible platforms</h4>
                                                                        <p className="text-[#757575] m-0 flex items-center gap-1.5">
                                                                            <Icon icon="heroicons:computer-desktop" fontSize={23} />
                                                                            <span>Web</span>
                                                                        </p>
                                                                    </div>

                                                                    <div className="flex flex-col gap-0.5">
                                                                        <h4 className="font-[600] text-[#0E1B26]">Website</h4>
                                                                        <Link to={"#"} className="text-[#1E43FA]">tagmanager.google.com</Link>
                                                                    </div>

                                                                    <div className="flex flex-col gap-0.5">
                                                                        <h4 className="font-[600] text-[#0E1B26]">Code required?</h4>
                                                                        <span className="text-[#757575]">No</span>
                                                                    </div>

                                                                    <div className="flex flex-col gap-0.5">
                                                                        <h4 className="font-[600] text-[#0E1B26]">Datahub required?</h4>
                                                                        <span className="text-[#757575]">No</span>
                                                                    </div>
                                                                </div>
                                                                <DialogFooter>
                                                                <Button
                                                                    className="w-fit felx gap-2 !m-0"
                                                                    style={{
                                                                        background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                                                                    }} 
                                                                >
                                                                        <Link to={"/dashboard/createsource"}>Create Source</Link>
                                                                </Button>
                                                                </DialogFooter>
                                                            </DialogContent>
                                                            :
                                                            <CreateProjectModalBody />
                                                        }
                                                        
                                                    </Dialog>
                                                )
                                            })
                                        }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </CardContent>
            </Card> 
        </div>
    )
}
export default DataSourcePage;