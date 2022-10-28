import { Card, Button, ButtonGroup } from "react-bootstrap";



const Show = ({ id, name, desc, genre, channel, firstAired, epLength, rating, handleOpenModal, handleDel }) => {


    return (
        <>
            <Card style={{ width: '18rem' }} bg='light'>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                    <Card.Text>{`Genre: ${genre}`}</Card.Text>
                    <Card.Text>{`Channel: ${channel}`}</Card.Text>
                    <Card.Text>{`First Aired: ${firstAired}`}</Card.Text>
                    <Card.Text>{`Episode Length: ${epLength}`}</Card.Text>
                    <Card.Text>{`Rating: ${rating}`}</Card.Text>
                    <ButtonGroup key={id}>
                        <Button onClick={handleOpenModal(id)}>Update</Button>
                        <Button variant="danger" onClick={() => handleDel(id)}>Delete</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </>
    )
}
export default Show;