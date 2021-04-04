import React from 'react';
import './App.css';
import Body from './components/Body/Body';
// eslint-disable-next-line import/no-named-as-default
import Footer from './components/Footer/Footer';
// eslint-disable-next-line import/no-named-as-default
import Header from './components/Header/Header';

function App() {
    // eslint-disable-next-line react/react-in-jsx-scope
    return (
        <layout>
            <Header />
            <Body />
            <Footer />
        </layout>
    );
}

export default App;
