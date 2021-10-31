import styles from "./styles.module.css";
import shortid from "shortid";

export function ContactsList({ contacts, filter, onRemoveContact }) {
  const filterPB = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <form className={styles.contacts}>
      <ul className={styles.items}>
        {filterPB.map((el) => (
          <li key={shortid.generate()}>
            {el.name}: {el.number}
            <button
              type="button"
              className={styles.button__list}
              onClick={() => onRemoveContact(el.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}
