import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <div className = "widget-header">
      <h3 className = "widget-header__title">Your Options</h3>
      <button
        onClick={props.handleDeleteOptions}
        className="button button--link"
      >
        Remove All
      </button>
    </div>

    {!props.options.length && <p className = "widget__message">Please add some options to get started!</p>}
    
    <ol>
      {props.options.map((option, index) => (
        <Option
          key={option}
          optionText={option}
          count={index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </ol>
  </div>
);

export default Options;
