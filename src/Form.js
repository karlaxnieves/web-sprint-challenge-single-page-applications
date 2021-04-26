import React from 'react';
import Confirmation from './Confirmation'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'

const FormPage = styled.form`
font-size: 1.5em;
height 50%;
width: 80%;
`

const Select = styled.select`
width:20%;
`

const Input = styled.input`
width: 25%;
`


export default function Form(props) {
    const { values, submit, change, disabled, errors, } = props;



    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };




    return (
        <form className="form container">

            <FormPage>
                <div className="errors">

                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>

                </div>

                <div className="choice-of-size">
                    <h3>Choice of Size</h3>
                    <label>
                        Size
          <Select onChange={onChange} value={values.size} name="size">
                            <option value="">- Select -</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </Select>
                    </label>
                </div>
                <div className="choice-of-sauce">
                    <h3>Choice of Sauce</h3>
                    <label>
                        Original Red
          <Input
                            type="radio"
                            name="sauce"
                            value="original red"
                            checked={values.sauce === "original red"}
                            onChange={onChange}
                        />
                    </label>

                    <label>
                        Garlic Ranch
          <Input
                            type="radio"
                            name="sauce"
                            value="garlic ranch"
                            checked={values.sauce === "garlic ranch"}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        BBQ Sauce
          <Input
                            type="radio"
                            name="sauce"
                            value="bbq sauce"
                            checked={values.sauce === "bbq sauce"}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Spinach Alfredo
          <Input
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
          <Input
                            type="checkbox"
                            name="pepperoni"
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>

                    <label>
                        Sausage
          <Input
                            type="checkbox"
                            name="sausage"
                            checked={values.sausage}
                            onChange={onChange}
                        ></Input>
                    </label>
                    <label>
                        Mushroom
          <Input
                            type="checkbox"
                            name="mushroom"
                            checked={values.mushroom}
                            onChange={onChange}
                        ></Input>
                    </label>
                    <label>
                        Onion
          <Input
                            type="checkbox"
                            name="onion"
                            checked={values.onion}
                            onChange={onChange}
                        ></Input>
                    </label>
                    <label>
                        Bacon
          <Input
                            type="checkbox"
                            name="bacon"
                            checked={values.bacon}
                            onChange={onChange}
                        ></Input>
                    </label>
                    <label>
                        Pineapple
          <Input
                            type="checkbox"
                            name="pineapple"
                            checked={values.pineapple}
                            onChange={onChange}
                        ></Input>
                    </label>
                    <label>
                        Black Olives
          <Input
                            type="checkbox"
                            name="olives"
                            checked={values.olives}
                            onChange={onChange}
                        ></Input>
                    </label>
                    <label>
                        Green Peppers
          <Input
                            type="checkbox"
                            name="peppers"
                            checked={values.peppers}
                            onChange={onChange}
                        ></Input>
                    </label>
                </div>
                <div className="choice-of-substitude">
                    <h3>Choice of Substitute</h3>
                    <label>
                        Gluten Free Crust (+ $1.00)
          <Input
                            type="checkbox"
                            name="gluten"
                            checked={values.gluten}
                            onChange={onChange}
                        ></Input>
                    </label>
                </div>
                <div className="add-on">
                    <h3>Special Instructions</h3>
                    <label>
                        <Input
                            value={values.add}
                            onChange={onChange}
                            name="add"
                            type="text"
                            placeholder="Anything else you'd like to add?"
                        />
                    </label>
                </div>
                <div className="submit" onSubmit={onSubmit} >
                    <button disabled={disabled}><Link to="/pizza/confirmation">Add to Order</Link></button>
                    <React.Fragment>
                        <Route path={'/confirmation'}>
                            <Confirmation />
                        </Route>
                    </React.Fragment>

                </div>
            </FormPage>
        </form>
    )
}