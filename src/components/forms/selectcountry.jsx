import React from "react"
import { countries } from "../../constants/countries"
import { Controller } from "react-hook-form"
import { Select,SelectTrigger,SelectContent,SelectGroup,SelectItem,SelectValue } from "../ui/select"

const SelectCountry = ({control}) =>{
    return(
        <React.Fragment>
            <label className="font-bold text-sm">Country*</label>
            <Controller 
              rules={{
                required:{value:true,message:"country is required"}
              }}
              control={control}
              name="country"
              render={({
                field: { onChange, onBlur, value, name, ref },
              }) => {
                return (
                <Select
                 value={value}
                 name={name}
                 onValueChange={onChange}
                >
                    <SelectTrigger className="border-[1px] focus:ring-0 focus:border-transparent">
                        <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {
                                countries.map((country,index)=>{
                                    return(
                                       <SelectItem className="capitalize" key={index} value={country}>
                                           {country}
                                        </SelectItem>    
                                    )
                                })
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
                );
              }}
            />
            
        </React.Fragment>
    )
}
export default SelectCountry