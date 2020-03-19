import { createContext } from 'react';
import { UserInterface } from '../typings/User';
import { TweetInterface } from '../typings/Tweet';

export interface HomeContextProps {
    user: UserInterface | undefined;
    timeline: Array<TweetInterface>;
    handleForm: (isSubmitted: boolean) => void;
    handleRetweet: (isRetweeted: boolean) => void;
}

const initialProps = {
    user: {
        id: '',
        username: '',
        displayName: '',
        profileImageUrl: '',
    },
    timeline: [],
    handleForm: (): void => {
        return;
    },
    handleRetweet: (): void => {
        return;
    },
};

export const HomeContext = createContext<HomeContextProps>(initialProps);
