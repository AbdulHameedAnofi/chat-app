import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

// Echo.private(`messager`)
//     .listen('MessageSent', (e) => {
//         console.log(e);
//     });

// Echo.join(`group_chat.1`)
//     .here((users) => {
//         console.log(users);
//     })
//     .joining((user) => {
//         console.log(user.name);
//     })
//     .leaving((user) => {
//         console.log(user.name);
//     }) 
//     .listen('GroupChat', (e) => {
//         console.log(e);
//     })  
//     .error((error) => {
//         console.error(error);
//     });

