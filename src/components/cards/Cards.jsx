import "./Main.css";
import { data } from "../data/data";
const Main = () => {
  return (
    <div className="container">
      <h1>POPULAR TOUR PLACES</h1>
      <div className="cards">
        {data.map((card) => {
          return (
            <div key={card.id} className="card">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
              </div>
              <div
                className="img"
                style={{ width: "18rem", height: "10.5rem" }}
              >
                <img
                  src={card.image}
                  alt="here is a fhoto of any country"
                  className="card-img-top"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;

/* <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
    </div>
    <img src="..." class="card-img-top" alt="...">
</div> */
