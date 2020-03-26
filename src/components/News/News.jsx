import React from 'react';
import UserDisplay from "./UserDisplay/UserDisplay";
import AdminDisplay from "./AdminDisplay/AdminDisplay";

const News = () => {
    return (
        <>
        <h2>Новости</h2>
        <UserDisplay/>
        <AdminDisplay/>
        </>

    );
}

export default News;
