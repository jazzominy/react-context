import React from 'react';
import Header from './Header';
import MessageList from './MessageList';

const MainPage = ({ onLogout}) => (
    <main>
        <Header />
        <MessageList />
    </main>
)

export default MainPage;