import ReactDOM from 'react-dom/client';
import Router from './Router';
import { Provider } from 'react-redux';
import { store } from './state/store';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <Router />
    </Provider>
);