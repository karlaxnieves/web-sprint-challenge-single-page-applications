import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Form from './Form'
import schema from './formSchema'
import * as yup from "yup";
import css from './App.css'


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
      <header>
        <h1>Build Your Own Pizza</h1>
      </header>

      <Form
        values={formValues}
        change={inputChange}
        submit={submitForm}
        disabled={disabled}
        errors={formErrors}
      />

      {friends.map((friend) => {
        return <Friend key={friend.id} details={friend} />;
      })}
    </div>
  );
}

