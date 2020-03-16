export interface LoginResponseInterface {
    user?: UserInterface;
}

export interface UserInterface {
    id: string;
    username: string;
    displayName: string;
    profileImageUrl: string;
}
