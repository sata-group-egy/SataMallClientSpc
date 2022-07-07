import BlogHeader from "./BlogHeader";
import Slider from "react-slick";
import React from "react";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import DispLang from "../Shared/DispLang";
import { useFetchBlogs } from "../../Private/Blog";
import { Link } from "react-router-dom";
import "../../Styles/blogs.css";

const Blogs = () => {
  const prev = React.createRef();
  const next = React.createRef();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow ref={next} />,
    prevArrow: <PrevArrow ref={prev} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { data } = useFetchBlogs();
  return (
    <div className="container-fluid mt-4">
      <BlogHeader {...{ next, prev }} />
      <div className="blogs-parent p-2">
        <Slider {...settings}>
          {data?.data.data.map((blog) => (
            <div
              className={`blog ${DispLang ? "text-end" : "text-start"}`}
              key={blog._id}
            >
              <div className="img-container">
                <Link to={`/blog/${blog._id}`}>
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${blog.image}`}
                    alt=""
                  />
                </Link>
              </div>
              <div className="blog-title">
                <h4>{DispLang ? blog.title.ar : blog.title.en}</h4>
              </div>
              <div className="created-time">
                <h6>
                  {DispLang ? (
                    <>
                      <span>{new Date(blog.createdAt).toDateString()}</span>
                      <i className="fa-solid fa-calendar-days ms-1"></i>
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-calendar-days me-1"></i>
                      <span>{new Date(blog.createdAt).toDateString()}</span>
                    </>
                  )}
                </h6>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;
