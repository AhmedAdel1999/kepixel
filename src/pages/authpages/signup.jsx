import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { Card, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import SelectCountry from "../../components/forms/selectcountry";
import { ConfirmPasswordField,PasswordField } from "../../components/forms/passwordFields";
import { Icon } from "@iconify/react";
import { GoogleLogin } from "@react-oauth/google"
import { AuthContext } from "../../contexts/authcontext";
import { Link } from "react-router-dom";
import signupPersonalLogo from "../../assets/signup-personal.png"
import signupAgencyLogo from "../../assets/signup-agency.png"
import bgsignupPerson from "../../assets/bg-signup-personal.png"
import bgsignupAgency from "../../assets/bg-signup-agency.png"





const SignUpPage = () =>{

    const [nextStep,setNextStep] = useState(false)
    const {kingOFUser,setKindOFUser} = useContext(AuthContext)
    const {register,handleSubmit,formState,control,getValues,watch} = useForm({
        defaultValues:{ 
            email:"",name:"",phoneNumber:"",
            agencyName:"",brandName:"",country:"",
            password:"",confirmPassword:"",
        },
        mode:"onChange"
    })
    const {errors} = formState

    const onSubmit = (data) => {
        console.log(data);
    };

    let props = {
        kingOFUser,setKindOFUser,control,errors,setNextStep,
        register,handleSubmit,formState,getValues,onSubmit,watch
    }

 return nextStep?<FullSignUp {...props} /> : <PrimarySignUp {...props} /> 

}
export default SignUpPage


const PrimarySignUp = ({kingOFUser,setKindOFUser,watch,errors,register,
    setNextStep,handleSubmit,onSubmit}) =>{
   
    const emailValue = watch("email")
    const onSuccess = (response) =>{
        console.log(response)
    }
    const onError = (response) =>{
        console.log(response)
    }

    return(
        <div className="w-full">
            <div className="min-h-screen grid items-center grid-cols-12">
                <div 
                   className="md:h-full xs:col-span-12 md:col-span-6 "
                   style={{
                    backgroundImage:`url(${kingOFUser==="personal"?bgsignupPerson:bgsignupAgency})`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    backgroundPosition:"bottom"
                   }}
                >
                   <div className="px-[50px] pt-[100px] pb-[50px] flex flex-col">
                        <div className="flex flex-col gap-5 pb-6 border-b-2 border-[#ccc]">
                            <img 
                                alt="login-logo" 
                                src={kingOFUser==="personal"?signupPersonalLogo:signupAgencyLogo}
                                className="h-[44px] w-[250px] object-fill" 
                            />
                            <h1 className="font-bold text-[30px] text-white">
                               Welcome To Kpixel Join Now For Integration App
                            </h1>
                            <p className="text-white m-0">
                                Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam eu turpis molestie, dictum est a, mattis tellus. 
                                Sed dignissim, metus nec fringilla accumsan, risus sem 
                            </p>
                        </div>
                   </div>
                </div>
                <Card className="md:h-full border-0 shadow-none xs:col-span-12 md:col-span-6">
                    <CardContent className="px-[50px] pt-[100px] pb-[50px] flex flex-col gap-4">
                        <h1 className="font-bold text-[30px]">
                            <span>Create New Account as </span>
                            {
                                kingOFUser==="personal"?
                                <span className="text-[#1E43FA]">Personal</span>
                                :
                                <span className="text-[#00D5B8]">Agency</span>
                            }
                        </h1>
                        <p className="text-sm text-center mb-4">Sign up as</p>
                        <div 
                          className="bg-[#F5F7F9] py-2 px-4 rounded-[30px] self-center w-fit mb-4">
                            <Button 
                              onClick={()=>setKindOFUser("personal")}
                              className={`rounded-[30px] px-6 h-[auto] hover:bg-[none]
                              ${kingOFUser==="personal"?"bg-[#1E43FA] text-white":"bg-[intial] text-[#757575]"}`}
                            >
                               <Icon icon="mdi:person-circle-outline" fontSize={23} className="mr-1" />
                               <span>Personal</span>
                            </Button>
                            <Button 
                              onClick={()=>setKindOFUser("agency")}
                              className={`rounded-[30px] px-6 h-[auto] hover:bg-[none] 
                              ${kingOFUser==="agency"?"bg-[#00D5B8] text-white":"bg-[intial] text-[#757575]"}`}
                            >
                               <Icon icon="solar:buildings-2-outline" fontSize={23} className="mr-1" />
                               <span>Agency</span>
                            </Button>
                        </div>
                        <div className="mb-4 flex justify-center">
                           <GoogleLogin 
                                width={"300px"} 
                                logo_alignment="left" 
                                shape="pill" text="signup_with" 
                                locale="en" 
                                onSuccess={onSuccess}
                                onError={onError}
                            />
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="h-[2px] bg-[#7F7F7F] grow"></div>
                            <div>or</div>
                            <div className="h-[2px] bg-[#7F7F7F] grow"></div>
                        </div>
                        <form className="flex flex-col mb-2" onSubmit={handleSubmit(onSubmit)} noValidate>
                           <div className="flex flex-col gap-2">
                              <label className="font-bold text-sm">Email Address</label>
                              <input
                                 className="px-4 py-2 outline-none border-[1px] border-[#C1D5F6] rounded-[8px] " 
                                 type="email"
                                 placeholder="yourname@gmail.com"
                                 {...register("email", {
                                    required: "email is required",
                                  })}
                               />
                               {errors.email&&<span className="text-red-600">{errors.email.message}</span>}
                           </div>
                        </form>
                        <div className="flex flex-col gap-2">
                          <Button
                             disabled={!emailValue || errors.email}
                             onClick={()=>setNextStep(true)}
                             className="py-[22px] px-6 rounded-[8px]"
                             style={{ background: 'linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), #1E43FA' }}
                           >
                             Sign Up
                           </Button>
                           <div className="text-center">
                             <span className="mr-2">Dont have an account?</span>
                             <Link className="text-[#007AFF] underline" to={"/"}>Log in now</Link>
                           </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}



const FullSignUp = ({kingOFUser,errors,register,control,handleSubmit,onSubmit,watch,setNextStep}) =>{
       const passwordVal = watch("password") 
            
    return(
        <div className="w-full">
            <div className="min-h-screen grid items-center grid-cols-12 gap-8">
                <div 
                    className="md:h-full xs:col-span-12 md:col-span-6 "
                    style={{
                        backgroundImage:`url(${kingOFUser==="personal"?bgsignupPerson:bgsignupAgency})`,
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"cover",
                        backgroundPosition:"bottom"
                    }}
                    >
                    <div className="px-[50px] pt-[100px] pb-[50px] flex flex-col gap-5">
                        <div className="flex flex-col gap-5 pb-6 border-b-2 border-[#ccc]">
                            <img 
                                alt="login-logo" 
                                src={kingOFUser==="personal"?signupPersonalLogo:signupAgencyLogo}
                                className="h-[44px] w-[250px] object-fill" 
                            />
                            <h1 className="font-bold text-[30px] text-white">
                            Welcome To Kpixel Join Now For Integration App
                            </h1>
                            <p className="text-white m-0">
                                Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam eu turpis molestie, dictum est a, mattis tellus. 
                                Sed dignissim, metus nec fringilla accumsan, risus sem 
                            </p>
                        </div>
                    </div>
                </div>
                <Card className="md:h-full shadow-none border-0 xs:col-span-12 md:col-span-6">
                    <CardContent className="flex flex-col gap-4 px-[50px] pt-[100px] pb-[50px]">
                        <Link 
                            className={`${kingOFUser==="personal"?"text-[#1E43FA]":"text-[#00D5B8]"} font-[500] flex items-center gap-2`} 
                            to={"/signup"}
                            onClick={()=>setNextStep(false)}
                        > 
                          <Icon icon="weui:back-outlined" fontSize={20} />
                          <span>Back to Select the account type</span>
                        </Link>
                        <h1 className="font-[500] text-[30px]">
                            <span>Create New Account as </span>
                            {
                                kingOFUser==="personal"?
                                <span className="text-[#1E43FA]">Personal</span>
                                :
                                <span className="text-[#00D5B8]">Agency</span>
                            }
                        </h1>
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
                           <div className="flex flex-col gap-2">
                                    <label className="font-bold text-sm">Name*</label>
                                    <input
                                        className="px-4 py-2 outline-none border-[1px] border-[#C1D5F6] rounded-[8px] " 
                                        type="text"
                                        placeholder="Your Full name"
                                        {...register("name", {
                                            required: "name is required",
                                        })}
                                    />
                                    {errors.name&&<span className="text-red-600">{errors.name.message}</span>}
                            </div>
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                               <div className="flex flex-col gap-2 grow">
                                    <label className="font-bold text-sm">Email Address*</label>
                                    <input
                                        className="px-4 py-2 outline-none border-[1px] border-[#C1D5F6] rounded-[8px] " 
                                        type="email"
                                        placeholder="yourname@gmail.com"
                                        {...register("email", {
                                            required: "email is required",
                                        })}
                                    />
                                    {errors.email&&<span className="text-red-600">{errors.email.message}</span>}
                                 </div>
                                 <div className="flex flex-col gap-2 grow">
                                        <label className="font-bold text-sm">Phone Number*</label>
                                        <input
                                            className="px-4 py-2 outline-none border-[1px] border-[#C1D5F6] rounded-[8px] " 
                                            type="text"
                                            placeholder="EX (+20 ) 01111572677"
                                            {...register("phoneNumber", {
                                                required: "number is required",
                                            })}
                                        />
                                        {errors.phoneNumber&&<span className="text-red-600">{errors.phoneNumber.message}</span>}
                                  </div>
                           </div>
                           {
                            kingOFUser==="agency"&&
                            <div className="flex gap-x-4 gap-y-2">
                                <div className="flex flex-col gap-2 grow w-full ">
                                    <label className="font-bold text-sm">Agency Name*</label>
                                    <input
                                        className="px-4 py-2 outline-none border-[1px] border-[#C1D5F6] rounded-[8px] " 
                                        type="text"
                                        {...register("agencyName", {
                                            required: "agency name is required",
                                        })}
                                    />
                                    {errors.agencyName&&<span className="text-red-600">{errors.agencyName.message}</span>}
                                </div>
                                <div className="flex flex-col gap-2 grow w-full">
                                    <SelectCountry control={control} />
                                    {errors.country&&<span className="text-red-600">{errors.country.message}</span>}
                                </div>
                            </div>
                           }
                           <div className="flex flex-wrap gap-x-4 gap-y-2">
                              <div className="flex flex-col gap-2 grow">
                                <label className="font-bold text-sm">Password*</label>
                                <PasswordField control={control} />
                                {errors.password&&<span className="text-red-600">{errors.password.message}</span>}
                              </div>
                              <div className="flex flex-col gap-2 grow">
                                <label className="font-bold text-sm">Confirm Password*</label>
                                <ConfirmPasswordField
                                    control={control} 
                                    passwordValue={passwordVal}
                                 />
                                {errors.confirmPassword&&<span className="text-red-600">{errors.confirmPassword.message}</span>}
                              </div>
                           </div>
                           <div className="flex flex-col gap-2">
                                <Button
                                    className="py-[22px] px-6 rounded-[8px]"
                                    style={{ background: 'linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), #1E43FA' }}
                                >
                                    Sign Up
                                </Button>
                                <div className="text-center">
                                    <span className="mr-2">Dont have an account?</span>
                                    <Link className="text-[#007AFF] underline" to={"/"}>Log in now</Link>
                                </div>
                           </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
