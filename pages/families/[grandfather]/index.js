import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import grandFatherList from '../../jsondata/grandFatherList.json';
import MainComponent from '../../components/mainComponent';

const grandFatherMain = () => {
    const router = useRouter();
    const [list, setList] = useState(grandFatherList);
    const [selected, setSelected] = useState({});
    const { grandfather } = router.query;

    useEffect(() => {
        if (!grandfather)
            return;
        let filteredData = list.filter((item) => {
            return item.name === grandfather;
        });
        if (filteredData !== undefined && filteredData !== null) {
            setSelected(filteredData[0]);
        }
    }, [grandfather]);
    return <MainComponent selected={selected} ></MainComponent>
    
}

export default grandFatherMain;