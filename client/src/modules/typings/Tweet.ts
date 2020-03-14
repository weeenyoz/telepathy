export interface TweetInterface {
    id: string;
    title: string;
    url: string;
    user: UserInterface;
    profile_image_url: string;
}

export interface UserInterface {
    name: string;
    screenName: string;
    description: string;
    url: string;
    profileImageUrl: string;
}
