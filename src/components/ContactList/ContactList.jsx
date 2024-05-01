import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const elements = filteredContacts.map((contact) => (
    <li key={contact.id}>
      <Contact name={contact.name} number={contact.number} id={contact.id} />
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default ContactList;
