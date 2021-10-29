import { Component } from "react";
import { Section } from "./components/section.js";
import { Form } from "./components/form.js";
import { Contacts } from "./components/contacts.js";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  addNewContact = (obj) => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, obj],
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Section title="PhoneBook">
          <Form addNewContact={this.addNewContact} />
        </Section>
        <Section title="Contacts">
          <Contacts
            contacts={this.state.contacts}
            id={this.prodIdFind}
            filter={this.filter}
          />
        </Section>
      </div>
    );
  }
}

export default App;
