import PropTypes from 'prop-types';
import { Item, Btn } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { remove } from "redux/contactsSlice/contactsSlice";

export const ContactItem = ({ id, name, number}) => {
        const dispatch = useDispatch();
    return (
        <>
    <Item id={id}><p>{name}: <span>{number}</span></p> 
                <Btn onClick={() => dispatch(remove(id))} type='button'>Delete</Btn>
            </Item>
        </>
    )
}
ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
}