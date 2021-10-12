import DetailComponent from './detailComponent';

const mainComponent = (props) => {
    return <div>
        <p>Name : {props.selected?.name}</p>
        <p>Age : { props.selected?.age}</p>
        <DetailComponent {...props} wifeName={props.selected?.wifeName} sons={props.selected?.sons !== undefined ? props.selected.sons : []}></DetailComponent>
    </div>
}

export default mainComponent;