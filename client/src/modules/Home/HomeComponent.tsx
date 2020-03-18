import React, { useEffect, useState, useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import CardComponent from '../material-components/Card/CardComponent';
import PostTweetForm from '../Forms/PostTweetForm';
import Timeline from '../Timeline/TimelineComponent';
import { TweetInterface } from '../typings/Tweet';
import { LoginResponseInterface, UserInterface } from '../typings/User';
import { AppContext } from '../../context';

type HomeProps = RouteComponentProps;

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const [timeline, setTimeline] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState<UserInterface>();
    const [isFormSubmitted, toggleIsFormSubmitted] = useState(false);

    const { layoutHandler, isAuthenticated } = useContext(AppContext);

    const geTimeline = async () => {
        try {
            const { data } = await axios.get(`/api/tweeter/timeline`);
            setTimeline(data);
        } catch (error) {
            console.error(error);
        }
    };

    const getUser = async () => {
        try {
            const result = await axios.get('/api/user/');
            const { user }: LoginResponseInterface = result.data;

            setLoggedInUser(user);
            layoutHandler(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleForm = (submitted: boolean) => {
        toggleIsFormSubmitted(submitted);
    };

    useEffect(() => {
        getUser();
        geTimeline();
    }, []);

    useEffect(() => {
        if (isFormSubmitted) {
            geTimeline();
        }
    }, [isFormSubmitted]);

    return (
        <React.Fragment>
            {loggedInUser && (
                <Grid container>
                    <Grid item xs={12}>
                        <CardComponent data={{ image: loggedInUser.profileImageUrl }}>
                            <PostTweetForm formHandler={handleForm} />
                        </CardComponent>
                    </Grid>

                    <Grid item xs={12}>
                        {timeline.length > 0 &&
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
