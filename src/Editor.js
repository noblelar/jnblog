import ReactQuill from "react-quill";

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

function Editor({ value, onChange }) {

    return (
        <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={value}
            onChange={onChange}
        >

        </ReactQuill>
    );
}

export default Editor;