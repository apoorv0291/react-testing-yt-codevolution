import React from 'react';
import './App.css';
import Application from './components/Application/Application';
import Counter from './components/Counter/Counter';
import { MuiMode } from './components/mui/mui-mode';
import { AppProviders } from './Providers/app-providers';

function App() {
    return (
        <AppProviders>
            <div className="App">
                {/* <Application /> */}
                {/* <Counter /> */}
                <MuiMode />
            </div>
        </AppProviders>
    );
}

export default App;
