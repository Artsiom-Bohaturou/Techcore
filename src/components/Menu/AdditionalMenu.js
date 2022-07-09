import '../../css/AdditionalMenu.scss';
import settingsLogo from '../../icons/settings-2 1 (Traced).svg';
import calendarIcon from '../../icons/booking-2 1 (Traced).svg';
import HideButton from './HideButton';
import { useState } from 'react';


export default function AdditionalMenu() {
    const [isActive, setActive] = useState(false);

    return (
        <div className={`AdditionalMenu ${isActive ? 'Active' : ''}`}>
            <h2 className='TabName'>Settings</h2>
            <ul className='SettingsList'>
                <li className='SettingsItem'><h3 className='SettingsTitle'><img src={settingsLogo} draggable='false' alt=' ' /> General</h3></li>
                <li className='SettingsItem'><div>
                    <h3 className='SettingsListTitle'><img src={calendarIcon} draggable='false' alt=' ' /> Vacation Manager</h3>
                    <ul className='SettingsList'>
                        <li className='SettingsListItem'>Leave Types</li>
                        <li className='SettingsListItem SettingsListActive'>Locations</li>
                    </ul>
                </div></li>
            </ul>
            <HideButton isActive={isActive} setActive={setActive} />
        </div>
    );
}