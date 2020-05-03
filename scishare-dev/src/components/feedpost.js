import React from "react";
import userIcon from "./user-icon.svg";
import "./feedpost.css";

class feedpost2 extends React.Component {
  render() {
    return (
      <div className="card border-secondary align-middle" id="">
        <div className="card-header">
          <h5 className="card-title">
            <img src={userIcon} id="fdpst-img" />{" "}
            <span className="author-name">{this.props.authorName}</span>
          </h5>
          <a href="#" className="text-muted post-date">
            02/05/2020
          </a>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">{this.props.text}</li>
          <li className="list-group-item">
            <a href="#" className="text-secondary feedpost-reaction">13 curtidas</a> <a href="#" className="text-secondary feedpost-reaction">13 comentários</a>
          </li>
        </ul>

        <div className="card-footer" id="feedpost2-btnbox">
          <div className="btn-group">
            <button type="button" className="btn btn-outline-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
              <i className="far fa-thumbs-up" /> Curtir
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Comentar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default feedpost2;
