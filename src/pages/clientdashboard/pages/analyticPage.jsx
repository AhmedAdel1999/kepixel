import analyticimg from "../../../assets/client/analytic.png"
const AnalyticPage = () =>{
    return(
        <div className="bg-white px-6 py-8 rounded-lg flex justify-between items-center flex-wrap gap-8">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <h4 className="text-[#0E1B26] font-[600]">Analytic</h4>
                    <p className="capitalize py-1 px-3 rounded-[8px] text-[10px] font-[900] bg-[#E7FFFB] text-[#00AC98]">
                        comming soon
                    </p>
                </div>
                <p className="text-sm text-[#757575] max-w-[400px]">
                    Using destinations, you can send your data to different
                    business tools or apps. You can use your data to learn more
                    about your customers and act on destinations in real time.
                </p>
            </div>
            <div><img alt="automation-img" src={analyticimg} /></div>
        </div>
    )
}
export default AnalyticPage;