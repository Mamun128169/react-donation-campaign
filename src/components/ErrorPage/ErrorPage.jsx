import { NavLink, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const errorObj = useRouteError();
    const navigate = useNavigate();
    const {data, status, statusText} = errorObj;
    return (
        <div className="flex justify-center items-center h-screen flex-col space-y-5">
            <h2 className="text-3xl font-medium">Oops! Something went Wrong.</h2>
            <div className="text-2xl text-center text-red-500 font-semibold">
                <h2>{status}</h2>
                <h3 className="">{status && statusText}</h3>
            </div>
            <div>
                <p className="text-lg font-medium">{data}</p>
            </div>
            <div className="">
               <NavLink>
                 <button 
                 onClick={() => navigate("/")}
                 className="btn btn-error text-white px-6">Go Home</button>
               </NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;