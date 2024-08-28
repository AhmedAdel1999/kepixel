import { Button } from "../../../../components/ui/button";
import { Icon } from "@iconify/react";

const SyncTab = () =>{
    return(
        <div className="pt-6 flex flex-col gap-4">
            <Icon icon="mingcute:new-folder-line" className="self-center" color="#757575" fontSize={95} />
            <h3 className="self-center text-lg text-[#0E1B26] font-bold">Start by creating a new sync</h3>
            <p className="self-center text-sm text-[#757575]">Sync your data to a destination.</p>
            <Button
                className="!m-0 w-fit self-center"
                style={{
                    background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                }}
            >
                Create a New Sync
            </Button>
        </div>
    )
}
export default SyncTab;