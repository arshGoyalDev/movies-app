import "./styles/Error.scss";

import { Link } from "react-router-dom";

import ErrorSvg from "../assets/images/error.svg";
import ErrorLargeSvg from "../assets/images/error-large.svg";

const Error = () => {
  return (
    <div className="error">
      <div className="small">
        <img src={ErrorSvg} alt="error-404" />
        <div className="attribution">
          <p>
            illustration by
            <a
              href="https://storyset.com/online"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              Storyset
            </a>{" "}
          </p>
        </div>
      </div>
      <div className="large">
        <img src={ErrorLargeSvg} alt="error-404" />
        <div className="attribution">
          <p>
            illustration by
            <a
              href="https://storyset.com/internet"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              Storyset
            </a>{" "}
          </p>
        </div>
      </div>
      <div className="error--actions">
        <h1 className="error--message">Page Not Found</h1>
        <Link to="/">
          <button className="home-btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
