import React, { useState } from "react";
import propTypes from "prop-types";

export default function TextForm(props) {
  const onClickDoThis = () => {
    //console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const onHandleChange = (event) => {
    // console.log("onchange");
    setText(event.target.value);
  };

  const [text, setText] = useState("Entered the text here");
  //text = 'fdljfdljf' wrong way
  //setText("fuck you"); //correct way to change the state of text.
  return (
    <div>
      <div className="form-floating">
        <textarea
          className="form-control"
          value={text}
          id="txtarea"
          onChange={onHandleChange}
        ></textarea>
        <label htmlFor="txtarea">{props.heading}</label>
      </div>
      <button className="btn-sm btn-primary my-2" onClick={onClickDoThis}>
        Convert to Uppercase
      </button>
    </div>
  );
}
TextForm.propTypes = {
  heading: propTypes.string,
};
TextForm.defaultProps = {
  heading: "Comments",
};
