import styles from "./styles.module.css";
// import PropTypes from "prop-types";

import { Component } from "react";
import { v4 as uuid } from "uuid";

export class Form extends Component {
  state = {
    filter: "",
    name: "",
    number: "",
    product: [],
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
    console.log(obj);
    this.setState({ contacts: obj });
    // метод из App
    this.props.addNewContact(obj);
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
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
