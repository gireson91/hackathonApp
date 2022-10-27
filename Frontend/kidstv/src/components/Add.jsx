import axios from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Add() {
    const [name, setName] = useState('');
    const [success, setSuccess] = useState(false);
    const [desc, setDesc] = useState('');
    const [genre, setGenre] = useState('');
    const [channel, setChannel] = useState('');
    const [firstAired, setFirstAired] = useState('');
    const [epLength, setEpLength] = useState('');
    const [rating, setRating] = useState('');

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:1904/programme/add', { name, desc, genre, channel, firstAired, epLength, rating })
            console.log('Res', res)
        } catch (err) {
            setSuccess(false);
        }
        setName("");
        setDesc("");
        setGenre("");
        setChannel("");
        setFirstAired("");
        setEpLength("");
        setRating("");
        setSuccess(true);
    }

    return (
        <form onSubmit={handleAdd} action="/action_page.php">
            <div class="mb-3 mt-3">
                <label class="form-label" for="title">Title:</label>
                <input id="title" class="form-control" type="text" onChange={e => setName(e.target.value)} placeholder="Enter a Show" />
            </div>
            <div class="mb-3">
                <label class="form-label"  for="desc">Description:</label>
                <textarea id="desc" rows="2" class="form-control" type="text" onChange={e => setDesc(e.target.value)} placeholder="Enter a Description" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="genre">Genre: (select one)</label>
                <select id="genre" class="form-control" onChange={e => setGenre(e.target.value)}>
                    <option>Action</option>
                    <option>Adventure</option>
                    <option>Animation</option>
                    <option>Comedy</option>
                    <option>Education</option>
                    <option>Game Show</option>
                    <option>Mystery</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label" for="channel">Channel:</label>
                <input id="channel" class="form-control" type="text" onChange={e => setChannel(e.target.value)} placeholder="Enter the Channel" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="channel">First Aired:</label>
                <input id="Year" class="form-control" type="text" onChange={e => setFirstAired(e.target.value)} placeholder="Enter the year it first aired" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="epLength">Episode Length:</label>
                <input id="epLength" class="form-control" type="text" onChange={e => setEpLength(e.target.value)} placeholder="Enter the typical episode length" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="rating">Rating:</label>
                <input id="rating" class="form-control" type="text" onChange={e => setRating(e.target.value)} placeholder="Enter a rating up to 10" />
            </div>
            <div>
                <button class="btn btn-primary" type="submit">Add to Library</button>
            </div>
            <br/>
            {success && <h3 style={{ color: "green" }}>Success!</h3>}
        </form>
    );
}

export default Add;