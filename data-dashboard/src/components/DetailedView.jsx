import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const DetailedView = () => {
  let location = useLocation();
  console.log("location from useLocation", location);
  let catInfo = location.state;
  console.log("passed states:", catInfo);
  let params = useParams();
  const [dict, setDict] = useState(null);

  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/0XYvRd7oD?api_key=${API_KEY}`
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
          <h1>The {params.name} catto.</h1>
          <div className="detailedview-div">
            <img src={dict?.url} alt={console.log(!!dict?.url == false)} />
            <h3>{catInfo?.temperament}</h3>
            <h4></h4>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailedView;
