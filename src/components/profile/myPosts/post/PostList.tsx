import * as React from 'react';
import s from "./Post.module.css";

export type PostProps = {
    id: number
    post: string
    likesCount: number
    src: string
}

type PostListProps = {
    postsData: Array<PostProps>
};
export const PostList = ({postsData}: PostListProps) => {
    return (
        <ul>

            {postsData.map(post => {
                return (
                    <li className={s.item} key={post.id}>
                        <img src={post.src}
                             alt={`Avatar of ${post.id} user`}/>
                        <span>{post.post}</span>
                        <div>
                            <button>Like</button>
                            <span>{post.likesCount}</span>
                        </div>
                    </li>
                )
            })}

        </ul>
    );
};