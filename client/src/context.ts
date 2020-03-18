import { createContext } from 'react';

export interface AppContextProps {
    layoutHandler: (isAuthenticated: boolean) => void;
    isAuthenticated: boolean;
}

const initialProps: AppContextProps = {
    layoutHandler: (isAuthenticated): void => {
        return;
    },
    isAuthenticated: false,
};

export const AppContext = createContext<AppContextProps>(initialProps);
