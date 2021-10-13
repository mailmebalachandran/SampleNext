import DetailComponent from './detailComponent';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const mainComponent = (props) => {
    return <div>
        <ListGroup>
            <ListGroup.Item variant="secondary">Name : {props.selected?.name}</ListGroup.Item>
            <ListGroup.Item variant="success">Age : {props.selected?.age}</ListGroup.Item>
            <ListGroup.Item>
                <DetailComponent {...props} wifeName={props.selected?.wifeName} husbandName={props.selected?.husbandName}
                    sons={props.selected?.sons !== undefined ? props.selected.sons : []}
                    daughters={props.selected?.daughters !== undefined ? props.selected.daughters : []}></DetailComponent>
            </ListGroup.Item>
        </ListGroup>

    </div>
}

export default mainComponent;