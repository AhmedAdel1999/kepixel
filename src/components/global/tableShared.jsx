import { useTheme } from "../../contexts/themecontext";
import { Table,TableBody,TableCell,TableHead,TableHeader,TableRow, } from "../ui/table"
import { Icon } from "@iconify/react";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

export default function TableShared ({tableBody,tableHeader}) {

    const itemsPerPage = 5
    const totalPages = Math.ceil(tableBody.length/itemsPerPage)
    const {theme} = useTheme()
    const isDark = theme === "dark"
    
    return(
        <div style={{ boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.10)" }}
        className="rounded-lg overflow-auto w-full"
        >
            <Table className="w-full min-w-[1100px] overflow-hidden">
                <TableHeader>
                    <TableRow className="dark:bg-white">
                        {
                            tableHeader.map((item,index)=>{
                                return(
                                    <TableHead className="font-bold text-black" key={index}>
                                        {item}
                                    </TableHead>
                                )
                            })
                        }
                    </TableRow>
                </TableHeader>
                <TableBody className="bg-[#F9F9F9] dark:bg-[#0B1029]">
                    {
                        tableBody.map((tablerow,index)=>{
                            return(
                                <TableRow className="border-0" key={index}>
                                    {
                                        Object.entries(tablerow).map((cell)=>{
                                            return(
                                                <TableCell className="max-w-[280px]" key={cell[0]}>
                                                    {cell[1]}
                                                </TableCell>
                                            )
                                        })
                                    }
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
            <div className="flex py-2 justify-end">
                <Pagination
                    count={totalPages}
                    shape="rounded"
                    renderItem={(item) => (
                        <PaginationItem
                            {...item}
                            sx={{
                                fontSize:16,
                                fontWeight:"bold",
                                color:isDark&&"#fff",
                                '&.Mui-selected':{
                                    color:"#0C259C",
                                    background:isDark&&"#fff",
                                }
                            }}
                        />
                    )}
                />
            </div>
        </div>
    )
}
const PrevIcon = () =>{
    return(
        <div><Icon icon="weui:arrow-filled" /></div>
    )
}