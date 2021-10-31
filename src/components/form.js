import styles from "./styles.module.css";
import PropTypes from "prop-types";

import { Component } from "react";
import { v4 as uuid } from "uuid";

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const obj = {
      name: name,
      number: number,
    };
    // this.setState({ contacts: obj });
    this.props.addNewContact(obj); // метод из App
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...this.state });
  };

  prodIdForm = uuid();
  prodIdName = uuid();
  prodIdNumber = uuid();
  prodIdFind = uuid();

  render() {
    const { name, number } = this.state;
    const { prodIdForm, prodIdName, prodIdNumber, handleChange, handleSubmit } =
      this;
    return (
      <>
        <form className={styles.frame} onSubmit={handleSubmit} id={prodIdForm}>
          <label htmlFor={prodIdName}>Name</label>
          <input
            onChange={handleChange}
            id={prodIdName}
            className={styles.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <label htmlFor={prodIdNumber}>Number</label>
          <input
            onChange={handleChange}
            id={prodIdNumber}
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
