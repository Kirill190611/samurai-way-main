// @flow
import * as React from 'react';
import s from "./Post.module.css";
import {PostProps} from "../../../../redux/Store";

export const PostItem = ({
                             id,
                             post,
                             likesCount,
                             src
                         }: PostProps) => {
    return (
        <li className={s.item} key={id}>
            <img src={src}
                 alt={`Avatar of ${id} user`}/>
            <span>{post}</span>
            <div>
                <button>Like</button>
                <span>{likesCount}</span>
            </div>
        </li>
    );
};