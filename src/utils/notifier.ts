import toast from 'react-hot-toast';

//  loading notifier
export const notifyLoading = (msg: string) =>
    toast.loading(msg, {
        position: 'top-right',
        id: 'pending',
    });

// error notifier
export const notifyError = (msg: string) =>
    toast.error(msg, {
        position: 'top-right',
    });
