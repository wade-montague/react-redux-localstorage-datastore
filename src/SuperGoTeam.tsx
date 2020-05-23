import React from "react";
import { connect } from "react-redux";
import ENTITIES from "./datastore/entities";

const mapStateToProps = state => ({
  ui: state.ui,
  dispatch: state.dispatch
});

const SuperGoTeam = ({ onClick, ui, dispatch }) => {
  console.log(ui);
  return (
    <div style={{ textAlign: "center" }}>
      <a href="https://www.supergoteam.com/" title="Super Go Team">
        <img
          src="https://www.supergoteam.com/images/go.png"
          width="100%"
          alt="Super Go Team Logo"
          style={{ maxWidth: "600px", minWidth: "180px" }}
        />
      </a>
      {onClick && (
        <a href="#next" className="fill-button" onClick={() => dispatch(ENTITIES.UI.ACTION.incrementActionCounter())}>
          <span className="fill-button-hover">
            <span className="fill-button-text">Standard event</span>
          </span>
        </a>
      )}
        <a href="#next" style={{marginLeft: 15}} className="fill-button" onClick={() => dispatch({type: 'RANDOM_EVENT', meta: {priority: true}})}>
          <span className="fill-button-hover">
            <span className="fill-button-text">Priority event</span>
          </span>
        </a>
    </div>
  );
};

export default connect(mapStateToProps)(SuperGoTeam);
