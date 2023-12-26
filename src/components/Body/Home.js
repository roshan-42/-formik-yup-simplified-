import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <p>
            Kathmandu, the vibrant capital city of Nepal, is a captivating blend
            of ancient traditions and modern dynamism nestled within the
            Himalayan foothills. As the cultural and economic heart of the
            country, Kathmandu offers a sensory feast with its bustling streets,
            vibrant markets, and a rich tapestry of historical and religious
            landmarks. The cityscape is punctuated by intricately carved
            temples, such as the iconic Swayambhunath Stupa (also known as the
            Monkey Temple) and the sacred Pashupatinath Temple, which draw
            pilgrims and tourists alike. Narrow alleys of the old city lead to
            Durbar Square, where ancient palaces and courtyards showcase the
            architectural grandeur of the Malla and Shah dynasties. Amidst the
            traditional atmosphere, modern influences are evident in the lively
            Thamel district, known for its diverse range of restaurants, shops,
            and nightlife. Kathmandu, with its unique blend of heritage and
            contemporary energy, stands as a gateway to Nepal's cultural
            richness and breathtaking mountain landscapes.
          </p>
          <p>
            <a href="" onClick={handleClick}>
              Click here
            </a>
            for loign page
          </p>
        </div>
      </div>
    </div>
  );
}
