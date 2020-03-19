import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Grid, CardMedia } from '@material-ui/core';
import CardComponent from '../material-components/Card/CardComponent';
import PostTweetForm from '../Forms/PostTweetForm';
import Timeline from '../Timeline/TimelineComponent';
import { TweetInterface } from '../typings/Tweet';
import useGetUser from '../hooks/useGetUser';
import useGetTimeline from '../hooks/useGetTimeline';
import { HomeContext, HomeContextProps } from './context';

type HomeProps = RouteComponentProps;

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const [isFormSubmitted, toggleIsFormSubmitted] = useState(false);
    const [isRetweeted, toggleIsRetweeted] = useState(false);

    const user = useGetUser();
    const { timeline, setTimeline, getTimeline } = useGetTimeline();

    const updateTimeline = async () => {
        const data = await getTimeline();
        setTimeline(data);
    };

    // @TODO: should be handleNotification
    const handleForm = (submitted: boolean) => {
        toggleIsFormSubmitted(submitted);
    };

    const handleRetweet = (isRetweeted: boolean) => {
        toggleIsRetweeted(isRetweeted);
    };

    useEffect(() => {
        if (isFormSubmitted || isRetweeted) {
            updateTimeline();
        }
    }, [isFormSubmitted, isRetweeted]);

    const context: HomeContextProps = {
        user,
        timeline,
        handleForm,
        handleRetweet,
    };

    return (
        <React.Fragment>
            <HomeContext.Provider value={context}>
                {user && (
                    <Grid container>
                        <Grid item xs={12}>
                            <CardComponent data={{ image: user.profileImageUrl }}>
                                <PostTweetForm formHandler={handleForm} />
                            </CardComponent>
                        </Grid>
                        <Grid item xs={12}>
                            {timeline.length > 0 &&
                                timeline.map((d: TweetInterface) => (
                                    <CardComponent
                                        key={d.id}
                                        data={{
                                            idStr: d.idStr,
                                            url: d.url,
                                            image: d.user.profileImageUrl,
                                            retweetCount: d.retweetCount,
                                        }}
                                    >
                                        <Timeline data={{ user: { ...d.user }, title: d.title }} />
                                    </CardComponent>
                                ))}
                            {timeline.length === 0 && (
                                <CardMedia
                                    image={require('../../assets/no-data.png')}
                                    component="img"
                                />
                            )}
                        </Grid>
                    </Grid>
                )}
            </HomeContext.Provider>
        </React.Fragment>
    );
};

export default Home;
