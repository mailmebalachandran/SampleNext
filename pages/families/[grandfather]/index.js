import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import grandFatherList from '../../jsondata/grandFatherList.json';
import MainComponent from '../../components/mainComponent';
import BreadcrumbComponent from '../../components/breadcrumbComponent';

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
    return <div>
        <BreadcrumbComponent></BreadcrumbComponent>
        <MainComponent selected={selected} ></MainComponent>
    </div>

}

export default grandFatherMain;