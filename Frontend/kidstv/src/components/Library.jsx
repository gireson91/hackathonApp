import axios from "axios";
import e from "cors";
import { useEffect, useState } from "react";
import { Col, Container, Button, Modal, Form } from "react-bootstrap";
import Show from "./Show";


//Library page
function Library() {
    const [tvShows, setTvShows] = useState([]);
    const [show, setShow] = useState({
        'name': "",
        'desc': "",
        'genre': "",
        'channel': "",
        'firstAired': "",
        'epLength': "",
        'rating': ""
    }
    );

    const searchShows = async () => {
        const res = await axios.get(`http://localhost:1904/programme/getAll`);
        setTvShows(res.data);
    };

    useEffect(() => { searchShows(); }, []);

    const handleDel = (id) => {
        axios.delete(`http://localhost:1904/programme/delete/` + id)
            .then((response) => {
                console.log("DELETED:", response.data);
                searchShows();
            })
            .catch((err) => console.log(err.message));
        console.log("ID:", id);
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:1904/programme/amend/` + show._id, show)
            .then((response) => {
                console.log("UPDATED:", response.data);
                searchShows();
                setShow({
                    'name': "",
                    'desc': "",
                    'genre': "",
                    'channel': "",
                    'firstAired': "",
                    'epLength': "",
                    'rating': ""
                });
            })
            .catch((err) => console.log(err.message));
        // console.log("ID:", id);
    }

    const updateShow = (e) => {
        setShow(currentShow => {
            const cloneShow = { ...currentShow };
            cloneShow[e.target.id] = e.target.value;
            return cloneShow;
        })
    }

    let display = false;

    for (let val of Object.values(show)) { //displays update form if any values are not blank
        display = display || !!val;
    }

    console.log("DISPLAY", display);

    return (
        <>
            {display &&
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Please update the necessary fields below:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Container fluid>
                        <Form onSubmit={handleUpdate}>
                            <Form.Group className="mb-3 mt-3">
                                <Form.Label htmlFor="name">Title:</Form.Label>
                                <Form.Control id="name" type="text" value={show.name} onChange={updateShow} placeholder="Enter a Show" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="form-label" htmlFor="desc">Description:</label>
                                <textarea id="desc" rows="2" className="form-control" type="text" value={show.desc} onChange={updateShow} placeholder="Enter a Description" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="form-label" htmlFor="genre">Genre: (select one)</label>
                                <select id="genre" className="form-control" value={show.genre} onChange={updateShow}>
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
                                <label className="form-label" htmlFor="channel">Channel:</label>
                                <input id="channel" className="form-control" type="text" value={show.channel} onChange={updateShow} placeholder="Enter the Channel" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="form-label" htmlFor="firstAired">First Aired:</label>
                                <input id="firstAired" className="form-control" type="text" value={show.firstAired} onChange={updateShow} placeholder="Enter the year it first aired" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="form-label" htmlFor="epLength">Episode Length:</label>
                                <input id="epLength" className="form-control" type="text" value={show.epLength} onChange={updateShow} placeholder="Enter the typical episode length" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="form-label" htmlFor="rating">Rating:</label>
                                <input id="rating" className="form-control" type="text" value={show.rating} onChange={updateShow} placeholder="Enter a rating up to 10" />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="secondary" >Close</Button>
                                <Button type="submit" variant="primary" >Save Changes</Button>
                            </Form.Group>
                        </Form>
                    </Container>
                    </Modal.Body>
                </Modal.Dialog>
            }
            <Container fluid>
                <div className="row row-cols-3 g-4">
                    {tvShows.map((show) => {
                        // debugger;
                        return (
                            <Col key={show._id}>
                                <Show
                                    id={show._id}
                                    name={show.name}
                                    desc={show.desc}
                                    genre={show.genre}
                                    channel={show.channel}
                                    firstAired={show.firstAired}
                                    epLength={show.epLength}
                                    rating={show.rating}
                                    handleDel={handleDel}
                                    handleUpdate={() => setShow(show)}
                                >
                                </Show>
                            </Col>
                        )
                    })
                    }
                </div>
            </Container>
        </>
    )
}

export default Library;