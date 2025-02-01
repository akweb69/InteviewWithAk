import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TopicsCard = ({ icon, title, desc, link }) => {
    return (
        <div className="p-4  rounded-xl">
            <div className="p-4 md:p-6 border bg-[rgba(0,0,33 ,0.4)] border-purple-400 rounded-lg hover:shadow-md hover:shadow-purple-950 ">
                <div className="flex gap-4 items-center">
                    <div className="">{icon}</div>
                    <div className="">
                        <h1 className="text-2xl md:text-4xl font-bold font-ice text-transparent bg-gradient-to-tr to-pink-500  via-orange-500 from-indigo-400 bg-clip-text w-fit">{title}</h1>
                        <p className="text-sm md:text-base">{desc.slice(0, 150)} ...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicsCard;