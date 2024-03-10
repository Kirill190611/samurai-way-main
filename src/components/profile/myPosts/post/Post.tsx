import React from 'react';
import s from "./Post.module.css";

type PostProps = {
    message: string
    likeQty: number
    src: string
}
export const Post = ({message, likeQty, src}: PostProps) => {
    return (
        <li className={s.item}>
            <img src={src}
                 alt="Avatar"/>
            <span>{message}</span>
            <div>
                <button>Like</button>
                <span>{likeQty}</span>
            </div>
        </li>

    );
};