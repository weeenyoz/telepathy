import axios from 'axios';

const usePostRetweet = () => {
    const retweet = async (id: string | undefined) => {
        try {
            const result = await axios.post('/api/tweeter/retweet', { id });
            return result;
        } catch (error) {}
    };

    return { retweet };
};

export default usePostRetweet;
