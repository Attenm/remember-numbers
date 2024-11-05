import './contactsPage.scss';
import PlusButton from '../../components/buttons/PlusButton/PlusButton.js';
import { contacts } from '../../data.js';
import ContactItem from '../../components/ContactItem/ContactItem.js';

function ContactsPage() {
    const contactsCount = contacts.length - 1;
    // const [numberSectionList, setNumberSectionList] = useState([]);

    return (
        <div className="contacts__wrapper">
            Contacts <p className='contacts__count'>{contactsCount}</p>
            <ul className='contacts__list'>
                    {contacts.map(contact => {
                        return (
                            <ContactItem
                                key={contacts.number}
                                name={contact.name}
                                number={contact.number}
                            />
                        )
                    })}
            </ul>
            <PlusButton {...{}} />
        </div>
    )
}

export default ContactsPage;