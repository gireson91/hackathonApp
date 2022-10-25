import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Show = ({id, title, description, genre, channel, firstAired, epLength, rating}) => {
    
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{`Genre: ${genre}`}</Card.Text>
                    <Card.Text>{`Channel: ${channel}`}</Card.Text>
                    <Card.Text>{`First Aired: ${firstAired}`}</Card.Text>
                    <Card.Text>{`Episode Length: ${epLength}`}</Card.Text>
                    <Card.Text>{`Rating: ${rating}`}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Show;

Show.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
