import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Show from "./Show";

//Library page
function Library() {
    const [tvShows, setTvShows] = useState([]);

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

    return (
        <>
            <Container fluid>
                <div className="row row-cols-3 g-4">
                    {tvShows.map((show) => (
                        <Col>
                            <Show
                                key={show._id}
                                id={show._id}
                                name={show.name}
                                desc={show.desc}
                                genre={show.genre}
                                channel={show.channel}
                                firstAired={show.firstAired}
                                epLength={show.epLength}
                                rating={show.rating}
                                handleDel={handleDel}
                            >
                            </Show>
                        </Col>
                    ))
                    }
                </div>
            </Container>
        </>
    )
}

export default Library;