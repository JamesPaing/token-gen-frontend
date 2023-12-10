import { Formik, Form } from 'formik';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { CustomInputField } from '../components/custom/CustomInputField';
import { CustomSubmitButton } from '../components/custom/CustomSubmitButton';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { Participant } from '../types/participant';
import { notifyError, notifyLoading } from '../utils/notifier';
import { uri } from '../utils/uri-provider';
import { validationSchema } from '../utils/yup-schema';

// set formik init values
const initValues: Participant = {
    name: '',
    phoneNumber: '',
    companyName: '',
    designation: '',
    answer: '',
};

// functional component starts here
const Home = () => {
    const navigate = useNavigate();

    const { data, mutateAsync, isPending, isError } = useMutation({
        mutationFn: (newParticipant) => {
            return fetch(`${uri}/generate-token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newParticipant),
            });
        },
    });

    // if there is returned value from api,
    // navigate to result page
    if (data) {
        data.json().then((returnedVal) =>
            navigate('/result', {
                state: returnedVal.participant.token,
            })
        );
    }

    // if pending, notify loading
    useEffect(() => {
        isPending && notifyLoading('Submitting your survey data...');
    }, [isPending]);

    // form submit handler
    const onSubmitHandler = async (values: Participant) => {
        try {
            // @ts-ignore
            // TODO: satisfy ts
            await mutateAsync(values);
        } catch (error) {
            console.log(error);

            // notify error
            notifyError(
                // @ts-ignore
                // TODO: satisfy ts
                error.message ?? 'Something went wrong, please try again.'
            );
        }
    };

    return (
        <main className=" min-h-screen flex flex-col items-center bg-gray-100 justify-center">
            <div className="bg-white shadow-sm py-4 px-6 w-[90%] md:w-[50%] lg:w-[35%] rounded-sm flex items-center justify-end flex-col">
                <h1 className="tracking-wider text-2xl mb-8 font-semibold">
                    Our Services Survey
                </h1>
                {/* formik starts here */}
                <Formik
                    enableReinitialize
                    initialValues={initValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmitHandler}
                >
                    <Form className="w-full">
                        {/* name  */}
                        <CustomInputField
                            disabled={isPending}
                            inputType="text"
                            name="name"
                        />
                        {/* phone number */}
                        <CustomInputField
                            disabled={isPending}
                            inputType="text"
                            name="phoneNumber"
                            label="Phone Number"
                        />
                        {/* company name */}
                        <CustomInputField
                            disabled={isPending}
                            inputType="text"
                            name="companyName"
                            label="Company Name"
                        />
                        {/* designation */}
                        <CustomInputField
                            disabled={isPending}
                            inputType="text"
                            name="designation"
                            label="Designation"
                        />
                        {/* answer */}
                        <CustomInputField
                            disabled={isPending}
                            inputType="text"
                            as="textarea"
                            label="what is your opinion on our services?"
                            rows={5}
                            placeHolder="Enter your answer..."
                            name="answer"
                        />
                        <CustomSubmitButton
                            isDisabled={isPending}
                            isPending={isPending}
                        />
                    </Form>
                </Formik>
            </div>
            {(isPending || isError) && <Toaster />}
        </main>
    );
};

export default Home;
