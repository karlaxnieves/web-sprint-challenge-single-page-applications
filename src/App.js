import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as yup from 'yup';
import Form from './Form';
import schema from './formSchema';
import Home from './Home'
import Confirmation from './Confirmation'
import { Route, withRouter, Switch } from 'react-router-dom'

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
}

const initialFormErrors = {
  size: "",
  sauce: "",
  add: "",
}

const initialList = [];
const initialDisabled = true;

function App() {
  const [list, setList] = useState(initialList);
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
      .catch((error) => {
        console.log(error);
      });
  }

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


  return (
    <>

    </>
  );
};



export default withRouter(App);
