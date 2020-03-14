import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import CardComponent from '../material-components/Card/CardComponent';
import { TweetInterface } from '../typings/Tweet';

type HomeProps = RouteComponentProps;

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const [timelime, setTimeline] = useState([]);

    const geTimeline = async () => {
        const { data } = await axios.get(`/api/tweet/timeline`);

        setTimeline(data);
    };

    useEffect(() => {
        geTimeline();
    }, []);

    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    {timelime &&
                        timelime.map((d: TweetInterface) => <CardComponent key={d.id} data={d} />)}
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Home;
