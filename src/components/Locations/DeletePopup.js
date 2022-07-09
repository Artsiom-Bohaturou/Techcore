import '../../css/DeletePopup.scss';
import PopupHeader from './PopupHeader';
import warnIcon from '../../icons/warning 1 (Traced).svg';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { deleteLocationAC } from '../../store/LocationSettingsActions';

export default function DeletePopup({ visible, setVisible, countryName, countryId }) {
    const dispatch = useDispatch();

    const deleteLocation = () => {
        dispatch(deleteLocationAC(countryId));
        setVisible(false);
    }

    return (
        <div className={`DeletePopup ${visible ? 'Active' : ''}`}>
            <div className='DeletePopupConfirm'>
                <PopupHeader popupTitle={'Delete Location'} closeFunction={setVisible} />
                <div className='ConfirmContent'>
                    <h4 className='ConfirmMessage'>Are you sure want to delete “{countryName}” Location? </h4>
                    <div>
                        <div className='ConfirmDescriptionContainer'>
                            <img src={warnIcon} alt='' draggable='false' />
                            <p className='ConfirmDescription'>Deleting a location might impact the users' configuration and leave information (e.g. the initial brought forward days).</p>
                        </div>
                        <Button clickFunction={deleteLocation} buttonText='Yes, Delete' additionalClasses='DeleteButton' />
                    </div>
                </div>
            </div>
        </div>
    );
}