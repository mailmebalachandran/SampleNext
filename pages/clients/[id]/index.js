import { useRouter } from 'next/router';

function ClientProjectPage() {
    const router = useRouter();
    console.log(router.query);
    return (<div>
        <h1>
            The Projects of the given client
        </h1>
    </div>)
}

export default ClientProjectPage;