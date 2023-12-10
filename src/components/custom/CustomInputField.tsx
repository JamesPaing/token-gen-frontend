import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface CustomInputFieldProps {
    inputType: string;
    name: string;
    label?: string;
    disabled?: boolean;
    noLabel?: boolean;
    as?: string;
    rows?: number;
    placeHolder?: string;
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({
    inputType,
    name,
    label,
    disabled,
    noLabel,
    as,
    rows,
    placeHolder,
}) => {
    return (
        <div className="flex flex-col mb-4">
            {/* label logic */}
            {!noLabel ? (
                <label
                    className="mb-2"
                    style={{ textTransform: 'capitalize' }}
                    htmlFor="name"
                >
                    {label || name}
                </label>
            ) : null}
            {/* input field logic */}
            <Field
                as={as ? as : undefined}
                rows={as && rows ? rows : undefined}
                disabled={disabled ? disabled : false}
                type={inputType}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={name}
                name={name}
                placeholder={
                    placeHolder
                        ? placeHolder
                        : `Enter ${label?.toLowerCase() || name}`
                }
            />
            {/* error */}
            <ErrorMessage
                component="div"
                className="text-red-600 text-xs my-1"
                name={name}
            />
        </div>
    );
};

export { CustomInputField };
