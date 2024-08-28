import { useForm } from "react-hook-form";
import { Card, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import {PasswordField} from "../../components/forms/passwordFields";
import { GoogleLogin } from "@react-oauth/google"
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import LogoImg from "../../assets/login-logo.png";
import bglogin from "../../assets/bg-login.png";






const LoginPage = () =>{

    const navigate = useNavigate()

    const {register,control,handleSubmit,formState} = useForm({
        defaultValues:{ email:"",password:""},
        mode:"onSubmit"
    })
    const {errors} = formState

    const onSuccess = (response) =>{
        const userObject = jwtDecode(response.credential);
        console.log(userObject);
        navigate("/dashboard")
    }
    const onError = (response) =>{
        console.log(response)
    }

    const onSubmit = (data) => {
        console.log(data);
        navigate("/dashboard")
    };

    return(
        <div className="w-full">
            <div className="min-h-screen grid items-center grid-cols-12">
                <Card className="border-0 shadow-none md:h-full xs:col-span-12 md:col-span-6">
                    <CardContent className="px-[50px] pt-[100px] pb-[50px] flex flex-col gap-y-6">
                        <h3 className="font-bold text-[30px] m-0">Nice to see you again</h3>
                        
                        <GoogleLogin 
                            size="large"
                            logo_alignment="left" 
                            text="signin_with" 
                            locale="en" 
                            onSuccess={onSuccess}
                            onError={onError}
                        />
                        <div className="flex items-center gap-5">
                            <div className="h-[2px] bg-[#7F7F7F] grow"></div>
                            <div>or</div>
                            <div className="h-[2px] bg-[#7F7F7F] grow"></div>
                        </div>
                        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div className="flex flex-col gap-2 mb-4">
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
                            <div className="flex flex-col gap-2 mb-1">
                                <label className="font-bold text-sm">Password</label>
                                <PasswordField control={control} />
                                {errors.password&&<span className="text-red-600">{errors.password.message}</span>}
                            </div>
                            <Link className="self-end text-[#007AFF] mb-4" to={"#"}>Forgot Password?</Link>
                            <Button
                                className="mb-2 py-[22px] text-lg px-6 rounded-[8px]"
                                style={{ background: 'linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), #1E43FA' }}
                            >
                            Log In
                            </Button>
                            <div className="text-center">
                                <span className="mr-2">Dont have an account?</span>
                                <Link className="text-[#007AFF] underline" to={"/signup"}>Sign up now</Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
                <div 
                   className="md:h-full xs:col-span-12 md:col-span-6 "
                   style={{
                    backgroundImage:`url(${bglogin})`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    backgroundPosition:"bottom"
                   }}
                >
                   <div className="px-[50px] pt-[100px] pb-[50px] flex flex-col gap-5">
                        <div className="flex flex-col gap-5 pb-6 border-b-2 border-[#ccc]">
                            <img 
                                alt="login-logo" 
                                src={LogoImg}
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
            </div>
        </div>
    )
}
export default LoginPage