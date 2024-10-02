import React from 'react';
import Xarrow from 'react-xarrows';
import { Icon } from '@iconify/react';
import { Button } from '../../../../components/ui/button';
import middlelogo from "../../../../assets/client/middle-logo.png"
import metalogo from "../../../../assets/client/meta-logo.png"
import logo from "../../../../assets/asset 1.png"


const SetupTab = ({status}) =>{
    
    return(
        <div className="flex flex-col pt-6 gap-8">
            <div className='flex flex-col gap-1'>
              <label className='capitalize font-[500] text-sm text-[#0E1B26] dark:text-white'>
                pixel id
              </label>
              <input 
               type='text'
               placeholder='1588537814970996'
               className='rounded-md bg-inherit py-2 px-4 border outline-none max-w-[700px]'
              />
            </div>
            {
              status==="enabled"&&
              <Button 
                  disabled={status!=="enabled"}
                  className="bg-white dark:bg-inherit w-fit hover:bg-white font-[500] text-sm 
                  text-[#1E43FA] dark:text-white border border-[#1E43FA] dark:border-white">
                  Request Edit
               </Button>
            }
            <div className='max-w-[800px] h-[1px] bg-[#C0DCFF]'></div>

            <div>
               <h3 className="capitalize font-[500] text-sm mb-1">Connect your Account</h3>
               <p className="mb-3 text-sm dark:text-[#cfcfcf]">
                    Click on the button to turn on the connection and
                    check the correct configuration of your destination.
               </p>
               <div className='flex items-center gap-32 mb-6'>
                  <div id='leftside'>
                    <img 
                       alt='middle-log'
                       src={middlelogo} 
                       className='w-[65px] h-[65px]'
                    />
                  </div>
                  <div id='rigthside' 
                  className={`
                    flex items-center gap-2 py-1.5 px-5 border rounded-md
                    ${status==="not_connect"?"border-[#EA5935]":status==="under_review"?
                      "border-[#F0993E]":"border-[#00AC98]"
                     }
                  `}>
                    <img alt='meta-logo' src={metalogo} />
                    <span className='text-sm font-[500]'>Facebook Custom Audiences
                    </span>
                  </div>
                  <Xarrow
                        start="leftside"
                        end="rigthside"
                        color={`${status==="not_connect"?"#EA5935":status==="under_review"?"#F0993E":"#00AC98"}`}
                        strokeWidth={1}
                        curveness={0}
                        labels={{middle:
                          <span className={`capitalize
                            ${status==="not_connect"?"text-[#EA5935]":status==="under_review"?
                              "text-[#F0993E]":"text-[#00AC98]"
                             }
                          `}>
                          {
                              status==="not_connect"?
                              "not connect":
                              status==="under_review"?
                              "under review":"enabled"
                          }
                      </span>
                        }}
                        showTail
                        tailShape={{
                            svgElem:<path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z" transform="rotate(180) translate(-1.2,-1)"/>,
                            offsetForward:0.25,
                        }}
                    />
               </div>
               {
                status==="enabled"&&
                    <Button
                      className="flex gap-1 dark:text-white"
                      style={{
                          background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                      }}
                    >
                      <Icon icon="material-symbols:link" fontSize={20} />
                      <span className='text-sm font-[500]'>Re-Connect</span>
                    </Button>
               }
            </div>
            
            <div className='max-w-[800px] h-[1px] bg-[#C0DCFF]'></div>
            <div>
               <h3 className="capitalize font-[500] text-sm mb-1">
                   Doubting Your Connection?
                </h3>
               <p className="mb-3 text-sm dark:text-[#cfcfcf]">
                    Click on the button to turn on the connection and
                    check the correct configuration of your destination.
               </p>
               <Button 
                  disabled={status!=="enabled"}
                  className="bg-white dark:bg-inherit hover:bg-white font-bold text-sm 
                  text-[#1E43FA] dark:text-white border border-[#1E43FA] dark:border-white">
                  Test Connection
               </Button>
            </div>
            <div>
                <h3 className="capitalize font-[500] text-sm mb-2">About</h3>
                <div className="flex items-center gap-2">
                    <img 
                      alt="about-logo"
                      className="w-[35px] h-[35px] rounded-[50%]"
                      src={logo}
                    />
                    <p className="m-0 text-[#757575] dark:text-[#cfcfcf] text-sm">
                      Created by Mohamed Ashraf, 2 minutes ago
                    </p>
                </div>
            </div>
            {
              status==="not_connect"&&
              <React.Fragment>
                <div className='max-w-[800px] h-[1px] bg-[#C0DCFF]'></div>
                <Button
                  className="capitalize !m-0 w-fit text-sm font-[600] dark:text-white"
                  style={{
                    background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                  }}
                >
                  application review
                </Button>
              </React.Fragment>
            }
        </div>
    )
}
export default SetupTab;