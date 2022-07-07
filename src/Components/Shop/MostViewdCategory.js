import { useFetchCategories } from "../../Private/Category";
import "../../Styles/most-view-category.css";
const MostViewdCategory = () => {
  const { data } = useFetchCategories(false);
  return (
    <section className="last-header-section">
      <div className="container-fluid">
        <div className="top-categories"> الأقسام الأكثر مشاهده </div>
        <div className="cat-self">
          <ul>
            {data?.data.data.map((cat) => (
              <li key={cat._id} className={!cat.showInHomepage ? "d-none" : ""}>
                {cat.title.ar}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MostViewdCategory;
