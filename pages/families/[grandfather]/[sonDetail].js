import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import MainComponent from '../../components/mainComponent';
import grandFatherList from '../../jsondata/grandFatherList.json';

const sonDetail = (props) => {
    const router = useRouter();
    const { grandfather, sonDetail } = router.query;
    const [list, setList] = useState(grandFatherList);
    const [selected, setSelected] = useState({});
    useEffect(() => {
        if (!grandfather || !sonDetail)
            return;
        let filteredGrandFatherData = list.filter((item) => {
            return item.name === grandfather;
        });
        if (filteredGrandFatherData !== undefined && filteredGrandFatherData !== null) {
            let filteredSonData = filteredGrandFatherData[0].sons?.filter((item) => {
                return item.name === sonDetail;
            });
            if (filteredSonData !== undefined && filteredSonData !== null)
                setSelected(filteredSonData[0]);
        }
    }, [grandfather, sonDetail])
    return <MainComponent selected={selected}></MainComponent>
}

export default sonDetail;