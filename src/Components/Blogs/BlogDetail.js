import React from "react";
import BreadCrumb from "../Shared/BreadCrumb";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import { useFindById } from "../../Private/Blog";
import { useParams } from "react-router-dom";
import DispLang from "../Shared/DispLang";
import "../../Styles/blog-detail.css";
import { FormattedMessage } from "react-intl";
const BlogDetail = () => {
  const { id } = useParams();
  const { data } = useFindById(id);
  return (
    <>
      <BreadCrumb
        dataList={[
          DispLang ? "الرئيسية" : "Home",
          DispLang ? "المقالات" : "Blogs",
          DispLang ? data?.data.data.title.ar : data?.data.data.title.en,
        ]}
      />
      <div
        className="blog-detail-parent mt-3 mb-2"
        dir={DispLang ? "rtl" : "ltr"}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="right col-lg-3 order-lg-1 order-md-3 order-sm-3 order-xs-3">
              <RightSide />
            </div>
            <div className="center col-lg-6 order-lg-2 order-md-1 order-sm-1 order-first">
              <div className="blog-section">
                <div className="img-container">
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${data?.data.data.image}`}
                    alt=""
                  />
                </div>
                <div className="blog-description p-2">
                  <div className="by-whom border-bottom pb-3">
                    <h3 className="fw-bold">
                      {DispLang
                        ? data?.data.data.title.ar
                        : data?.data.data.title.en}
                    </h3>
                    <div className="person-created-date d-flex align-items-center">
                      <div className={`preson ${DispLang ? "ms-3" : "me-3"}`}>
                        <i
                          className={`fa-solid fa-user text-muted ${
                            DispLang ? "ms-1" : "me-1"
                          }`}
                        ></i>
                        <span className="text-muted">
                          {" "}
                          <FormattedMessage id="ByAdmin" />
                        </span>
                      </div>
                      <div className="created-date">
                        <i
                          className={`fa-solid fa-clock text-muted ${
                            DispLang ? "ms-1" : "me-1"
                          }`}
                        ></i>
                        <span className="text-muted">
                          {new Date(data?.data.data.createdAt).toDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted p-2">
                    {DispLang
                      ? data?.data.data.description.ar
                      : data?.data.data.description.en}
                  </p>
                </div>
              </div>
            </div>
            <LeftSide />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
