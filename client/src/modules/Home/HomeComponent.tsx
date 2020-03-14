import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import axios from 'axios';

type HomeProps = RouteComponentProps;

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const { params } = props.match;

    const geTimeline = async (userId: string) => {
        console.log('in getTimeline');
        const result = await axios.get(`/api/tweet/timeline`);
        console.log('result; ', result);
        return result;
    };

    useEffect(() => {
        const { id } = params as any;
        geTimeline(id);
    }, []);

    return <div>Home Component</div>;
};

export default Home;
