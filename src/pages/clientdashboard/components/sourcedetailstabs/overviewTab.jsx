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
                <h3 className="font-bold capitalize">Container ID</h3>
                <div className="relative max-w-[570px] text-[#CFCFCF] rounded-md border-2 px-2 py-4">
                    <span className="text-[#757575]">{clientId}</span>
                    <div className="absolute top-2 right-2">
                        {
                            (copied && currentCopied===clientId)?
                            <Icon icon="icon-park-outline:done-all" color="#0f5714" fontSize={25} />
                            :
                            <Icon 
                                icon="bi:copy" color="#000"
                                className="cursor-pointer" fontSize={25}
                                onClick={()=>handleCopy(clientId)}
                            />
                        }
                       
                    </div>
                </div>
            </div>
            <div>
                <h3 className="font-bold capitalize">Install GTM Code</h3>
                <p className="text-[#757575] mb-1.5">Copy the code below and paste it into every page of your website.</p>
                <h4 className="font-bold text-sm mb-1.5">{`1. Paste this code as high in the <head> of the page as possible:`}</h4>
                <div className="relative max-w-[570px] text-[#CFCFCF] rounded-md border-2 px-2 py-4">
                    <span className="text-[#757575]">{gtmCode}</span>
                    <div className="absolute top-2 right-2">
                        {
                            (copied && currentCopied===gtmCode)?
                            <Icon icon="icon-park-outline:done-all" color="#0f5714" fontSize={25} />
                            :
                            <Icon 
                                icon="bi:copy" color="#000"
                                className="cursor-pointer" fontSize={25}
                                onClick={()=>handleCopy(gtmCode)}
                            />
                        }
                       
                    </div>
                </div>
                <h4 className="font-bold text-sm my-1.5">{`2. Paste this code immediately after the opening <body> tag:`}</h4>
                <div className="relative max-w-[570px] text-[#CFCFCF] rounded-md border-2 px-2 py-4">
                    <span className="text-[#757575]">{bodyCode}</span>
                    <div className="absolute top-2 right-2">
                        {
                            (copied && currentCopied===bodyCode)?
                            <Icon icon="icon-park-outline:done-all" color="#0f5714" fontSize={25} />
                            :
                            <Icon 
                                icon="bi:copy" color="#000"
                                className="cursor-pointer" fontSize={25}
                                onClick={()=>handleCopy(bodyCode)}
                            />
                        }
                       
                    </div>
                </div>
                <h4 className="font-bold text-sm mt-1.5 mb-1">3. Test</h4>
                <div className="max-w-[570px] px-4 py-2 rounded-md border flex items-center">
                    <input 
                     placeholder="Url"
                     className="border-none outline-none grow"
                     type="text"
                    />
                    <span className="capitalize cursor-pointer text-[#1E43FA]">test</span>
                </div>
            </div>
            <div>
                <h3 className="capitalize font-bold mb-2">About</h3>
                <div className="flex items-center gap-2">
                    <img 
                      alt="about-logo"
                      className="w-[35px] h-[35px] rounded-[50%]"
                      src={logo}
                    />
                    <p className="m-0 text-[#757575] text-sm">Created by Mohamed Ashraf, 2 minutes ago</p>
                </div>
            </div>
        </div>
    )
}
export default OverviewTab;