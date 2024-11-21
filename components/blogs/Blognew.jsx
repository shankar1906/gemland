"use client";
import Image from "next/image";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import AnimatedText from "../common/AnimatedText";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/app/api/db/config";

const fetchBlog = async (url) => {
    try {
        const q = query(collection(db, "blogs"), where("url", "==", url));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const blogDoc = querySnapshot.docs[0];
            return {
                id: blogDoc.id,
                ...blogDoc.data(),
            };
        } else {
            console.error("No Blog found with the given URL");
            return null;
        }
    } catch (e) {
        console.error("Error fetching Blog: ", e);
        return null;
    }
};

export default function BlogDetails({ url }) {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBlog = async () => {
            const data = await fetchBlog(url);
            setBlog(data);
            setLoading(false);
        };
        getBlog();
    }, [url]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center h-100">
                <Preloader />
            </div>
        )
    }

    if (!blog) {
        return <div>Error: Blog not found.</div>;
    }
    return (
        <section className="news-standard fix section-padding pt-3">
            <div className="section-title text-center pb-2 breadcrumb-title">
                <h2 className="splt-txt wow" style={{ color: '#ffcd1f' }}>
                    <AnimatedText text={"Our Blog"} /> <br />
                </h2>
            </div>
            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-lg-12">
                        <div className="blog-post-details">
                            <div className="single-blog-post">
                                <div
                                    className="post-featured-thumb bg-cover rounded"
                                    style={{
                                        backgroundImage: `url(${blog.img || "/assets/img/news/blog-img.jpg"})`,
                                    }}
                                />
                                <div className="post-content">
                                    <ul className="post-list d-flex align-items-center">
                                        <li>
                                            <i className="fa-regular fa-user" />
                                            Gemland
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-calendar-days" />
                                            {blog.date || "Date not available"}
                                        </li>
                                    </ul>
                                    <h3>{blog.title}</h3>
                                    <p className="mb-3">
                                        {blog.content1}
                                    </p>
                                    <p>
                                        {blog.content2}
                                    </p>
                                    <div className="hilight-text mt-4 mb-4">
                                        <p>
                                            {blog.content3}
                                        </p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={36}
                                            height={36}
                                            viewBox="0 0 36 36"
                                            fill="none"
                                        >
                                            <path
                                                d="M7.71428 20.0711H0.5V5.64258H14.9286V20.4531L9.97665 30.3568H3.38041L8.16149 20.7947L8.5233 20.0711H7.71428Z"
                                                stroke="#FFCD1F"
                                            />
                                            <path
                                                d="M28.2846 20.0711H21.0703V5.64258H35.4989V20.4531L30.547 30.3568H23.9507L28.7318 20.7947L29.0936 20.0711H28.2846Z"
                                                stroke="#FFCD1F"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mt-4 mb-5">
                                        {blog.content4}
                                    </p>
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="details-image">
                                                <Image
                                                    src={`${blog.img1 || "/assets/img/news/blog-1.png"}`}
                                                    width={370}
                                                    height={269}
                                                    alt="img"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="details-image">
                                                <Image
                                                    src={`${blog.img2 || "/assets/img/news/blog-2.png"}`}
                                                    width={370}
                                                    height={269}
                                                    alt="img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="pt-5">
                                        {blog.content5}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
