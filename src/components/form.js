import styles from "./styles.module.css";
// import PropTypes from "prop-types";

import { Component } from "react";
import { v4 as uuid } from "uuid";

export class Form extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
    product: null,
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
    this.setState({ product: obj });
    // this.props.addNewContact(obj); // метод из App

    // this.setState((prevState) => {
    //   return {
    //     contacts: [...prevState.contacts, obj],
    //   };
    // });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...this.state });
  };

  prodIdName = uuid();
  prodIdNumber = uuid();

  render() {
    const { name, number, filter, contacts } = this.state;
    const { prodIdName, handleChange, prodIdNumber } = this;
    return (
      <>
        <form
          className={styles.frame}
          onSubmit={this.handleSubmit}
          id={prodIdName}
        >
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
        <form
          className={styles.frame}
          id={prodIdName}
          onSubmit={this.handleSubmit}
        >
          <label htmlFor={prodIdNumber}>Find contacts by name</label>
          <input
            onChange={handleChange}
            id={prodIdNumber}
            className={styles.input}
            type="filter"
            name="filter"
            value={filter}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <ul className={styles.items}>
            {contacts.map((el) => (
              <li id={prodIdNumber}>
                {el.name}: {el.number}
              </li>
            ))}
          </ul>
        </form>
      </>
    );
  }
}
