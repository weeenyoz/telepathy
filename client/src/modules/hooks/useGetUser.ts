import { useEffect, useState } from 'react';
import axios from 'axios';
import { LoginResponseInterface, UserInterface } from '../typings/User';

const useGetUser = () => {
    const [user, setUser] = useState<UserInterface>();

    const getUser = async () => {
        try {
            const result = await axios.get('/api/user/');
            const { user }: LoginResponseInterface = result.data;

            setUser(user);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return user;
};

export default useGetUser;
