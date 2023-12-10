import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            {/* the routed component will get rendered as the outlet */}
            <Outlet />
        </>
    );
};

export default Root;
