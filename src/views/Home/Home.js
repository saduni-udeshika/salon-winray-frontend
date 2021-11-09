import React from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import customerCardDetails from "../../components/Card/customerCardDetails";

function Home(){
    return (
        <div className="admin-home">
            <div class="heading">Home</div>
          {customerCardDetails.map((customerCardDetails) => {
            return (
              <div>
                <Card
                  key={customerCardDetails.id}
                  name={customerCardDetails.name}
                  img={customerCardDetails.img}
                  navigate={customerCardDetails.navigate}
                />
              </div>
            );
          })}
        </div>
      );
}
export default Home;