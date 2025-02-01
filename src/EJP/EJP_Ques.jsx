import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EJP_Ques = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [ansId, setAnsId] = useState("");
    const [ans, setAns] = useState({});
    const [lang, setLang] = useState(true)

    useEffect(() => {
        fetch("/ejp_all_questions.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const filterData = data.filter(question => question.day === id);
                setData(filterData);
            });
    }, [id]);

    useEffect(() => {
        const ansData = data.filter(d => d?.id === ansId);
        setAns(ansData[0]);
    }, [ansId]);

    const formatAnswer = (answer) => {
        return answer.split("\n").map((line, index) => {
            // Handle headings (### for H3 and ## for H2)
            if (line.startsWith("###")) {
                return (
                    <h3 key={index} className="text-lg font-semibold mt-4">
                        {line.replace("###", "").trim()}
                    </h3>
                );
            } else if (line.startsWith("##")) {
                return (
                    <h2 key={index} className="text-xl font-bold mt-4">
                        {line.replace("##", "").trim()}
                    </h2>
                );
            }

            // Handle bullet points (lines starting with "-"), without displaying a star
            if (line.startsWith("-")) {
                return (
                    <ul key={index} className="pl-6 mt-2">
                        <li>{line.replace("-", "").trim()}</li>
                    </ul>
                );
            }

            // Handle paragraphs and bold text (for text between '**')
            return (
                <p key={index} className="text-base mt-2">
                    {line.split('**').map((part, i) => {
                        // Bold text when it's between '**', remove '**' symbols
                        if (i % 2 !== 0) {
                            return <strong key={i} className="font-semibold">{part}</strong>;
                        }
                        return part;
                    })}
                </p>
            );
        });
    };


    return (
        <div className='w-full grid grid-cols-3 gap-5'>
            <div className="col-span-2 w-full h-[600px] rounded-lg shadow-md overflow-y-auto bg-gradient-to-tr p-4 from-[rgb(0,0,31)] to-indigo-950 text-xl text-justify">
                <div className="flex justify-between items-center gap-10 pb-4 mb-3 border-b border-teal-800 ">
                    <p className="text-2xl font-bold ">Answer for question: {ans?.id}</p>
                    <div className="flex items-center gap-4">
                        <div onClick={() => setLang(true)} className="btn btn-accent btn-sm">English</div>
                        <div onClick={() => setLang(false)} className="btn btn-accent btn-sm">Bangla</div>
                    </div>
                </div>
                {
                    lang && <p className="text-lg">
                        {ans?.ans ? formatAnswer(ans.ans) : "Select a question to view the answer."}
                    </p>
                }
                {!lang &&
                    <p className="text-lg">
                        {ans?.ans ? formatAnswer(ans.bangla_ans) : "Select a question to view the answer."}
                    </p>
                }
            </div>
            {/* Right side questions */}
            <div className="col-span-1 w-full h-[600px] rounded-lg shadow-md overflow-y-auto bg-gradient-to-tr p-4 from-[rgb(0,0,31)] to-indigo-950">
                <div className="text-2xl font-bold pb-1 border-b mb-4 border-teal-700">{id}</div>
                {data.map((q, idx) => (
                    <div
                        key={idx}
                        onClick={() => setAnsId(q?.id)}
                        className="w-full p-4 border cursor-pointer hover:bg-indigo-900 rounded-lg border-indigo-500 mb-4 font-semibold"
                    >
                        <p className="">Q.{idx + 1}</p>
                        {q?.question}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EJP_Ques;
