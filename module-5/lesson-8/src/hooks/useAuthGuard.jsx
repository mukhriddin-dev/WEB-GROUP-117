let token =localStorage.getItem('token');


export const useGuard = () => {

    if (!token) {
        return false;
    }

    return true;

}
