import React from 'react';
import classes from './News.module.css';

export const News = () => {
    return (
        <div className={classes.news}>
            <h3>News</h3>
            <div>It's my news and my friends' news</div>
        </div>
    );
};