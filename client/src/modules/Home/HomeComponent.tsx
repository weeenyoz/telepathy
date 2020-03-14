import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import CardComponent from '../material-components/Card/CardComponent';
import Timeline from '../Timeline/TimelineComponent';
import { TweetInterface } from '../typings/Tweet';

type HomeProps = RouteComponentProps;

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const [timelime, setTimeline] = useState([]);

    const geTimeline = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/tweeter/timeline`);
            setTimeline(data);
        } catch (error) {
            console.log('error: ', error.response);
        }
    };

    useEffect(() => {
        geTimeline();
    }, []);

    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    Post tweet component
                </Grid>
                <Grid item xs={12}>
                    {timelime &&
                        timelime.map((d: TweetInterface) => (
                            <CardComponent key={d.id} data={d}>
                                <Timeline data={{ user: { ...d.user }, title: d.title }} />
                            </CardComponent>
                        ))}
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Home;
