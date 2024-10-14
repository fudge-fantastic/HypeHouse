import { useLoaderData, Link } from "@remix-run/react";
import fetchSomeData from "./../../content_api.json" 
import { LoaderFunctionArgs } from "@remix-run/node";
import { FaArrowLeft } from "react-icons/fa6";


// Find similar content from the DB or the data
export async function loader({ params }: LoaderFunctionArgs) {
    const data = fetchSomeData;
    const slug = params.slug
    const post = data.find((item: { slug: string | undefined; }) => item.slug === slug)
    return [post]
}

export default function SinglePost() {
    const posts = useLoaderData() as Posts[]
    return (
        <div className="min-h-screen">
            <div className = "m-8">
                {posts.map((item: Posts) => (
                    <div className="text-justify m-4 bg-slate-50 p-6 rounded-xl border-1 border-slate-100 shadow-xl" key={item.id}>
                        <h1 className="font-bold text-2xl mb-4">{item.title}</h1>
                        <p>{item.description}</p> 
                    </div>
                ))}
            </div>

            <div className = "flex font-semibold mb-4 justify-center">
                <button className="flex gap-2 items-center duration-200 hover:text-slate-700">
                    <FaArrowLeft/>
                    <Link to="/posts">Return back</Link>
                </button>
            </div>

        {/* <Outlet /> */}
        </div>
    );
}

interface Posts {
    id: number,
    title: string,
    summary: string,
    author: string,
    date: number,
    slug: string,
    description: string,
    category: string,
    // bio: string,
    // hobbies: string[],
    // location: string,
  }