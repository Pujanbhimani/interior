import React from "react";

function BlogCard(props) {
    return (
        <>
            <img className="blog-img" src={props.BlogImg} alt="" />
            <div>
                <p className="blog-catg">{props.BlogCatg}</p>
                <strong className="blog-name">{props.BlogName}</strong>
                <div>
                    <p className="blog-date">{props.BlogDate}</p>
                    <button className="next-btn"><img src="./img/next-arrow.png" alt='' /></button>
                </div>
            </div>
        </>
    )
}

export default BlogCard;