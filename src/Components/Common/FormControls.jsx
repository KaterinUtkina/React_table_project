import React from "react";
import stl from "./FormControl.module.css"


export const Input = ({field, form, ...props}) => {
    const hasError = form.touched && form.errors;
    return (
        <div className={hasError ? stl.error_control : undefined}>
            <div>
                <input  {...props}/>
            </div>
        </div>
    )
}
