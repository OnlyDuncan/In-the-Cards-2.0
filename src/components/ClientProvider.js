'use client';

import { Provider } from 'react-redux';
import store from '../redux/store.js';

export default function ClientProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}