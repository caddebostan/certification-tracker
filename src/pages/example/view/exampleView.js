import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';
import Radio from 'material-ui/Radio';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import { Checkbox, RadioGroup, Select, TextField, Switch } from 'redux-form-material-ui';

import { required, email } from '../../../utilities/validation';

class ExampleView extends Component {
  componentDidMount() {
    // this.ref // the Field
    //   .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
    //   .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
    //   .focus(); // on TextField
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="name"
            component={TextField}
            placeholder="Name"
            label="Name"
            validate={required}
            withRef
          />
        </div>
        <div>
          <Field
            name="email"
            component={TextField}
            placeholder="Email"
            label="Email"
            validate={[required, email]}
          />
        </div>
        <div>
          <Field name="sex" component={RadioGroup}>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </Field>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="driver">Driver</InputLabel>
            <Field
              name="driver"
              component={Select}
              placeholder="Driver"
              autoWidth
              validate={required}
              helperText="test"
            >
              <MenuItem value="alice@redux-pizza.com">Alice</MenuItem>
              <MenuItem value="bob@redux-pizza.com">Bob</MenuItem>
              <MenuItem value="carl@redux-pizza.com">Carl</MenuItem>
            </Field>
          </FormControl>
        </div>
        <div className="list-margin">
          <FormControlLabel
            control={<Field name="thinCrust" component={Switch} />}
            label="Thin Chrust"
          />
        </div>
        <div className="list-margin">
          <FormControlLabel
            control={<Field name="pepperoni" component={Checkbox} />}
            label="Pepperoni"
          />
        </div>
        <div className="list-margin">
          <FormControlLabel
            control={<Field name="mushrooms" component={Checkbox} />}
            label="Mushrooms"
          />
        </div>
        <div className="list-margin">
          <FormControlLabel
            control={<Field name="peppers" component={Checkbox} />}
            label="Peppers"
          />
        </div>
        <div>
          <Field name="notes" component={TextField} placeholder="Notes" label="Notes" rows={4} />
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear
          </button>
        </div>
      </form>
    );
  }
}

ExampleView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

ExampleView.defaultProps = {};

const selector = formValueSelector('example');

const mapStateToProps = state => ({
  numPizzas: selector(state, 'pizzas'),
});

export default reduxForm({
  form: 'example',
})(connect(mapStateToProps)(ExampleView));
