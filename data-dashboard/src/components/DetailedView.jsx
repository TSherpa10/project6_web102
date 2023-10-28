import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./DetailedView.css";

const DetailedView = () => {
  let location = useLocation();
  let catInfo = location.state;
  const [dict, setDict] = useState(null);

  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/${catInfo?.imageId}?api_key=${API_KEY}`
        );
        const json = await response.json();
        console.log(json);
        setDict(json);
      } catch (error) {
        console.error(error);
      }
    };
    getImage();
  }, []);

  return (
    <>
      {dict && (
        <div className="component-div">
          <h1>The {catInfo?.name} catto.</h1>
          <div className="detailedview-div">
            <img src={dict?.url} alt={console.log(!!dict?.url == false)} />
            <h2>{`Origin: ${catInfo?.origin}`}</h2>
            <h3>{`Average Lifespan (years): ${catInfo?.lifespan} years`}</h3>
            <h3>{`Traits: ${catInfo?.temperament}`}</h3>
            <p>{`Description: ${catInfo?.description}`}</p>
            <h4></h4>
          </div>
          <button className="detail-btn">
            <Link to="/">Back</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default DetailedView;
