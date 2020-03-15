export interface LoginResponseInterface {
    token?: string;
    user?: UserInterface;
    expiresIn?: number;
}

export interface UserInterface {
    id: string;
    username: string;
    displayName: string;
    profileImageUrl: string;
}
