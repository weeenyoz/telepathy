import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetTimeline = () => {
    const [timeline, setTimeline] = useState([]);

    const getTimeline = async () => {
        try {
            console.log('in getTimeline &&');
            const { data } = await axios.get(`/api/tweeter/timeline`);
            console.log('data in useGetTimeline && ', data);
            setTimeline(data);

            return data;
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getTimeline();
    }, []);

    return { setTimeline, timeline, getTimeline };
};

export default useGetTimeline;
