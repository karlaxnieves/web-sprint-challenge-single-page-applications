import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Form from './Form'
import schema from './formSchema'
import * as yup from "yup";
import Home from './Home'
import css from './App.css'
import Confirmation from './Confirmation'
import { Route, Link, Switch } from 'react-router-dom'


const initialFormValues = {
  size: "",
  sauce: "",

  pepperoni: false,
  sausage: false,
  mushroom: false,
  onion: false,
  bacon: false,
  pineapple: false,
  olives: false,
  peppers: false,
  gluten: false,

  add: "",
};

const initialFormErrors = {
  size: "",
  sause: "",
  add: "",
};

const initialList = [];
const initialDisabled = true;

export default function App() {
  const [list, setList] = useState(initialList)
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getList = () => {
    axios
      .get("https://reqres.in/")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const postNewList = (newList) => {
    axios
      .post("https://reqres.in/", newList)
      .then((res) => {
        setList([res.data, ...list]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };


  const submitForm = () => {
    const newList = {
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      add: formValues.add.trim(),
      toppings: ["pepperoni", "sausage", "mushroom", "onion", "bacon", , "pineapple", "olives", "peppers", "gluten"].filter(
        (topping) => formValues[topping]
      ),
    };
    postNewList(newList);
  };

  useEffect(() => {
    getList();
  }, []);


  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);


  return (
    <div className="container">

      <div className='App'>
        <nav>
          <div className='nav-links'>

            <Link to="/">Home</Link>
            <Link to="/help">Help</Link>
          </div>
        </nav>
        <div className='pizza'>
          <h1 className='store-header'>Your favortie food, delivered while coding!</h1>
        </div>

        <Switch>
          <Route path={'/pizza'}>
            <Form values={formValues}
              change={inputChange}
              submit={submitForm}
              disabled={disabled}
              errors={formErrors} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>



      <div className='food-delivery'>
        <div className="delivery">
          <img
            className='mcdonals'
            src='https://images.unsplash.com/photo-1610459468487-37acdfb1e888?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            alt=''
          />
          <h4>McDonald's</h4>
          <h5>$. American -Fast Food -Burgers</h5>
          <button className="food">
            20-30 Min.
      </button>
          <button className="food">
            $5.99 Delivery Fee
      </button>
        </div>

        <div className="delivery">
          <img
            className='sweetgreens'
            src='https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            alt=''
          />
          <h4>Sweet Greens</h4>
          <h5>$. -Healthy -Salads</h5>
          <button className="food">
            30-45 Min.
      </button>
          <button className="food">
            $4.99 Delivery Fee
      </button>
        </div>

        <div className="delivery">
          <img
            className='starbucks'
            src='https://images.unsplash.com/photo-1615680022554-546b62de530b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            alt=''
          />
          <h4>Starbucks</h4>
          <h5>$. -Cafe -Coffee & Tea -Breakfast and Brunch</h5>
          <button className="food">
            10-20 Min.
      </button>
          <button className="food">
            $3.99 Delivery Fee
      </button>
        </div>
      </div>
    </div>

  );
}

