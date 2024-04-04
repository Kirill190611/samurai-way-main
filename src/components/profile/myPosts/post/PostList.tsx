import * as React from 'react';
import s from "./Post.module.css";
import {PostItem} from "./PostItem";

export type PostProps = {
    id: number
    post: string
    likesCount: number
    src: string
}

type PostListProps = {
    postsData: Array<PostProps>
};
export const PostList = ({
                             postsData
                         }: PostListProps) => {
    return (
        <ul>

            {postsData.map(post => <PostItem id={post.id}
                                             post={post.post}
                                             likesCount={post.likesCount}
                                             src={post.src}/>
            )}

        </ul>
    );
};