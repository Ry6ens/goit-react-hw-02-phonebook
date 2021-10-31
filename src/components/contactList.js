import styles from "./styles.module.css";
import shortid from "shortid";
import PropTypes from "prop-types";

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

ContactsList.propTypes = {
  filter: PropTypes.func.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
