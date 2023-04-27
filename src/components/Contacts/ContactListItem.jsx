import PropTypes from 'prop-types';
import css from './Contacts.module.css';

export const ContactListItem = ({ name, number, deleteContact, id }) => {
  return (
    <li className="contacts__item">
      {name}: {number}
      <button
        type="button"
        onClick={() => deleteContact(id)}
        className={css.button}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
