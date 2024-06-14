import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
    return (
        <div id="work" className="text-white lg:mt-32 mb-8 mx-8 lg:mx-28">
            <h1 className="lg:text-center text-3xl lg:text-6xl font-semibold mb-8 lg:mb-16">My Work</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
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