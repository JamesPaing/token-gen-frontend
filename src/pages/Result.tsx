import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
    const { state: token } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [token, navigate]);

    return (
        <div className="flex flex-col bg-gray-100 min-h-screen justify-center items-center">
            <div className="shadow w-[90%] md:w-[50%] lg:w-[35%] bg-white p-8 rounded-sm text-center">
                <h4 className="text-2xl mb-2">
                    Thank you for your submission!
                </h4>
                <p className="text-gray-500 mb-4">
                    We&#39;ve generated a random unique token for your survey.
                </p>
                <div className="bg-green-200 p-2 rounded-sm text-lg font-bold text-gray-700 tracking-wider">
                    {token}
                </div>
            </div>
            <Link
                to={'/'}
                className="w-[90%] md:w-[50%] lg:w-[35%] text-center underline p-2 rounded-sm mt-4"
            >
                Go back to survey form
            </Link>
        </div>
    );
};

export default Result;
