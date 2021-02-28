import React from "react";
import {email, letters, number, phone} from "../../utils/Validator";
import {Field, Formik} from "formik";
import stl from "../Table/Table.module.css"


const FormUser = (props) => {
    let submit = (values) => {
        props.submit(values);
    }
    return (
        <Formik
            initialValues={{id: "", firstName: "", lastName: "", email: "", phone: ""}}
            onSubmit={submit}
            validateOnBlur>
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => {
                return (
                    <div>
                        <table>
                            <tbody>
                            <tr>
                                <td>id</td>
                                <td>firstName</td>
                                <td>lastName</td>
                                <td>email</td>
                                <td>phone</td>
                            </tr>
                            <tr>
                                <td>
                                    <Field placeholder={"123"} name={"id"} onChange={handleChange} onBlur={handleBlur}
                                           value={values.id}
                                           validate={number}
                                           className={touched.id && errors.id ? "form-control is-invalid" : undefined}/>
                                    {touched.id && errors.id &&
                                    <div className="invalid-feedback">{errors.id}</div>}
                                </td>
                                <td>
                                    <Field placeholder={"firstName"} name={"firstName"} onChange={handleChange}
                                           onBlur={handleBlur} value={values.firstName}
                                           validate={letters}
                                           className={touched.firstName && errors.firstName ? "form-control is-invalid" : undefined}/>
                                    {touched.firstName && errors.firstName &&
                                    <div className="invalid-feedback">{errors.firstName}</div>}
                                </td>
                                <td>
                                    <Field placeholder={"lastName"} name={"lastName"} onChange={handleChange}
                                           onBlur={handleBlur} value={values.lastName}
                                           validate={letters}
                                           className={touched.lastName && errors.lastName ? "form-control is-invalid" : undefined}/>
                                    {touched.lastName && errors.lastName &&
                                    <div className="invalid-feedback">{errors.lastName}</div>}
                                </td>
                                <td>
                                    <Field placeholder={"email@email.email"} name={"email"} onChange={handleChange}
                                           onBlur={handleBlur} value={values.email}
                                           validate={email}
                                           className={touched.email && errors.email ? "form-control is-invalid" : undefined}/>
                                    {touched.email && errors.email &&
                                    <div className="invalid-feedback">{errors.email}</div>}
                                </td>
                                <td>
                                    <Field placeholder={"(999)999-9999"} name={"phone"} onChange={handleChange}
                                           onBlur={handleBlur} value={values.phone}
                                           validate={phone}
                                           className={touched.phone && errors.phone ? "form-control is-invalid" : undefined}/>
                                    {touched.phone && errors.phone &&
                                    <div className="invalid-feedback">{errors.phone}</div>}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className={stl.button_form}>
                            <button disabled={!isValid && !dirty} className="btn btn-outline-primary"
                                    onClick={handleSubmit}
                                    type={"submit"}>
                                Ок
                            </button>
                        </div>
                    </div>
                )
            }}
        </Formik>
    );
}

export default FormUser;
