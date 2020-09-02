import React from "react";
import { TextField } from "@material-ui/core";
const Input = ({ name, label, error, ...rest }) => {
    return (
        <div>
            <TextField
                id={name}
                {...rest}
                name={name}
                label={label}
                // required
                margin="normal"
                className="text-input"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
        // <div className="form-group">
        //   <label htmlFor={name}>{label}</label>
        //   <input {...rest} name={name} id={name} className="form-control" />
        //   {error && <div className="alert alert-danger">{error}</div>}
        // </div>
    );
};

export default Input;
