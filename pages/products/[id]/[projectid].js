import { useRouter } from 'next/router';

const productDetailsWithId = () =>{

    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    return <div>
        <h1>
            This is product Details With Id
        </h1>
    </div>
}

export default productDetailsWithId;