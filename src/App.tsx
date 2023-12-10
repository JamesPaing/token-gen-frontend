import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import Result from './pages/Result';

// initiate react query client
const queryClient = new QueryClient();

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            // routes go here
            <Route path="/" element={<Root />}>
                <Route index element={<Home />}></Route>
                <Route path="/result" element={<Result />}></Route>
            </Route>
        )
    );

    return (
        // react query wrapper
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
};

export default App;
