import Slider from "react-slick";
import { useQuery } from "react-query";
import { request } from "../../Utils/axios-utils";
const fetchSliders = async () => {
  return await request({ url: `/mobile-slider` });
};
const HomeSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { data } = useQuery("home-slider", fetchSliders);
  return (
    <section
      className="slider mb-5"
      style={{ position: "relative", overflow: "hidden", cursor: "grab" }}
    >
      <Slider {...settings}>
        {data?.data.data.map((slider) => (
          <div className="images" key={slider._id}>
            <div className="img-container">
              <img
                src={`${process.env.REACT_APP_API_URL}/${slider.image}`}
                alt=""
                className="mw-100"
                style={{ minHeight: "calc(100vh - 160px)" }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HomeSlider;
