import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404 - Not Found</h1>
            <p>The page you are looking for doesn't exist.</p>
            {/* <Link to="/">Go back to the homepage</Link> */}
        </div>
    );
};

export default NotFound;
