/* eslint-disable react/prop-types */
import React from 'react';
import NavBarComponent from '../material-components/NavBar/NavBarComponent';

const Layout: React.FC = props => {
    const { children } = props;

    return (
        <React.Fragment>
            <NavBarComponent title="Telepathweet" />
            {children}
        </React.Fragment>
    );
};

export default Layout;
