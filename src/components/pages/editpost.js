import { useEffect, useState } from "react";
import { Navigate, useParams } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import Editor from "../../editor";




function Editpost() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    // const [cover, setCover] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch('https://blogserver-production.up.railway.app/post/' + id)
            .then(response => {
                response.json().then(postInfo => {
                    setTitle(postInfo.title);
                    setSummary(postInfo.summary);
                    setContent(postInfo.content);
                });
            });
    });


    async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if (files?.[0]) {
            data.set('files', files?.[0]);
        }
        // console.log(files);
        const response = await fetch('https://blogserver-production.up.railway.app/post', {
            method: 'PUT',
            body: data,
            credentials: 'include',
        });



        if (response.ok) {
            setRedirect(true);
        }
        // console.log(await response.json());

    }


    if (redirect) {
        return <Navigate to={'/post/' + id} />
    }

    return (
        <form onSubmit={updatePost} >
            Edit Post
            <input
                type='title'
                placeholder={'Title'}
                value={title}
                onChange={ev => setTitle(ev.target.value)}
            />
            <input
                type='summary'
                placeholder={'Summary'}
                value={summary}
                onChange={ev => setSummary(ev.target.value)}
            />
            <input
                type="file"
                onChange={ev => setFiles(ev.target.files)}
            />
            <Editor onChange={setContent} value={content} />

            <button style={{ marginTop: '5px' }}> Update Post</button>
        </form>
    )
}

export default Editpost;