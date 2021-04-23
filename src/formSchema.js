import * as yup from "yup";

export default yup.object().shape({
    add: yup
        .string(),
    size: yup
        .string()
        .oneOf(["small", "medium", "large"], "Required")
        .required("you must choose a size"),
    sauce: yup.string().oneOf(["original red", "garlic ranch", "bbq sauce", "spinach alfredo",], "Required")
        .required("you must choose a sauce type"),
    // we are done with checkboxes
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushroom: yup.boolean(),
    onion: yup.boolean(),
    bacon: yup.boolean(),
    pineapple: yup.boolean(),
    olives: yup.boolean(),
    peppers: yup.boolean(),
    gluten: yup.boolean(),
});