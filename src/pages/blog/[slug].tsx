import { useRouter } from "next/router";

type Post = {
    id: number;
    title: string;
    body: string;
};

export default function BlogPost({ post }: { post: Post; }) {
    const router = useRouter();
    return <p>Post: {router.query.slug}</p>;
}