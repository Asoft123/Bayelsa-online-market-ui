import React from 'react';
import Form from 'react-bootstrap/Form'
const Textarea = ({ name, label, error, ...rest }) => {
      return ( 
            <Form.Group>
                  <Form.Label htmlFor={name}>{label}</Form.Label>
                  <Form.Control {...rest} name={name} id={name} as="textarea" rows="3" />
                  {error && <div className="alert alert-danger">{error}</div>}
            </Form.Group>

       );
}
 
export default Textarea;
