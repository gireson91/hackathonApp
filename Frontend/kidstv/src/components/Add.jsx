import axios from "axios";
import { useState } from "react";

function Add() {
    const [name, setName] = useState('');
    const [success, setSuccess] = useState(false);
    const [desc, setDesc] = useState('');

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:1904/programme/add', { name, desc })
            console.log('Res', res)
        } catch (err) {
            setSuccess(false);
        }
        setName("");
        setDesc("");
        setSuccess(true);
    }

    return (
        <form onSubmit={handleAdd}>
            <input type="text" onChange={e => setName(e.target.value)} placeholder="Enter a Show" />
            <input type="text" onChange={e => setDesc(e.target.value)} placeholder="Enter a Description" />
            <button type="submit">Add to Library</button>
            {success && <p style={{color: "green"}}>Success!</p>}
        </form>
    );
}

export default Add;