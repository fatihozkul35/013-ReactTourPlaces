import "./Main.css";
import { data } from "../data/data";
const Main = () => {
  return (
    <div className="container">
      <h1>POPULAR TOUR PLACES</h1>
      <div className="cards">
        {data.map((card) => {
          const { id, title, image, desc } = card;
          return (
            <div key={id} className="card">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
              </div>
              <div
                className="img"
                style={{ width: "18rem", height: "10.5rem" }}
              >
                <img
                  src={image}
                  alt="here is a fhoto of any country"
                  className="card-img-top"
                />
                <p className="desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
