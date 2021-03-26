import * as yup from "yup";

export default yup.object().shape({
    add: yup
        .string(),

    size: yup
        .string()
        .oneOf(["small", "medium", "large"], "Required"),
    sauce: yup.string().oneOf(["original red", "garlic ranch", "bbq sauce", "spinach alfredo",], "Required"),
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