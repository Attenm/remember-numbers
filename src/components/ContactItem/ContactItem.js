import './contactItem.scss';

function ContactItem({name, number}) {
    return (
        <li className='contact__item'>
            <div className='contact__item-name'>{name}</div>
            <div className='contact__item-number'>{number}</div>
        </li>
    )
}

export default ContactItem;