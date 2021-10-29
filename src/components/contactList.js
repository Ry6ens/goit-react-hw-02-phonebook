import styles from "./styles.module.css";
import shortid from "shortid";

export function ContactsList({ contacts, filter, alert }) {
  //   const alert = useAlert();
  const filterPB = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <form className={styles.contacts}>
      <ul className={styles.items}>
        {filterPB.map((el) => (
          <li key={shortid.generate()}>
            {el.name}: {el.number}
          </li>
        ))}
      </ul>
    </form>
  );
}
