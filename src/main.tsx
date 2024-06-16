import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const main = () => {
    const appDom = document.querySelector('#app');
    const rootDom: Element = appDom ? appDom : document.body;

    createRoot(rootDom).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
};

main();
