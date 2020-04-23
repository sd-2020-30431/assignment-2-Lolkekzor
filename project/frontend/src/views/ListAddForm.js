import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Col, Row } from 'react-bootstrap';
import moment from 'moment';

const schema = yup.object({
    listTitle: yup.string().required(),
    itemTitle: yup.string().required(),
    itemQuantity: yup.number().required().positive(),
    itemCalories: yup.number().required().positive(),
    itemDate: yup.date().required().min(moment().subtract(10, 'years').calendar()).max(moment().add(10, 'years').calendar()),
    itemExpiration: yup.date().required().min(moment().subtract(10, 'years').calendar()).max(moment().add(10, 'years').calendar()),
    itemConsumption: yup.date().required().min(moment().subtract(10, 'years').calendar()).max(moment().add(10, 'years').calendar())
})

class ListAddForm extends React.Component {
    render() {
        return (
            <div>
                <h1> Enter your new grocery list details </h1>
                <hr/>
                <Formik
                    validationSchema={schema}
                    onSubmit={this.handleCompletion}
                    initialValues={{
                        listTitle: "",
                        itemTitle: "",
                        itemQuantity: 0,
                        itemCalories: 0,
                        itemDate: "",
                        itemExpiration: "",
                        itemConsumption: "" 
                    }}
                >
                    {({
                        handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            touched,
                            isValid,
                            errors
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group className="form-group" as={Row} controlId="listTitle">
                                    <Form.Label> List title </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="listTitle"
                                        value={values.listTitle}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.listTitle && !errors.listTitle}
                                        isInvalid={touched.listTitle && !!errors.listTitle}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.listTitle}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="2" controlId="itemTitle">
                                    <Form.Label> Item </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="itemTitle"
                                        value={values.itemTitle}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.itemTitle && !errors.itemTitle}
                                        isInvalid={touched.itemTitle && !!errors.itemTitle}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.itemTitle}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="itemQuantity">
                                    <Form.Label> Quantity </Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="itemQuantity"
                                        value={values.itemQuantity}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.itemQuantity && !errors.itemQuantity}
                                        isInvalid={touched.itemQuantity && !!errors.itemQuantity}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.itemQuantity}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="itemCalories">
                                    <Form.Label> Calories </Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="itemCalories"
                                        value={values.itemCalories}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.itemCalories && !errors.itemCalories}
                                        isInvalid={touched.itemCalories && !!errors.itemCalories}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.itemCalories}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="itemDate">
                                    <Form.Label> Date of purchase </Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="itemDate"
                                        value={values.itemDate}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.itemDate && !errors.itemDate}
                                        isInvalid={touched.itemDate && !!errors.itemDate}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.itemDate}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="itemExpiration">
                                    <Form.Label> Date of expiration </Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="itemExpiration"
                                        value={values.itemExpiration}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.itemExpiration && !errors.itemExpiration}
                                        isInvalid={touched.itemExpiration && !!errors.itemExpiration}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.itemExpiration}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="itemConsumption">
                                    <Form.Label> Date of consumption </Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="itemConsumption"
                                        value={values.itemConsumption}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.itemConsumption && !errors.itemConsumption}
                                        isInvalid={touched.itemConsumption && !!errors.itemConsumption}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.itemConsumption}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                        </Form>

                    )}

                </Formik>
            </div>
        )
    }
}

export default ListAddForm;
