import { useTheme } from '../../../contexts/themecontext';
import Joyride from 'react-joyride';

const ONBording = () =>{
     const {theme} = useTheme()
     const isDark = theme === "dark"
    const steps = [
        {
          target: '.my-first-step',
          placement:"right",
          title:<h3 className={`font-bold text-left ${isDark&&"text-white"}`}>Client name</h3>,
          content: 
            <p className={`text-left text-sm ${isDark&&"text-[#cfcfcf]"}`}>
                Forem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc vulputate
                libero et velit interdum, ac aliquet
            </p>,
        },
        {
            target: '.my-second-step',
            placement:"right",
            title:<h3 className={`font-bold text-left ${isDark&&"text-white"}`}>Source</h3>,
            content: 
              <p className={`text-left text-sm ${isDark&&"text-[#cfcfcf]"}`}>
                A source, whether it's a website, server library,
                mobile SDK, or cloud app, sends data to Journify.
                Add sources to gather insights into your customers
                and product usage. Create a source for each website
                or app you wish to track.
              </p>,
        },
        {
            target: '.my-third-step',
            placement:"right",
            title:<h3 className={`font-bold text-left ${isDark&&"text-white"}`}>Destination</h3>,
            content: 
              <p className={`text-left text-sm ${isDark&&"text-[#cfcfcf]"}`}>
                A source, whether it's a website, server library,
                mobile SDK, or cloud app, sends data to Journify.
                Add sources to gather insights into your customers and product usage.
                Create a source for each website or app you wish to track.
              </p>,
        },
        {
            target: '.my-fourth-step',
            placement:"left",
            title:<h3 className={`font-bold text-left ${isDark&&"text-white"}`}>Call US</h3>,
            content: 
              <p className={`text-left text-sm ${isDark&&"text-[#cfcfcf]"}`}>
                A source, whether it's a website, server library,
                mobile SDK, or cloud app, sends data to Journify.
                Add sources to gather insights into your customers
                and product usage. Create a source for each website or
                app you wish to track.
              </p>,
        },
      ];
      return <Joyride
        steps={steps}
        continuous={true}
        showProgress={true}
        showSkipButton={true}
        run={true}
        styles={{
            buttonNext:{
                background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
            },
            options:{
              backgroundColor:isDark?"#0E1B26":"#fff",
              arrowColor:isDark?"#0E1B26":"#fff",
              textColor:isDark?"#cfcfcf":"",
            }
        }}
     />
}
export default ONBording;