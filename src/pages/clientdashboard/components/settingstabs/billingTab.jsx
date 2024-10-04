import { useForm } from "react-hook-form";
import { Button } from "../../../../components/ui/button";
import TableShared from "../../../../components/global/tableShared";
import { Icon } from "@iconify/react";

const BillingTab = () =>{

    const {register,handleSubmit,formState} = useForm({
        defaultValues:{
            company:"",billing_email:"",address:"",
            city:"",state:"",zib_code:"",country:"",
            tax_type:"",tax_id:""
        },
        mode:"onChange"
    })

    const tableHeader = ["Period From","Period To","Payment Method","Amount","Status","Invoice"]
    const tableBody = [
        {
            cell1:(<span>May 28, 2024</span>),
            cell2:(<span>May 28, 2024</span>),
            cell3:(<span>Not defined</span>),
            cell4:(<span>0 usd</span>),
            cell5:(
                <div className="flex items-center justify-center w-fit px-[12px] py-0.5 rounded-md bg-[#13B238] text-white">
                   <Icon icon="radix-icons:dot-filled" className="-ml-1.5" fontSize={20} />
                   <span className="capitalize">Paid</span>
                </div>
            ),
            cell6:(<span>Realtime</span>)
        },
        {
            cell1:(<span>May 28, 2024</span>),
            cell2:(<span>June 28, 2024</span>),
            cell3:(<span>Not defined</span>),
            cell4:(<span>0 usd</span>),
            cell5:(
                <div className="flex items-center justify-center w-fit px-[12px] py-0.5 rounded-md bg-[#13B238] text-white">
                   <Icon icon="radix-icons:dot-filled" className="-ml-1.5" fontSize={20} />
                   <span className="capitalize">Paid</span>
                </div>
            ),
            cell6:(<span>N/A</span>)
        }
    ]
    return(
        <div className="flex flex-col gap-6">
            <h3 className="font-[600] text-lg m-0">Billing Settings</h3>

            <div className="grid grid-cols-12 gap-6">
                <div className="xs:col-span-12 md:col-span-6 p-6 rounded-md dark:bg-[#0B1029] shadow-[0_0_4px_rgba(0,0,0,0.25)]">
                   <h3 className="font-[600] text-[14px] mb-2">Billing Information</h3>
                   <form className="w-full flex flex-col gap-1.5">

                        <div className="w-full flex flex-col gap-1">
                            <label className="capitalize text-sm">company</label>
                            <input 
                                type="text"
                                {...register("company")}
                                className="px-4 py-2 border outline-none rounded-md text-[#757575] bg-inherit dark:border-[#242D5A]"
                            />
                        </div>

                        <div className="w-full flex flex-col gap-1">
                            <label className="capitalize text-sm">billing email</label>
                            <input 
                                type="text"
                                {...register("billing_email")}
                                className="px-4 py-2 border outline-none rounded-md text-[#757575] bg-inherit dark:border-[#242D5A]"
                            />
                        </div>

                        <div className="w-full flex flex-col gap-1">
                            <label className="capitalize text-sm">Address line 1</label>
                            <input 
                                type="text"
                                {...register("address")}
                                className="px-4 py-2 border outline-none rounded-md text-[#757575] bg-inherit dark:border-[#242D5A]"
                            />
                        </div>

                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-6 flex flex-col gap-1">
                                <label className="capitalize text-sm">city</label>
                                <input 
                                    type="text"
                                    {...register("city")}
                                    className="px-4 py-2 border outline-none rounded-md text-[#757575] bg-inherit dark:border-[#242D5A]"
                                />
                            </div>
                            <div className="col-span-6 flex flex-col gap-1">
                                <label className="capitalize text-sm">state</label>
                                <input 
                                    type="text"
                                    {...register("state")}
                                    className="px-4 py-2 border outline-none rounded-md text-[#757575] bg-inherit dark:border-[#242D5A]"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-6 flex flex-col gap-1">
                                <label className="capitalize text-sm">zib code</label>
                                <input 
                                    type="text"
                                    {...register("zib_code")}
                                    className="px-4 py-2 border outline-none rounded-md text-[#757575] bg-inherit dark:border-[#242D5A]"
                                />
                            </div>
                            <div className="col-span-6 flex flex-col gap-1">
                                <label className="capitalize text-sm">country</label>
                                <input 
                                    type="text"
                                    {...register("country")}
                                    className="px-4 py-2 border outline-none rounded-md text-[#757575] bg-inherit dark:border-[#242D5A]"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-6 flex flex-col gap-1">
                                <label className="capitalize text-sm">tax type</label>
                                <input 
                                    type="text"
                                    {...register("tax_type")}
                                    className="px-4 py-2 border outline-none rounded-md text-[#757575] bg-inherit dark:border-[#242D5A]"
                                />
                            </div>
                            <div className="col-span-6 flex flex-col gap-1">
                                <label className="capitalize text-sm">tax id</label>
                                <input 
                                    type="text"
                                    {...register("tax_id")}
                                    className="px-4 py-2 border outline-none rounded-md text-[#757575] bg-inherit dark:border-[#242D5A]"
                                />
                            </div>
                        </div>

                        <Button 
                            className="capitalize w-fit py-[12px] px-[45px] text-sm mt-2 font-[600] dark:text-[#ECF5FF]"
                            style={{
                                background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                            }}
                        >
                            save change
                        </Button>

                   </form>
                </div>
                <div className="xs:col-span-12 md:col-span-6 p-6 rounded-md dark:bg-[#0B1029] shadow-[0_0_4px_rgba(0,0,0,0.25)]">
                   <h3 className="font-[600] text-[14px] mb-2">Payment methods</h3>
                   <div className="p-6 rounded-md border-[1px] border-[#CFCFCF] dark:border-[#242D5A]">
                      <div className="mb-6">
                        <h4 className="font-[600] text-[14px] mb-2">No payment methods yet?</h4>
                        <p className="text-[#757575] dark:text-[#cfcfcf]">
                            to enable automatic renewal of your subscription,
                            please ensure that you have at least one valid payment method on file.
                        </p>
                      </div>
                      <Button 
                            className="capitalize w-fit py-[12px] px-4 font-[500] text-[#1E43FA] dark:text-white
                             border border-[#1E43FA] dark:border-white !bg-inherit
                            "
                        >
                            Setup a payment method
                     </Button>
                   </div>
                </div>
            </div>

            <div className="p-6  rounded-md shadow-[0_0_4px_rgba(0,0,0,0.25)] dark:bg-[#0B1029] max-w-full overflow-hidden">
                <h3 className="capitalize font-[600] text-sm mb-2">Billing History</h3>
                <div className="max-w-[900px] sm:max-w-[350px] md:max-w-[650px] lg:max-w-[900px]">
                    <TableShared 
                        darkHeader={true}
                        showShadow={true} 
                        tableBody={tableBody} 
                        tableHeader={tableHeader} 
                    />
                </div>
            </div>

        </div>
    )
}
export default BillingTab;