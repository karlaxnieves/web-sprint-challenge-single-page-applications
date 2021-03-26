import React from "react";

export default function Form(props) {
    const { values, submit, change, disabled, errors } = props;


    return (
        <div className="form">
            <h2>Build Your Own Pizza</h2>
            <div className="choice-of-size">
                <h3>Choice of Size</h3>
                <label>
                    Size
          <select onChange={onChange} value={values.role} name="size">
                        <option value="">- Select -</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
            </div>
            <div className="choice-of-sauce">
                <h3>Choice of Sauce</h3>


            </div>
        </div>
    )
}