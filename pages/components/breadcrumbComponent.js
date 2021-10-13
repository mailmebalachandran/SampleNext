import { Breadcrumb } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Link } from 'next/link';

const breadcrumbComponent = () => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    useEffect(() => {
        if (Object.keys(router.query).length > 0) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
            });

            setBreadcrumbs(pathArray);
            debugger
        }
        else
            return;
    }, [router]);

    return <div>
        <Breadcrumb>
            {
                breadcrumbs !== undefined && breadcrumbs !== null && breadcrumbs.length > 0 ? (breadcrumbs?.map((breadcrumb, i) => {
                    return (<Breadcrumb.Item key={breadcrumb.href} href={breadcrumb.href}>
                        {breadcrumb.breadcrumb}
                        </Breadcrumb.Item>)
                })) : <Breadcrumb.Item href={"/families"}>families</Breadcrumb.Item>
            }
        </Breadcrumb>
    </div>
};
export default breadcrumbComponent;