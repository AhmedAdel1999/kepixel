import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import metaimg from "../../../assets/client/meta-img.png"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreateDestinationPage = () =>{

    const navigate = useNavigate()
    const { handleSubmit,register,formState,watch } = useForm({
        defaultValues:{title:""},
        mode:"onChange"
    })
    const { errors } = formState
    const titleVal = watch("title")

    const onSubmit = (data) =>{
        navigate("/dashboard/destinationdetails")
    }
    return(
        <div className="flex flex-col gap-4">
            <Card className="dark:border-none dark:bg-[#171C32]">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <img 
                            className="card-logo"
                            src={metaimg} 
                        />
                        <div>
                            <CardTitle className="mb-1 text-[#0E1B26)] text-[16px] font-[500]">
                            Facebook Custom Audiences
                            </CardTitle>
                            <CardDescription className="text-sm dark:text-[#cfcfcf]">
                                Empower your marketing team to run highly granular
                                retargeting and lookalike campaigns on Facebook
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
            </Card>
            
            <Card className="dark:border-none dark:bg-[#171C32]">
                <CardHeader>
                    <CardTitle className="text-[#0E1B26)] text-[16px] font-[600]">New Destination</CardTitle>
                    <CardDescription className="text-sm dark:text-[#cfcfcf]">
                        You can invite multiple collegues at once,
                        using a comma to separate email addresses.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm dark:text-[#cfcfcf]">Title</label>
                            <input
                                className="px-4 py-1.5 outline-none bg-inherit border-[1px] border-[#C1D5F6] rounded-[8px] " 
                                type="text"
                                placeholder="Give your Source a name"
                                {...register("title", {
                                required: "title is required",
                                })}
                            />
                            {errors.title&&<span className="text-red-600">{errors.title.message}</span>}
                        </div>
                        <Button 
                            disabled={!titleVal || errors.title}
                            className="w-fit text-sm font-[600] dark:text-[#ECF5FF]"
                            style={{
                                background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                            }}
                        >
                            Creat Destination
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default CreateDestinationPage;