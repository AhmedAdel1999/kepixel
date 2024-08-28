import { Select,SelectTrigger,SelectContent,SelectGroup,SelectItem,SelectValue } from "../../../../components/ui/select"
import TableShared from "../../../../components/global/tableShared";
import { Button } from "../../../../components/ui/button";
import { Icon } from "@iconify/react";
import avatar from "../../../../assets/asset 1.png"

const MembersTab = () =>{

    const tableHeader = ["User","Status","Role","Action"]
    const tableBody = [
        {
            cell1:(
                <div className="flex items-center gap-4">
                   <div className="w-[30px] h-[30px] rounded-full">
                      <img src={avatar} alt="avatar" className="w-full h-full rounded-full" />
                   </div>
                   <span>Mohamed asharf</span>
                </div>
            ),
            cell2:(
                <div className="flex items-center justify-center w-fit px-[12px] py-0.5 rounded-md bg-[#D5FFF9] text-[#00AC98]">
                   <Icon icon="radix-icons:dot-filled" className="-ml-1.5" fontSize={20} />
                   <span className="capitalize">active</span>
                </div>
            ),
            cell3:(
                <Select
                    value="administrator"
                >
                    <SelectTrigger className="border-[1px] focus:ring-0 focus:border-transparent">
                        <SelectValue placeholder="administrator" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem className="capitalize" value="administrator">
                                administrator
                            </SelectItem>  
                            <SelectItem className="capitalize" value="user">
                                user
                            </SelectItem> 
                        </SelectGroup>
                    </SelectContent>
                </Select>
            ),
            cell4:(
                <Button className="flex flex-col w-fit h-fit !bg-inherit gap-1 text-[#757575]">
                    <Icon icon="ant-design:user-add-outlined" fontSize={20} />
                    <span className="capitalize">Delete</span>
                </Button>
            )
        },
        {
            cell1:(
                <div className="flex items-center gap-4">
                   <div className="w-[30px] h-[30px] rounded-full">
                      <img src={avatar} alt="avatar" className="w-full h-full rounded-full" />
                   </div>
                   <span>Mohamed asharf</span>
                </div>
            ),
            cell2:(
                <div className="flex items-center justify-center w-fit px-[12px] py-0.5 rounded-md bg-[#FFE6E4] text-[#EA5935]">
                   <Icon icon="radix-icons:dot-filled" className="-ml-1.5" fontSize={20} />
                   <span className="capitalize">disactive</span>
                </div>
            ),
            cell3:(
                <Select
                    value="administrator"
                >
                    <SelectTrigger className="border-[1px] focus:ring-0 focus:border-transparent">
                        <SelectValue placeholder="administrator" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem className="capitalize" value="administrator">
                                administrator
                            </SelectItem>  
                            <SelectItem className="capitalize" value="user">
                                user
                            </SelectItem> 
                        </SelectGroup>
                    </SelectContent>
                </Select>
            ),
            cell4:(
                <Button className="flex flex-col w-fit h-fit !bg-inherit gap-1 text-[#757575]">
                    <Icon icon="ant-design:user-add-outlined" fontSize={20} />
                    <span className="capitalize">Delete</span>
                </Button>
            )
        }
    ]

    return(
        <div className="flex flex-col gap-6">
            <h3 className="font-[600] text-lg">Members</h3>

            <TableShared tableBody={tableBody} tableHeader={tableHeader} />

            <div className="h-[1px] bg-[#757575]"></div>

            <div className="flex flex-col gap-6">
              <h3 className="font-[600] text-lg">Invite by email address</h3>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-12 gap-6">

                    <div className="col-span-6 flex flex-col gap-1">
                        <label className="capitalize text-sm">Email(s)</label>
                        <input 
                            type="text"
                            className="px-4 py-2 border outline-none rounded-md text-[#757575]"
                        />
                    </div>

                    <div className="col-span-6 flex flex-col gap-1">
                        <label className="capitalize text-sm">Role</label>
                        <Select
                           value="administrator"
                        >
                            <SelectTrigger className="border-[1px] focus:ring-0 focus:border-transparent">
                                <SelectValue placeholder="administrator" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem className="capitalize" value="administrator">
                                       administrator
                                    </SelectItem>  
                                    <SelectItem className="capitalize" value="user">
                                       user
                                    </SelectItem> 
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Button 
                        className="capitalize w-fit font-[500] py-[12px] px-[45px]"
                        style={{
                            background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                        }}
                    >
                        Invite
                </Button>
              </form>
            </div>
        </div>
    )
}
export default MembersTab;