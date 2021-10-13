import Link from 'next/link';
import {ListGroup, Badge} from 'react-bootstrap';

const DetailComponent = (props) => {
    return <div>
        {console.log("Wife Name:",props.wifeName)}
        {console.log("Husband Name:",props.husbandName)}
        {props.wifeName !== "" || props.wifeName !== undefined ? <h4>Wife Name: {props.wifeName}</h4> : <h4>Husband Name: {props.husbandName}</h4>}
        
        <ListGroup>
            <ListGroup.Item variant="primary">Sons  <Badge bg="dark">{props.sons.length}</Badge></ListGroup.Item>
            {
                props.sons.map((item) => {
                    return <ListGroup.Item key={item.name}><Link href={{
                        pathname: "/families/" + props.selected.name + "/" + item.name
                    }} selected={item}>{item.name}</Link></ListGroup.Item>
                })
            }
        </ListGroup>
        <ListGroup style={{marginTop:"20px"}}>
            <ListGroup.Item variant="primary">Daughters  <Badge bg="dark">{props.daughters.length}</Badge></ListGroup.Item>
            {
                props.daughters?.map((item) => {
                    return <ListGroup.Item key={item.name}><Link href={{
                        pathname: "/families/" + props.selected.name + "/" + item.name
                    }} selected={item}>{item.name}</Link></ListGroup.Item>
                })
            }
        </ListGroup>
    </div>
}

export default DetailComponent;