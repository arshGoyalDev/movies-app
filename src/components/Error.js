import "./styles/Error.scss";

import ErrorSvg from "../assets/images/error.svg";
import ErrorLargeSvg from '../assets/images/error-large.svg';

const Error = () => {
  return (
    <div className="error">
      <img src={ErrorSvg} alt="error-404" className="small" />
      <img src={ErrorLargeSvg} alt="error-404" className="large" />
      <div className="error--actions">
        <h1 className="error--message">Page Not Found</h1>
        <button className="home-btn">Back to Home</button>
      </div>
    </div>
  );
};

export default Error;
