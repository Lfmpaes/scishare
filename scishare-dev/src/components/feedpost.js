import React from "react";
import userIcon from "./user-icon.svg";
import "./feedpost.css";

class feedpost2 extends React.Component {
  render() {
    return (
      <div className="card border-secondary align-middle" id="">
        <div className="card-header">
          <h5 className="card-title">
            <img src={userIcon} id="fdpst-img" /> {this.props.authorName}
          </h5>
        </div>

        <div className="card-body">
          <div className="" id="">
            <p className="card-text">{this.props.text}</p>
          </div>
        </div>
        <div className="card-footer" id="feedpost2-btnbox">
          <div className="btn-group">
            <button type="button" className="btn">
            <i className="far fa-thumbs-up" /> Curtir
            </button>
            <button type="button" className="btn">
              Comentar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default feedpost2;
