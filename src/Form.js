import React from "react";

export default function Form(props) {
    const { values, submit, change, disabled, errors } = props;


    return (
        <form className="form container" onSubmit={onSubmit}>
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
                    <label>
                        Original Red
          <input
                            type="radio"
                            name="sauce"
                            value="original red"
                            checked={values.sauce === "original red"}
                            onChange={onChange}
                        />
                    </label>

                    <label>
                        Garlic Ranch
          <input
                            type="radio"
                            name="sauce"
                            value="garlic ranch"
                            checked={values.sauce === "garlic ranch"}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        BBQ Sauce
          <input
                            type="radio"
                            name="sauce"
                            value="bbq sauce"
                            checked={values.sauce === "bbq sauce"}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Spinach Alfredo
          <input
                            type="radio"
                            name="sauce"
                            value="spinach alfredo"
                            checked={values.sauce === "spinach alfredo"}
                            onChange={onChange}
                        />
                    </label>

                </div>

                <div className="choice-of-toppings">
                    <h3>Choice of Toppings</h3>
                    <label>
                        Pepperoni
          <input
                            type="checkbox"
                            name="pepperoni"
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>

                    <label>
                        Sausage
          <input
                            type="checkbox"
                            name="sausage"
                            checked={values.sausage}
                            onChange={onChange}
                        ></input>
                    </label>
                    <label>
                        Mushroom
          <input
                            type="checkbox"
                            name="mushroom"
                            checked={values.mushroom}
                            onChange={onChange}
                        ></input>
                    </label>
                    <label>
                        Onion
          <input
                            type="checkbox"
                            name="onion"
                            checked={values.onion}
                            onChange={onChange}
                        ></input>
                    </label>
                    <label>
                        Bacon
          <input
                            type="checkbox"
                            name="bacon"
                            checked={values.bacon}
                            onChange={onChange}
                        ></input>
                    </label>
                    <label>
                        Pineapple
          <input
                            type="checkbox"
                            name="pinapple"
                            checked={values.pinapple}
                            onChange={onChange}
                        ></input>
                    </label>
                    <label>
                        Black Olives
          <input
                            type="checkbox"
                            name="olives"
                            checked={values.olives}
                            onChange={onChange}
                        ></input>
                    </label>
                    <label>
                        Green Peppers
          <input
                            type="checkbox"
                            name="peppers"
                            checked={values.peppers}
                            onChange={onChange}
                        ></input>
                    </label>
                </div>
                <div className="choice-of-substitude">
                    <h3>Choice of Substitue</h3>
                    <label>
                        Gluten Free Crust (+ $1.00)
          <input
                            type="checkbox"
                            name="gluten"
                            checked={values.gluten}
                            onChange={onChange}
                        ></input>
                    </label>
                </div>
                <div className="add-on">
                    <h3>Special Instructions</h3>
                    <label>
                        <input
                            value={values.email}
                            onChange={onChange}
                            name="email"
                            type="text"
                            placeholder="type a username"
                        />
                    </label>
                </div>

            </div>
        </form>
    )
}