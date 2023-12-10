// grab env variables
const { REACT_APP_NODE_ENV, REACT_APP_PROD_API, REACT_APP_DEV_API } =
    process.env;

// api uri
export const uri =
    REACT_APP_NODE_ENV === 'production'
        ? REACT_APP_PROD_API
        : REACT_APP_DEV_API;
