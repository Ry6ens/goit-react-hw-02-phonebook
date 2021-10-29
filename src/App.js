import { Component } from "react";
import { Section } from "./components/section.js";
import { ContactForm } from "./components/form.js";
import { Filter } from "./components/filter.js";
import { ContactsList } from "./components/contactList.js";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addNewContact = (task) => {
    const searchSameName = this.state.contacts
      .map((cont) => cont.name)
      .includes(task.name);

    if (searchSameName) {
      alert(`${task.name} is already in contacts`);
    } else if (task.name.length === 0) {
      alert("Fields must be filled!");
    } else {
      const obj = {
        ...task,
        // id: uuidv4(),
      };

      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, obj],
        };
      });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="App">
        <Section title="PhoneBook">
          <ContactForm addNewContact={this.addNewContact} />
        </Section>
        <Section title="Contacts">
          <Filter
            contacts={this.state.contacts}
            id={this.prodIdFind}
            filter={this.state.filter}
            handleChange={this.handleChange}
          />
          <ContactsList
            contacts={this.state.contacts}
            filter={this.state.filter}
          />
        </Section>
      </div>
    );
  }
}

export default App;
