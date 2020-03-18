export interface TweetInterface {
    id: string;
    idStr: string;
    title: string;
    url: string;
    user: TimelineUserInterface;
}

export interface TimelineUserInterface {
    name: string;
    screenName: string;
    description: string;
    url: string;
    profileImageUrl: string;
}
