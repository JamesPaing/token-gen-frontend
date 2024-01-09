import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

interface ComProps {
    isPending: boolean;
    isDisabled: boolean;
}

const CustomSubmitButton: React.FC<ComProps> = ({ isPending, isDisabled }) => {
    return (
        <button
            disabled={isDisabled}
            type="submit"
            className="flex items-center justify-center w-32 p-2 mt-8 text-white bg-blue-600 rounded-sm shadow-sm"
            data-dismiss="modal"
        >
            {isPending && (
                <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="20"
                    visible={true}
                />
            )}
            <span className={`${isPending && 'ml-2'}`}>Submit</span>
        </button>
    );
};

export { CustomSubmitButton };
