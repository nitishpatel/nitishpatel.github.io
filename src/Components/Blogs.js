import React, { useEffect, useState } from "react";
import { getBlogs } from "../core/helper/corehelper";
const Blogs = () => {
  const [state, setState] = useState({
    feed: {},
    items: [],
  });
  useEffect(() => {
    getBlogs()
      .then((data) => {
        if (data) {
          setState(data);
        }
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1
              data-aos="slide-left"
              className="display-4 text-center font-weight-bolder"
            >
              Blogs
            </h1>
          </div>
        </div>

        <div className="row">
          {state.items.map((item, index) => {
            return (
              <div className="col-lg-4 mt-4">
                <div
                  data-aos="flip-right"
                  className="feature_item card   project shadow-sm border-0"
                >
                  <div className="card-body ">
                    <img src={item.thumbnail} alt="" className="img-fluid " />
                    <h6 className="text-center pt-2"> {item.title}</h6>
                    <a
                      className="btn btn-light"
                      target="_blank"
                      href={item.link}
                      rel="noopener noreferrer"
                    >
                      Read Here
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
