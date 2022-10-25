import axios from 'axios';
import { Button, Col, Container, Form, InputGroup } from 'react-bootstrap';
import Show from './show';

function Library() {
    const [title, setTitle] = useState('');
    const [shows, setShows] = useState('');

    const searchShows = async (event) => {
        event.preventDefault();
        const res = await axios.get(`localhost:1904/programme/getAll`);
        setShow(res.data.Search);
    };

    return (
        <>
        <Container>
            <div className="row row-cols-4 g-4">
                {
                    shows.map((show) => (
                        <Col>
                        <Show
                            key={show.id}
                            id={show.id}
                            title={show.title}
                            description={show.description}
                        />
                        </Col>
                    ))
                }
            </div>
        </Container>
        </>
    )
}

export default Library;