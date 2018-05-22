import React, { Component}  from 'react';
import { Field, reduxForm } from 'redux-form';


const FileInput = ({ input, resetKey }) => {
	const { value, ...inputProps } = input

	const onImageChange = (e) => {
		input.onChange(e.target.files[0])
  }
 
	return (
		<input {...inputProps} key={resetKey} type="file" onChange={onImageChange} onBlur={() => {}} />
	)
}

const validate = (values) => {
  const errors = {};
  
  if(!values.name) {
    errors.name = {
      message: 'You need to provide First Name'
    }
  }

  if(!values.date) {
    errors.date = {
      message: 'You need to provide an date'
    }
  }

  if(!values.languaje) {
    errors.languaje = {
      message: 'You need to provide an Languaje'
    }
  } 
  return errors;
}

class MovieForm extends Component {

  componentWillReceiveProps = (nextProps) => { 
    const { movie } = nextProps;
    if(movie.id !== this.props.movie.id) {
      this.props.initialize(movie)
    }
  }



  render() {
    const { handleSubmit, pristine, submitting, loading, movie } = this.props;
    return (
      <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Date</label>
        <div>
          <Field
            name="date"
            component="input"
            type="date"
            placeholder="Date"
          />
        </div>
      </div>
      <div>
        <label>Languaje</label>
        <div>
          <Field
            name="languaje"
            component="input"
            type="text"
            placeholder="Languaje"
          />
        </div>
      </div>      

      <div>
        <label>Photo</label>
        <div>         
          <Field
            name="file"            
            type="file"
            placeholder="Photo"
            component={FileInput} 
            onChange={this.handleFileChange}            
          />
        </div>
        { movie.id &&
          <img src={`http://localhost:1337/${movie.id}.jpg`}/>
        }
        
        
      </div>      


      <div style={{ 'text-align' :'center', 'border-top': '1px solid', 'margin': '5px', 'padding': '15px'} }>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>

      
    )
  }
}

export default reduxForm({form: 'movie', validate})(MovieForm);
