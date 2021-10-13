import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import MainComponent from '../../components/mainComponent';
import grandFatherList from '../../jsondata/grandFatherList.json';
import BreadcrumbComponent from '../../components/breadcrumbComponent';

const sonDetail = () => {
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
        if (filteredGrandFatherData !== undefined && filteredGrandFatherData !== null && filteredGrandFatherData.length > 0) {
            debugger
            let filteredSonData = filteredGrandFatherData[0].sons?.filter((item) => {
                return item.name === sonDetail;
            });
            let filteredDaughterData = filteredGrandFatherData[0].daughters?.filter((item) => {
                return item.name === sonDetail;
            });
            if (filteredSonData !== undefined && filteredSonData !== null && filteredSonData.length > 0)
                setSelected(filteredSonData[0]);
            if (filteredDaughterData !== undefined && filteredDaughterData !== null && filteredDaughterData.length > 0)
                setSelected(filteredDaughterData[0]);
        }
    }, [grandfather, sonDetail])
    return <div>
        <BreadcrumbComponent></BreadcrumbComponent>
        <MainComponent selected={selected}></MainComponent>
    </div>
    
}

export default sonDetail;