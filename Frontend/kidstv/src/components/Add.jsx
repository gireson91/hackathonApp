import axios from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row } from 'react-bootstrap'

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
        <Container fluid>
        <Form onSubmit={handleAdd} action="/action_page.php">
            <Form.Group as={Row} className="mb-3 mt-3" controlId="formHorizontal">
                <Form.Label  column sm={2} for="title">Title:</Form.Label>
                <Form.Control id="title" class="form-control" type="text" onChange={e => setName(e.target.value)} placeholder="Enter a Show" />
            </Form.Group>
            <Form.Group className="mb-3">
                <label class="form-label"  for="desc">Description:</label>
                <textarea id="desc" rows="2" class="form-control" type="text" onChange={e => setDesc(e.target.value)} placeholder="Enter a Description" />
            </Form.Group>
            <Form.Group className="mb-3">
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
            </Form.Group>
            <Form.Group className="mb-3">
                <label class="form-label" for="channel">Channel:</label>
                <input id="channel" class="form-control" type="text" onChange={e => setChannel(e.target.value)} placeholder="Enter the Channel" />
            </Form.Group>
            <Form.Group className="mb-3">
                <label class="form-label" for="channel">First Aired:</label>
                <input id="Year" class="form-control" type="text" onChange={e => setFirstAired(e.target.value)} placeholder="Enter the year it first aired" />
            </Form.Group>
            <Form.Group className="mb-3">
                <label class="form-label" for="epLength">Episode Length:</label>
                <input id="epLength" class="form-control" type="text" onChange={e => setEpLength(e.target.value)} placeholder="Enter the typical episode length" />
            </Form.Group>
            <Form.Group className="mb-3">
                <label class="form-label" for="rating">Rating:</label>
                <input id="rating" class="form-control" type="text" onChange={e => setRating(e.target.value)} placeholder="Enter a rating up to 10" />
            </Form.Group>
            <Form.Group>
                <button class="btn btn-primary" type="submit">Add to Library</button>
            </Form.Group>
            <br/>
            {success && <h3 style={{ color: "green" }}>Success!</h3>}
        </Form>
        </Container>
    );
}

export default Add;