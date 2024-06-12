import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
    return (
        <div id="work" className="text-white mt-20 mb-8 mx-28">
            <h1 className="text-center text-4xl font-semibold mb-8">My Work</h1>
            <div className="grid grid-cols-3 gap-12">
                {
                    mywork_data.map((work,index)=>{
                        return <img src={work.w_img} className="transition hover:scale-110 hover:border-2 rounded-xl border-purple-500" key={index} alt="" />
                    })
                }
            </div>
        </div>
    );
};

export default MyWork;