const Banner = ({ image }) => {
  return (
    <div className="container-fluid mt-4 mb-4">
      <div className="banners">
        <div className="banner">
          <img src={image} alt="" style={{ maxWidth: `100%` }} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
