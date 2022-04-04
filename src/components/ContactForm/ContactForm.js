import React, { Component } from 'react';
import shortid from 'shortid';
import {
  ContactFormContainer,
  ContactFormLabel,
  ContactFormInput,
  ContactFormBtn,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };
  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value, id: shortid.generate() });
  };
  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    return this.setState({ name: '', number: '', id: '' });
  };

  render() {
    return (
      <ContactFormContainer onSubmit={this.onFormSubmit}>
        <ContactFormLabel>Name</ContactFormLabel>
        <ContactFormInput
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleInputChange}
        />
        <ContactFormLabel>Number</ContactFormLabel>
        <ContactFormInput
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleInputChange}
        />
        <ContactFormBtn type="submit">Add Contact</ContactFormBtn>
      </ContactFormContainer>
    );
  }
}

export default ContactForm;
