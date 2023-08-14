import { useEffect, useState } from "react";
import Post from "../post"

function Indexpage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://blogserver-production.up.railway.app/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);
    return (
        <>
            {posts.length > 0 && posts.map(post => ((
                <Post {...post} />
            )))}
            {/* <Post />
            <Post /> */}
        </>
    )
}

export default Indexpage;