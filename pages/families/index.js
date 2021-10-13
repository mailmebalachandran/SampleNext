import { Card, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import grandFatherList from '../jsondata/grandFatherList.json';
import Link from 'next/link';

const families = () => {
    const [list, setList] = useState(grandFatherList);

    useEffect(() => {
        if (!list)
            return;

    }, [list])

    return <div style={{ padding: "20px" }} className="mod-12">
        <Container>
            <Row>
                {list.map((item) => {
                    return <Col><Card style={{ width: '18rem', height: "14em" }} className="mod-6">
                        <Card.Body>
                            <Card.Title>{item?.familyName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{item?.name}</Card.Subtitle>
                            <Card.Text>{item?.familyDescription}</Card.Text>
                            <Card.Link><Link href={"/families/"+item.name}>Go Inside of the Family</Link></Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                })}
            </Row>
        </Container>
    </div>
}

export default families;