import { Button } from "../../../../components/ui/button";
import shareimg from "../../../../assets/client/sidebar-logo.png"
const GeneralTab = () =>{
    return(
        <div className="flex flex-col gap-6">
            <h3 className="font-[600] text-lg">General</h3>
            
            <div className="flex items-center gap-6">
               <div className="w-[60px] h-[60px] rounded-full">
                  <img src={shareimg} className="w-full h-full rounded-full" />
               </div>
               <div>
                  <input type="file" id="img-upload" className="hidden" />
                  <label htmlFor="img-upload" className="capitalize cursor-pointer text-[12px] font-[600] text-[#1E43FA] dark:text-white">upload</label>
               </div>
               <span className="capitalize cursor-pointer text-[12px] font-[600] text-[#757575] dark:text-white">delete</span>
            </div>
            <div className="border-b-[1px] dark:border-[#242D5A]"></div>

            <form className="flex flex-col gap-4 max-w-[500px]">
                <div className="w-full flex flex-col gap-1">
                    <label className="capitalize text-sm">name</label>
                    <input 
                      type="text"
                      placeholder="Kemarq"
                      className="px-4 py-2 bg-inherit border dark:border-[#242D5A] outline-none rounded-md text-[#757575]"
                    />
                </div>
                <Button 
                   className="capitalize w-fit py-[12px] px-[45px] text-sm font-[600] dark:text-white"
                   style={{
                    background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                   }}
                >
                    save change
                </Button>
            </form>
        </div>
    )
}
export default GeneralTab;