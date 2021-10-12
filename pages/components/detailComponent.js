import Link from 'next/link';

const DetailComponent = (props) => {
    console.log(props.name);
    return <div>

        <h1>Wife Name: {props.wifeName}</h1>
        <h2>Sons</h2>
        <ul>
            {
                props.sons.map((item) => {
                    return <li><Link href={{
                        pathname: "/families/" + props.selected.name + "/" + item.name
                    }} selected={item}>{item.name}</Link></li>
                })
            }
        </ul>
    </div>
}

export default DetailComponent;