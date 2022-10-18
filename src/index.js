import React from "react";
import ReactDom from 'react-dom/client';

import App from './App';

//apikey 7c94d29f

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);