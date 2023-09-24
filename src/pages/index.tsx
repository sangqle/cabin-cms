import type { InferGetStaticPropsType, GetStaticProps } from 'next';

type Repo = {
    name: string;
    stargazers_count: number;
};


export default function Page() {
    return <div className='bg-red-500'>
        CMS content here
    </div>;

}