import { Button } from "../../../../components/ui/button";
const SettingsTab = () =>{
    return(
        <div className="pt-6 flex flex-col gap-8">
            <div className="flex flex-col gap-1 max-w-[770px]">
              <label className='capitalize font-[500] text-sm text-[#0E1B26] dark:text-white'>
                title
              </label>
              <input 
               type='text'
               placeholder="Google Tag Manager Browser Template"
               className='rounded-md py-2 px-4 border dark:border-[#242D5A] outline-none bg-inherit'
              />
            </div>

            <Button
                className="!m-0 w-fit capitalize text-sm text-[#ECF5FF] font-[600]"
                style={{
                    background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                }}
            >
                save changes
            </Button>

            <div className='max-w-[770px] h-[1px] bg-[#C0DCFF]'></div>

            <div>
                <h4 className="font-[00] text-sm">Danger zone</h4>
                <p className="text-[#757575] dark:text-[#cfcfcf] text-sm">
                    Be careful, deleting this destination will prevent future
                    syncronization of data coming from your sources.
                </p>
            </div>

            <Button 
                className="bg-white dark:bg-inherit capitalize w-fit hover:bg-white font-[600] text-sm
                 text-[#FF0004] dark:text-[#FF5457] border border-[#FF0004] dark:border-[#FF5457]"
                >
                delete destination
            </Button>
        </div>
    )
}
export default SettingsTab;