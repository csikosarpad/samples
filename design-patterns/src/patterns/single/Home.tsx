import { useState, useEffect } from "react";
import PostFeed from "./PostFeed";


const Home = () => {
    const [posts, setPosts] = useState();

    useEffect(() => { }, []);

    return (
        <div>
            <h2>Postbox</h2>
            <div>
                <PostFeed posts={posts} />
            </div>
        </div>
    )
}
