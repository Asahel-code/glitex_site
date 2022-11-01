import React from 'react';
import Header from "./header";

function Layout({
                    children,
                    title,
                    backgroundColor
                }) {
    return (
        <div style={{backgroundColor: backgroundColor}}>
            <Header/>
            {children}
        </div>
    );
}

export default Layout;