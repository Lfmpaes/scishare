import React from "react";
import userIcon from "./user-icon.svg";

class feedpost extends React.Component {
  render() {
    return (
      <div className="" id="feedpost-box">
        {/* <div className="row" id="feedpost-author">
          <img src={userIcon} id="feedpost-usericon" />

          <h5 className="feedpost-name">{this.props.authorName}</h5>
        </div> */}
        <div className="row" id="feedpost-author">
          <div className="d-flex flex-row">
            <div className="p-2"><img src={userIcon} id="feedpost-usericon" /></div>

            <div className="p-2"><h5 className="feedpost-name">{this.props.authorName}</h5></div>
          </div>
        </div>

        <div className="row" id="feedpost-text">
          <p className="p-feedpost-text">
            {/* Proident proident cillum cupidatat qui occaecat id ad consequat. Lorem minim sunt cillum labore. Dolore et eu consectetur aute esse aliqua aliquip labore qui commodo incididunt et. Eiusmod eiusmod consequat cillum ullamco elit do aliquip dolore tempor minim cupidatat anim. Mollit ex commodo occaecat ut officia do do cupidatat dolor. Nisi in excepteur magna elit sit Lorem sit labore consequat proident et duis laborum. Veniam empor reprehenderit reprehenderit aliquip. */}
            {this.props.text}
          </p>
        </div>
        <div className="row" id="feedpost-btns">
          <div className="btn-group col" role="group">
            <button type="button" className="btn btn-outline-primary">
              Curtir
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

export default feedpost;
