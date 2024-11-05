import './noContactsPage.scss';
import SubmitBtn from '../../components/buttons/SubmitBtn/SubmitBtn.js'

function NoContactsPage() {
    function handlerClick(e) {
        e.preventDefault();
        console.log('click handled')
    }
    return (
        <div className="no-contacts__wrapper">
            No Contacts
            <SubmitBtn text='Add contacts' handlerClick={handlerClick}/>
        </div>
    )
}

export default NoContactsPage;