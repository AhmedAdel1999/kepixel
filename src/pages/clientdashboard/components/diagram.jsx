import React, { useEffect,useRef } from 'react';
import Xarrow,{useXarrow} from 'react-xarrows';
import { Icon } from '@iconify/react';
import middleLogo from "../../../assets/client/middle-logo.png"
import facebookLogo from "../../../assets/client/facebook-logo.png"
import metaLogo from "../../../assets/client/meta-logo.png"
import zohoLogo from "../../../assets/client/zoho-crm-logo.png"
import hubspotLogo from "../../../assets/client/hubSpot-Logo.png"
import snapchatLogo from "../../../assets/client/snapchat-logo.png"
import googleanalyticLogo from "../../../assets/client/google-analytic-logo.png"
import googlemanagerLogo from "../../../assets/client/google-tag-manager-logo.png"

const Diagram = () => {


  const container = useRef(null)
  
  const updateXarrow = useXarrow()

  const updateArrows = () => {
    container.current.dispatchEvent(new Event('resize'));
    updateXarrow()
  };

  useEffect(() => {
    const element = container.current;

    if (element) { 
      const resizeObserver = new ResizeObserver(updateArrows);

      resizeObserver.observe(element);

      // Cleanup function to remove the observer when the component unmounts
      return () => {
        resizeObserver.unobserve(element);
      };
    }
  }, []);

  
  return (
    <div className='w-full flex justify-between py-4' ref={container}>
        <div className="flex flex-col gap-8">

          <div 
            className='flex items-center gap-4 border border-[#16F2D1] rounded-lg px-3 py-1 translate-x-[12%]'
            id='leftItem-1'
          >
            <div className="flex items-center gap-2">
                <img src={googlemanagerLogo} alt="google-tag-manager-logo" />
                <span>Google Tag Manager</span>
            </div>
            <p className='flex items-center text-[#16F2D1]'>
              <Icon icon="octicon:dot-fill-16" fontSize={16} />
              <span className='font-bold text-sm'>Active</span>
            </p>
          </div>

          <div 
            className='flex items-center gap-4 border border-[#EA4335] rounded-lg px-3 py-1'
            id='leftItem-2'
          >
            <div className="grow flex items-center gap-2">
                <img src={hubspotLogo} alt="google-tag-manager-logo" />
                <span>HubSpot</span>
            </div>
            <div className='flex flex-col gap-[4px]'>
              <p className='flex items-center text-[#EA4335]'>
                <Icon icon="octicon:dot-fill-16" fontSize={16} />
                <span className='font-bold text-sm'>Disactive</span>
              </p>
              <p className='flex items-center text-[#F0993E]'>
                <Icon icon="octicon:dot-fill-16" fontSize={16} />
                <span className='font-bold text-sm'>Under Review</span>
              </p>
            </div>
          </div>

          <div 
            className='flex items-center gap-4 border border-[#16F2D1] rounded-lg px-3 py-1 translate-x-[10%]'
            id='leftItem-3'
          >
            <div className="grow flex items-center gap-2">
                <img src={zohoLogo} alt="google-tag-manager-logo" />
                <span>Zoho CRM</span>
            </div>
            <p className='flex items-center text-[#16F2D1]'>
              <Icon icon="octicon:dot-fill-16" fontSize={16} />
              <span className='font-bold text-sm'>Active</span>
            </p>
          </div>

        </div>
        <div className="self-stretch flex flex-col pt-[60px]">
          <div id="centerItem">
              <img src={middleLogo} alt="middle-logo" />
          </div>
        </div>
        <div className="flex flex-col gap-12">

          <div 
              className='flex items-center gap-4 border border-[#EA4335] rounded-lg px-3 py-1 -translate-x-[10%]'
              id='rigthItem-1'
            >
              <div className="flex items-center gap-2">
                  <img src={googleanalyticLogo} alt="google-tag-manager-logo" />
                  <span>Google Analytice</span>
              </div>
              <p className='flex items-center text-[#EA4335]'>
                <Icon icon="octicon:dot-fill-16" fontSize={16} />
                <span className='font-bold text-sm'>Disactive</span>
              </p>
          </div>

          <div 
              className='flex items-center gap-4 border border-[#F0993E] rounded-lg px-3 py-1'
              id='rigthItem-2'
            >
              <div className="grow flex items-center gap-2">
                  <img src={metaLogo} alt="google-tag-manager-logo" />
                  <span>Meta Ads</span>
              </div>
              <p className='flex items-center text-[#F0993E]'>
                <Icon icon="octicon:dot-fill-16" fontSize={16} />
                <span className='font-bold text-sm'>Under Review</span>
              </p>
          </div>

          <div 
              className='flex items-center gap-4 border border-[#16F2D1] rounded-lg px-3 py-1 -translate-x-[15%]'
              id='rigthItem-3'
            >
              <div className="grow flex items-center gap-2">
                  <img src={snapchatLogo} alt="google-tag-manager-logo" />
                  <span>Snapchat Ads</span>
              </div>
              <p className='flex items-center text-[#16F2D1]'>
                <Icon icon="octicon:dot-fill-16" fontSize={16} />
                <span className='font-bold text-sm'>Active</span>
              </p>
          </div>

          <div 
              className='flex items-center gap-4 border border-[#F0993E] rounded-lg px-3 py-1 -translate-x-[25%]'
              id='rigthItem-4'
            >
              <div className="grow flex items-center gap-2">
                  <img src={facebookLogo} alt="google-tag-manager-logo" />
                  <span>Meta Ads</span>
              </div>
              <p className='flex items-center text-[#F0993E]'>
                <Icon icon="octicon:dot-fill-16" fontSize={16} />
                <span className='font-bold text-sm'>Under Review</span>
              </p>
          </div>

        </div>

        <Xarrow
          start="leftItem-1"
          end="centerItem"
          color="#16F2D1"
          strokeWidth={1}
          curveness={0.9333333}
          showTail
          tailShape={{
            svgElem:<path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z" transform="rotate(180) translate(-1.2,-1)"/>,
            offsetForward:0.25,
          }}
        />

        <Xarrow
          start="leftItem-2"
          end="centerItem"
          color="#EA4335"
          strokeWidth={1}
          path='grid'
          gridBreak='50%'
          showTail
          tailShape={{
            svgElem:<path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z" transform="rotate(180) translate(-1.2,-1)"/>,
            offsetForward:0.25,
          }}
        />

        <Xarrow
          start="leftItem-2"
          end="centerItem"
          color="#F0993E"
          strokeWidth={1}
          path='grid'
          gridBreak='10%'
        />

        <Xarrow
          start="leftItem-3"
          end="centerItem"
          color="#16F2D1"
          strokeWidth={1}
          curveness={0.95}
          showTail
          tailShape={{
            svgElem:<path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z" transform="rotate(180) translate(-1.2,-1)"/>,
            offsetForward:0.25,
          }}
        />

        <Xarrow
          start="centerItem"
          end="rigthItem-1"
          color="#EA4335"
          strokeWidth={1}
          curveness={0.95}
          showTail
          tailShape={{
            svgElem:<path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z" transform="rotate(180) translate(-1.2,-1)"/>,
            offsetForward:0.25,
          }}
        />

        <Xarrow
          start="centerItem"
          end="rigthItem-2"
          color="#F0993E"
          strokeWidth={1}
          path='straight'
        />

        <Xarrow
          start="centerItem"
          end="rigthItem-3"
          color="#16F2D1"
          strokeWidth={1}
          curveness={0.95}
        />

        <Xarrow
          start="centerItem"
          end="rigthItem-4"
          color="#F0993E"
          strokeWidth={1}
          curveness={0.95}
        />
    </div>
  );
};

export default Diagram;

const CustomeEdge = () =>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path fill="#1219d3" d="M13.5 15.808L9.692 12L13.5 8.192z" />
    </svg>
  )
}
