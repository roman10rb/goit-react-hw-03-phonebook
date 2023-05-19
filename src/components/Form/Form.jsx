import { Component } from "react";

import css from'./Form.module.css'


class Form extends Component{

    state = {
        name: '',
        number: '',
    }


    handleChange = (event) => {
        this.setState({
            name: event.currentTarget.value,
        })
    };
    handleChangeNumber = (event) => {
        this.setState({
            number: event.currentTarget.value,
        })
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submitContact(this.state);
        this.reset();
    }

 

    render() {
        return (<div>
            <div> 
         <h2>Name</h2>
        <form onSubmit={this.handleSubmit}>
            <label>
            <input
                onChange={this.handleChange}
               value={this.state.name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                        /></label>
                    <h2>Number</h2>
                    <label>
                        <input
                            value={this.state.number}
                            onChange={this.handleChangeNumber}
                        type="tel"
                        name="number"
                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
                    <p>
                        <input type="submit" value={'add contact'} className={css.addContact}/>
                    </p>
                
            </form>
        </div></div>
       )  
    }

}

export default  Form;