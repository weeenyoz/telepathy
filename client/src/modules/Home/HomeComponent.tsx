import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import CardComponent from '../material-components/Card/CardComponent';
import Timeline from '../Timeline/TimelineComponent';
import { TweetInterface } from '../typings/Tweet';
import { UserInterface, LoginResponseInterface } from '../typings/User';

type HomeProps = RouteComponentProps;

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const [timeline, setTimeline] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState<UserInterface>();

    const geTimeline = async () => {
        try {
            const { data } = await axios.get(`/api/tweeter/timeline`);
            setTimeline(data);
        } catch (error) {
            console.log('error: ', error.response);
        }
    };

    const getUser = async () => {
        try {
            const result = await axios.get('/api/user/');
            const { token, user, expiresIn }: LoginResponseInterface = result.data;

            if (user) {
                setLoggedInUser(user);
            }
        } catch (error) {
            console.log('error: ', error);
        }
    };

    useEffect(() => {
        geTimeline();
        getUser();
    }, []);

    return (
        <React.Fragment>
            {loggedInUser && (
                <Grid container>
                    <Grid item xs={12}>
                        <CardComponent
                            data={{ image: loggedInUser.profileImageUrl }}
                        ></CardComponent>
                    </Grid>
                    <Grid item xs={12}>
                        {timeline &&
                            timeline.map((d: TweetInterface) => (
                                <CardComponent
                                    key={d.id}
                                    data={{ url: d.url, image: d.user.profileImageUrl }}
                                >
                                    <Timeline data={{ user: { ...d.user }, title: d.title }} />
                                </CardComponent>
                            ))}
                    </Grid>
                </Grid>
            )}
        </React.Fragment>
    );
};

export default Home;
