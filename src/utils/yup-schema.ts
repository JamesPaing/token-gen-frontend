import * as Yup from 'yup';

// yup validation schema
export const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phoneNumber: Yup.string()
        .min(9, 'Phone number must be 9 characters at minimum')
        .min(11, 'Phone number must be 11 characters at minimum')
        .required('Phone number is required'),
    companyName: Yup.string().required('Company name is required'),
    designation: Yup.string().required('Designnation is required'),
    answer: Yup.string().required('Answer is required'),
});
