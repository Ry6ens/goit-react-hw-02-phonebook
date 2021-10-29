import styles from "./styles.module.css";
import { v4 as uuid } from "uuid";
import shortid from "shortid";

export function Contacts({ contacts, prodIdFind, filter, handleChange }) {
  prodIdFind = uuid();
  return (
    <form className={styles.contacts}>
      <label htmlFor={prodIdFind}>Find contacts by name</label>
      <input
        onChange={handleChange}
        id={prodIdFind}
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <ul className={styles.items}>
        {contacts.map((el) => (
          <li key={shortid.generate()}>
            {el.name}: {el.number}
          </li>
        ))}
      </ul>
    </form>
  );
}
