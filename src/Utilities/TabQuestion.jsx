import { motion } from "framer-motion";
import { useState } from "react";

const TabQuestion = ({ data }) => {

    console.log(data)

    const [eng, setEng] = useState(true)
    const [ban, setBan] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleEng = () => {
        setEng(true)
        setBan(false)
        setLoading(true)
        setInterval(() => {
            setLoading(false)
        }, 1000);

    }
    const handleBan = () => {
        setBan(true)
        setEng(false)
        setLoading(true)
        setInterval(() => {
            setLoading(false)
        }, 1000);
    }

    return (
        <div className="w-full space-y-1">
            <div className="flex items-center justify-center gap-3 ">
                <motion.div
                    onClick={handleEng}
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px 5px rgba(255, 255, 0, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center px-6 py-2 rounded-lg shadow-lg transition-all border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer"
                >
                    English
                </motion.div>
                <motion.div
                    onClick={handleBan}
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px 3px rgba(0, 0, 255, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center px-6 py-2 cursor-pointer rounded-lg shadow-lg transition-all bg-gradient-to-r from-blue-500 to-green-500 text-white"
                > Bangla
                </motion.div>
            </div>
            <div className="py-4">
                {/* english */}
                {
                    eng && <div className="space-y-2">
                        {
                            loading ? <div className="flex items-center justify-center py-32">
                                <span className="loading  loading-bars loading-lg"></span>
                                Loading...
                            </div> : <div className="">
                                <h1 className="text-xl md:text-2xl font-bold text-orange-700">Question : {data.question_eng}</h1>
                                <p className=""><b className="text-xl md:text-2xl font-bold text-orange-700">Short Ans: <br /></b>{data.short_ans_eng}</p>
                                <p className=""><b className="text-xl md:text-2xl font-bold text-orange-700">Details Ans: <br /></b>{data.full_ans_eng}</p>
                                <p className=""><b className="text-xl md:text-2xl font-bold text-orange-700">Examples: <br /></b>
                                    <ol className="list-inside list-decimal font-semibold">
                                        <li>{data?.example_eng?.example_1}</li>
                                        <li>{data?.example_eng?.example_2}</li>
                                        {/* <li>{data?.example_eng?.example_3}</li>
                        <li>{data?.example_eng?.example_4}</li> */}
                                    </ol>
                                </p>

                                <p className=""><b className="text-xl md:text-2xl font-bold text-orange-700">Related Questiions: <br /></b>
                                    {data?.related_q_eng?.map((r, idx) => <div key={idx} className="bg-[rgba(0,0,81,0.5)] mb-2 cursor-pointer hover:underline w-fit px-3 p-1 rounded-full">{r}</div>)}
                                </p>
                                {/* images */}
                                <div className="w-full md:grid grid-cols-2 gap-5 py-5 pt-10 space-y-5 md:space-y-0">
                                    {
                                        data?.imgs?.map((img, idx) => <div key={idx} className="w-full max-h-[450px]"><img src={img} className="object-cover h-full w-full rounded-xl" alt="" /></div>)
                                    }
                                </div>
                                {/* next btn */}
                                <div className="pt-5">
                                    <motion.div
                                        whileHover={{ scale: 1, boxShadow: "0px 0px 15px 5px rgba(0, 255, 0, 0.5)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all border-2 border-green-500 text-green-500 cursor-pointer hover:bg-green-500 hover:text-white"
                                    >
                                        {
                                            eng && "More Question"
                                        }
                                    </motion.div>
                                </div>
                            </div>
                        }
                    </div>
                }
                {/* bangla */}

                {ban && <div className=""> <div className="space-y-2">
                    {
                        loading ? <div className="flex items-center justify-center py-32">
                            <span className="loading  loading-bars loading-lg"></span>
                            Loading...
                        </div> : <div className="">
                            <h1 className="text-xl md:text-2xl font-bold text-orange-700">প্রশ্ন : {data.question_ban}</h1>
                            <p className=""><b className="text-xl md:text-2xl font-bold text-orange-700">সংক্ষেপে উত্তর: <br /></b>{data.short_ans_ban}</p>
                            <p className=""><b className="text-xl md:text-2xl font-bold text-orange-700">বিস্তারিত উত্তর: <br /></b>{data.full_ans_ban}</p>
                            <p className=""><b className="text-xl md:text-2xl font-bold text-orange-700">উদাহরণ: <br /></b>
                                <ol className="list-inside list-decimal font-semibold">
                                    <li>{data?.example_ban?.example_1}</li>
                                    <li>{data?.example_ban?.example_2}</li>
                                </ol>
                            </p>

                            <p className=""><b className="text-xl md:text-2xl font-bold text-orange-700">প্রাসঙ্গিক প্রশ্ন: <br /></b>
                                {data?.related_q_ban?.map((r, idx) => <div key={idx} className="bg-[rgba(0,0,81,0.5)] mb-2 cursor-pointer hover:underline w-fit px-3 p-1 rounded-full">{r}</div>)}
                            </p>
                            {/* images */}
                            <div className="w-full md:grid grid-cols-2 gap-5 py-5 pt-10 space-y-5 md:space-y-0">
                                {
                                    data?.imgs?.map((img, idx) => <div key={idx} className="w-full max-h-[450px]"><img src={img} className="object-cover h-full w-full rounded-xl" alt="" /></div>)
                                }
                            </div>
                            {/* next btn */}
                            <div className="pt-5">
                                <motion.div
                                    whileHover={{ scale: 1, boxShadow: "0px 0px 15px 5px rgba(0, 255, 0, 0.5)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg transition-all border-2 border-green-500 text-green-500 cursor-pointer hover:bg-green-500 hover:text-white"
                                >
                                    {
                                        eng && "More Question"
                                    }
                                    {
                                        ban && "আরও প্রশ্ন "
                                    }
                                </motion.div>
                            </div>
                        </div>
                    }
                </div></div>}


            </div>
        </div>
    );
};

export default TabQuestion;