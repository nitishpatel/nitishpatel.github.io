import React from "react";

const Gallery = () => {
  return (
    <div className="container gallery" id="gallery">
      <h3 data-aos="flip-up" className="font-weight-bolder">
        Photos by me
      </h3>
      <div className="row">
        <a
          href="https://unsplash.com/photos/buDw8unybw4"
          data-toggle="lightbox"
          data-gallery="gallery"
          className="col-md-4"
        >
          <img
            data-aos="zoom-in-up"
            alt="Open Source pics by Nitish Patel"
            src="https://images.unsplash.com/photo-1600690818641-6053f3582414?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
            className="img-fluid rounded"
          />
        </a>
        <a
          href="https://unsplash.com/photos/oztan8vgkaI"
          data-toggle="lightbox"
          data-gallery="gallery"
          className="col-md-4"
        >
          <img
            data-aos="zoom-in-up"
            alt="Open Source pics by Nitish Patel"
            src="https://images.unsplash.com/photo-1560269642-7af3fa523a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            className="img-fluid rounded"
          />
        </a>
        <a
          href="https://unsplash.com/photos/WqR1xY0Ffts"
          data-toggle="lightbox"
          data-gallery="gallery"
          className="col-md-4"
        >
          <img
            data-aos="zoom-in-up"
            alt="Open Source pics by Nitish Patel"
            src="https://images.unsplash.com/photo-1581157786836-7430eb32f025?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
            className="img-fluid rounded"
          />
        </a>
      </div>
      <div className="row">
        <a
          href="https://unsplash.com/photos/z0LQWv8f5gs"
          data-toggle="lightbox"
          data-gallery="gallery"
          className="col-md-4"
        >
          <img
            data-aos="zoom-in-down"
            alt="Open Source pics by Nitish Patel"
            src="https://images.unsplash.com/photo-1561647420-20124c346bd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            className="img-fluid rounded"
          />
        </a>
        <a
          href="https://unsplash.com/photos/tdemPXKqODA"
          data-toggle="lightbox"
          data-gallery="gallery"
          className="col-md-4"
        >
          <img
            data-aos="zoom-in-down"
            alt="Open Source pics by Nitish Patel"
            src="https://images.unsplash.com/photo-1601720263863-40652fb78b37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
            className="img-fluid rounded"
          />
        </a>
        <a
          href="https://unsplash.com/photos/wwBW3Ww73wg"
          data-toggle="lightbox"
          data-gallery="gallery"
          className="col-md-4"
        >
          <img
            data-aos="zoom-in-down"
            alt="Open Source pics by Nitish Patel"
            src="https://images.unsplash.com/photo-1601720272087-d37a0ffd35e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
            className="img-fluid rounded"
          />
        </a>
      </div>
      <p className="text-dark">
        Use these Photos by me on{" "}
        <a
          className="text-warning"
          href="https://unsplash.com/@nitishpatel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >
          Unsplash
        </a>
      </p>
    </div>
  );
};

export default Gallery;
