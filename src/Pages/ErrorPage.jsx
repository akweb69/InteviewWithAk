import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center relative bg-gradient-to-tr  from-[rgb(0,0,31)] to-indigo-800">
            <div className="w-11/12 mx-auto py-12 flex justify-center flex-col items-center gap-10">
                <p className="text-2xl text-center font-semibold text-teal-200"> Please Wait some days... We are working on this feature!</p>
                <Link to={"/"} className="btn btn-warning">Back To Home</Link>
            </div>
            {/* bg-shaddow */}

        </div>
    );
};

export default ErrorPage;