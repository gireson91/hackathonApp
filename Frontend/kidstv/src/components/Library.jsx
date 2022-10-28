import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Button, Modal, Form } from "react-bootstrap";
import Show from "./Show";


//Library page
function Library() {
    const [tvShows, setTvShows] = useState([]);
    const [thisShow, setThisShow] = useState({
        'name': "",
        'desc': "",
        'genre': "",
        'channel': "",
        'firstAired': "",
        'epLength': "",
        'rating': ""
    }
    );

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);

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
        axios.put(`http://localhost:1904/programme/amend/` + thisShow._id, thisShow)
            .then((response) => {
                console.log("UPDATED:", response.data);
                searchShows();
                setThisShow({
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
        setThisShow(currentShow => {
            const cloneShow = { ...currentShow };
            cloneShow[e.target.id] = e.target.value;
            return cloneShow;
        })
    }

    return (
        <>
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please update the necessary fields below:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Container fluid>
                        <Form onSubmit={handleUpdate}>
                            <Form.Group className="mb-3 mt-3">
                                <Form.Label htmlFor="name">Title:</Form.Label>
                                <Form.Control id="name" type="text" value={thisShow.name} onChange={updateShow} placeholder="Enter a Show" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="desc">Description:</Form.Label>
                                <Form.Control id="desc" rows="2" type="text" value={thisShow.desc} onChange={updateShow} placeholder="Enter a Description" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="genre">Genre: (select one)</Form.Label>
                                <select id="genre" className="form-control" value={thisShow.genre} onChange={updateShow}>
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
                                <Form.Label htmlFor="channel">Channel:</Form.Label>
                                <Form.Control id="channel" type="text" value={thisShow.channel} onChange={updateShow} placeholder="Enter the Channel" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="firstAired">First Aired:</Form.Label>
                                <Form.Control id="firstAired" type="text" value={thisShow.firstAired} onChange={updateShow} placeholder="Enter the year it first aired" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="epLength">Episode Length:</Form.Label>
                                <Form.Control id="epLength" type="text" value={thisShow.epLength} onChange={updateShow} placeholder="Enter the typical episode length" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="rating">Rating:</Form.Label>
                                <Form.Control id="rating" type="text" value={thisShow.rating} onChange={updateShow} placeholder="Enter a rating up to 10" />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                                <Button type="submit" variant="primary" >Save Changes</Button>
                            </Form.Group>
                        </Form>
                    </Container>
                    </Modal.Body>
                </Modal>
            <Container fluid>
                <div className="row row-cols-3 g-4">
                    {tvShows.map((thisShow) => {
                        // debugger;
                        return (
                            <Col key={show._id}>
                                <Show
                                    id={thisShow._id}
                                    name={thisShow.name}
                                    desc={thisShow.desc}
                                    genre={thisShow.genre}
                                    channel={thisShow.channel}
                                    firstAired={thisShow.firstAired}
                                    epLength={thisShow.epLength}
                                    rating={thisShow.rating}
                                    handleDel={handleDel}
                                    handleUpdate={() => setThisShow(thisShow)}
                                    handleOpenModal={handleOpenModal}
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