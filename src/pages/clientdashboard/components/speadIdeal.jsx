import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import { Popover,PopoverContent,PopoverTrigger } from '../../../components/ui/popover'
import { Icon } from '@iconify/react'
import { useState } from 'react'

const SpeadDialComponent = () =>{
    const [open,setOpen] = useState(true)
    return (
        <SpeedDial
            open={open}
            onClick={()=>setOpen((prev)=>!prev)}
            ariaLabel='Navigation speed dial'
            sx={{ position: 'fixed', bottom: 100, right: 16 }}
            direction="up"
            icon={<SpeedDialIcon />}
        >
            <SpeedDialAction
                sx={{width:"auto",height:"auto",borderRadius:"15px"}}
                icon={
                    <div className='px-2 py-0.5 flex items-center gap-1'>
                        <Icon icon="ri:whatsapp-fill" color='#1E43FA' fontSize={23} />
                        <span className='capitalize font-bold'>whatsapp</span>
                    </div>
                } 
            />
            <SpeedDialAction
                sx={{width:"auto",height:"auto",borderRadius:"15px"}}
                icon={
                    <Popover>
                        <PopoverTrigger asChild>
                            <div className='px-2 py-0.5 mr-auto flex items-center gap-1'>
                                <Icon icon="ic:round-support-agent"  color='#1E43FA' fontSize={23} />
                                <span className='capitalize font-bold'>agent</span>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent
                            onClick={(e)=>e.stopPropagation()}
                            className="w-[320px] shadow-none border-none p-0 flex flex-col gap-4"
                            avoidCollisions sideOffset={40} 
                            alignOffset={20} side="left" align="bottom"
                        >
                            <div className='flex flex-col gap-2 p-4 max-h-[300px] overflow-y-auto rounded-md shadow-[0_0_7px_#ddd]'>
                                <p className='font-bold text-sm'>Hi there,</p>
                                <p className='font-bold text-sm'>Thanking for checking our pricing</p>
                                <p className='font-bold text-sm'>Did you find the answer you were looking for?</p>
                            </div>
                            <div className='p-3 rounded-md shadow-[0_0_7px_#ddd] flex items-center gap-4'>
                                <textarea 
                                   placeholder='Message'
                                   className="grow h-[30px] focus:outline-none focus:ring-0 focus:border-none border-none resize-none overflow-y-hidden"
                                />
                                <div className='flex gap-2'>
                                   <Icon icon="fluent:emoji-multiple-20-filled" fontSize={20} />
                                   <Icon icon="solar:link-linear" fontSize={20} />
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                } 
            />
        </SpeedDial>
    )
}
export default SpeadDialComponent