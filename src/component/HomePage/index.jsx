import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NavLeftContent from "../NavLeftContent";
import ProductItem from "../ProductItem";
import BlogItem from "../BlogItem";
import './HomePage.css';

function HomePage() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <img src="/icons/slick_prev_arrow.svg" alt="slick_prev_arrow" />,
        nextArrow: <img src="/icons/slick_next_arrow.svg" alt="slick_next_arrow" />
      };

    return (
        <>
            <div className="m-product">
                <NavLeftContent />
                <div className="list-product">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>

            <div className="m-blog-container">
                <div className="m-list-blog">
                    <h1>Our customers says</h1>
                    <button>
                        Button{" "}
                        <img src="/icons/black_right_arrow.svg" alt="black_right_arrow" />
                    </button>
                </div>
                <div className="slick-list-blog">
                    <Slider {...settings} className="slick_carousel">
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default HomePage;