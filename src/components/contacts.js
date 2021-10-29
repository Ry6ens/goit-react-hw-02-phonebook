import styles from "./styles.module.css";
// // import { Component } from "react";
// import { v4 as uuid } from "uuid";
// import PropTypes from "prop-types";
// id={this.prodIdElem}

export function Contacts({ contacts, id, filter, handleChange }) {
  return (
    <form className={styles.contacts}>
      <label id={id}>Find contacts by name</label>
      <input
        onChange={handleChange}
        id={id}
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
          <li id={id}>
            {el.name}: {el.number}
          </li>
        ))}
      </ul>
    </form>
  );
}

<video id="vgc-player_html5_api"
    data-master="https://player02.getcourse.ru/player/dd68c2a236a3aea9dd26ba1feb6a3fdd/9895a160b5a190cecbb5123fdf03b5f7/master.m3u8?sid=sid&amp;host=vh-45&amp;user-cdn=integros&amp;akamai-cdn-pr=0&amp;v=4%3A2%3A1%3A1&amp;user-id=204558871" data-mp4="" data-ready="1" poster="https://vh-45.getcourse.ru/preview/dd68c2a236a3aea9dd26ba1feb6a3fdd/9895a160b5a190cecbb5123fdf03b5f7/preview.jpg?v=1635251897" class="vjs-tech" preload="none" crossorigin="anonymous" tabindex="-1"
    src="blob:https://player02.getcourse.ru/ffaae992-8a02-4e16-9352-f33a4798036b"><track kind="metadata" label="segment-metadata"></video>