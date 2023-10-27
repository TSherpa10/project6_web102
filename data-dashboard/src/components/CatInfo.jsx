import PropTypes from "prop-types";
import './CatInfo.css';
import { Link } from "react-router-dom";

const CatInfo = ({header, name, origin, lifespan, description, imageId, temperament }) => {
  console.log({ name, origin, lifespan, description, imageId, temperament });

  const toProp = {
    pathname: `/${name}`,
    state: { name, origin, lifespan, description, imageId, temperament },
  };

  console.log(toProp);

  return header ? (
    <div className="catInfo-div">
      <p className="catInfo-text">{name}</p>
      <p className="catInfo-text">{origin}</p>
      <p className="catInfo-text">{lifespan}</p>
      <p className="catInfo-text">{description}</p>
    </div>
  ) : (
    <div className="catInfo-div">
      <Link className={`catInfo-text`} to={toProp}>{name}</Link>
      <p className="catInfo-text">{origin}</p>
      <p className="catInfo-text">{lifespan}</p>
      <p className="catInfo-text">{description}</p>
    </div>
  );
};

CatInfo.propTypes = {
    name: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    lifespan: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageId: PropTypes.string,
    temperament: PropTypes.string,
}

export default CatInfo;
