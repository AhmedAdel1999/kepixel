import { useState } from "react"
import { Icon } from "@iconify/react"
import logo from "../../../../assets/asset 1.png"

const OverviewTab = () =>{

    const clientId = `wk_2keOwyfXdkVddHPtqegg0k9NXQN`
    const gtmCode =
    `<!-- Google Tag Manager -->
    <script>(function(w,d,s,1,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(), event:'gtm.js'});var f=d.getElementsByTagName(s) [0],
    j=d.createElement(s),dl=l!='dataLayer'?'al='+l:'';j.async=true;j.src=
    https://www.googletagmanager.com/gtm.js?id= '+i+dl;f.parentNode.insertBefore (j,f);
    }) (window, document, 'script','dataLayer','GTM-5GR4LKQF');</script>
    <!-- End Google Tag Manager -->`
    const bodyCode =
    `<!-- Google Tag Manager (noscript) -->
    <noscript><iframe src=" https://www.googletagmanager.com/ns.html?id=GTM-5GR4LKQF "
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`

    const [copied,setCopied] = useState(false)
    const [currentCopied,setCurrentCopied] = useState("")

    const handleCopy = (text) =>{
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setCurrentCopied(text)
        });
    }
    return(
        <div className="flex flex-col pt-6 gap-8">
            <div className="flex flex-col gap-1">
                <h3 className="font-[500] capitalize">Container ID</h3>
                <div className="relative max-w-[570px] text-sm rounded-md border-2 px-2 py-4">
                    <span className="text-[#757575] dark:text-[#cfcfcf]">{clientId}</span>
                    <div className="absolute top-2 right-2">
                        {
                            (copied && currentCopied===clientId)?
                            <div className="flex items-center gap-2">
                                <Icon 
                                    icon="icon-park-outline:done-all" fontSize={20}
                                    className="cursor-pointer text-[#757575] dark:text-[#cfcfcf]"
                                />
                                <span>copied</span>
                            </div>
                            :
                            <div className="flex items-center gap-2">
                                <Icon 
                                    icon="bi:copy" fontSize={20}
                                    className="cursor-pointer text-[#757575] dark:text-[#cfcfcf]"
                                    onClick={()=>handleCopy(clientId)}
                                />
                                <span>copy</span>
                            </div>
                        }
                       
                    </div>
                </div>
            </div>
            <div>
                <h3 className="font-[500] text-sm capitalize">Install GTM Code</h3>
                <p className="text-sm text-[#757575] dark:text-[#cfcfcf] mb-1.5">
                    Copy the code below and paste it into every page of your website.
                </p>
                <h4 className="text-sm mb-1.5">
                    {`1. Paste this code as high in the <head> of the page as possible:`}
                </h4>
                <div className="relative max-w-[570px] rounded-md border-2 px-2 py-4">
                    <span className="text-[#757575] dark:text-[#cfcfcf]">{gtmCode}</span>
                    <div className="absolute top-2 right-2">
                        {
                            (copied && currentCopied===gtmCode)?
                            <div className="flex items-center gap-2">
                                <Icon 
                                    icon="icon-park-outline:done-all" fontSize={20}
                                    className="cursor-pointer text-[#757575] dark:text-[#cfcfcf]"
                                />
                                <span>copied</span>
                            </div>
                            :
                            <div className="flex items-center gap-2">
                                <Icon 
                                    icon="bi:copy" fontSize={20}
                                    className="cursor-pointer text-[#757575] dark:text-[#cfcfcf]"
                                    onClick={()=>handleCopy(clientId)}
                                />
                                <span>copy</span>
                            </div>
                        }
                       
                    </div>
                </div>
                <h4 className="text-sm my-1.5">
                    {`2. Paste this code immediately after the opening <body> tag:`}
                </h4>
                <div className="relative max-w-[570px] rounded-md border-2 px-2 py-4">
                    <span className="text-[#757575] dark:text-[#cfcfcf]">{bodyCode}</span>
                    <div className="absolute top-2 right-2">
                        {
                            (copied && currentCopied===bodyCode)?
                            <div className="flex items-center gap-2">
                                <Icon 
                                    icon="icon-park-outline:done-all" fontSize={20}
                                    className="cursor-pointer text-[#757575] dark:text-[#cfcfcf]"
                                />
                                <span>copied</span>
                            </div>
                            :
                            <div className="flex items-center gap-2">
                                <Icon 
                                    icon="bi:copy" fontSize={20}
                                    className="cursor-pointer text-[#757575] dark:text-[#cfcfcf]"
                                    onClick={()=>handleCopy(clientId)}
                                />
                                <span>copy</span>
                            </div>
                        }
                       
                    </div>
                </div>
                <h4 className="text-sm mt-1.5 mb-1">3. Test</h4>
                <div className="max-w-[570px] px-4 py-2 rounded-md border flex items-center">
                    <input 
                     placeholder="Url"
                     className="border-none outline-none grow bg-inherit"
                     type="text"
                    />
                    <span className="capitalize cursor-pointer text-[#1E43FA]">test</span>
                </div>
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
        </div>
    )
}
export default OverviewTab;