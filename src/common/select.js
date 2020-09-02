import React from "react";
import Form from "react-bootstrap/Form";

const SelectForm = ({ name, label, options, error, ...rest }) => {
    return (
        <div>
            <Form.Group>
                <Form.Control name={name} id={name} {...rest} as="select" type="text">
                    <option selected value="">
                        {label}
                    </option>
                    {options.map(option => (
                        <option key={option._id} value={option._id}>
                            {option.name}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>

            {error && <div className="alert alert-danger">{error}</div>}
        </div>
        // <Form.Group controlId="exampleForm.ControlSelect2">
        // <Form.Control name={name} id={name} {...rest} as="select" type="text">
        //   <option selected value="">{label}</option>
        //   {options.map(option => (

        //   <option key={option._id} value={option._id}>
        //   {option.name}
        //   </option>
        //   ))}
        // </Form.Control>

        // </Form.Group>
        // <div className="form-group">
        //   <label htmlFor={name}>{label}</label>
        //   <select name={name} id={name} {...rest} className="form-control">
        //     <option value="" />
        //     {options.map(option => (
        //       <option key={option._id} value={option._id}>
        //         {option.name}
        //       </option>
        //     ))}
        //   </select>
        //   {error && <div className="alert alert-danger">{error}</div>}
        // </div>
    );
};

export default SelectForm;
