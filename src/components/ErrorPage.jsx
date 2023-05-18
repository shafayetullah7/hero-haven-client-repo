import Lottie from "lottie-react";
import errorAnimation from '../assets/error.json'
const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div>
                <Lottie animationData={errorAnimation} className=" w-[300px] mx-auto"></Lottie>
                <p className="text-3xl font-bold text-center relative bottom-10 w-fit mx-auto">We Are Sorry, Page Not Found</p>
                <p className="w-[70%] mx-auto text-gray-500 text-center">Unfortunately the page you were looking for could not be found. It may be temporarily unavailable, moved or no longer exist. Check the Url you entered for any mistakes and try again. <span className="text-red-600 underline font-bold">Back to Homepage</span></p>
            </div>
        </div>
    );
};

export default ErrorPage;