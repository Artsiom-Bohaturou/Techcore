import { useState } from 'react';
import '../../css/AdditionalCardSettings.scss';
import editIcon from '../../icons/Vector.svg';
import favoriteIcon from '../../icons/Vector(1).svg';
import deleteIcon from '../../icons/Vector(2).svg';

export default function AdditionalCardSettings({ setVisibleDeletePopup }) {
    const [isActive, setActive] = useState(false);

    const openMenu = () => {
        setActive(!isActive);
    }

    const showDeletePopup = () => {
        setVisibleDeletePopup(true);
    }

    return (
        <div className='AdditionalCardSettings' >
            <div onClick={openMenu} className={`AdditionalSettingsIcon ${isActive ? 'Active' : ''}`}>
                <span></span>
            </div>
            <ul className='AdditionalCardSettingsMenu' hidden={!isActive}>
                <li className='AdditionalCardSettingsMenuItem'>
                    <img alt='' draggable='false' src={editIcon} /> Edit
                </li>
                <li className='AdditionalCardSettingsMenuItem'>
                    <img alt='' draggable='false' src={favoriteIcon} /> Set as Default
                </li>
                <li onClick={showDeletePopup} className='AdditionalCardSettingsMenuItem'>
                    <img alt='' draggable='false' src={deleteIcon} /> Delete
                </li>
            </ul>

        </div>
    );
}