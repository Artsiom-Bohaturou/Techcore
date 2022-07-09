import '../../css/LocationSettings.scss';
import Button from '../Button';
import CreatePopup from './CreatePopup';
import LocationsList from './LocationsList';
import { useState } from 'react';

export default function LocationSettings() {
    const [visibleCreatePopup, setVisibleCreatePopup] = useState(false);

    const showPopup = () => {
        setVisibleCreatePopup(true);
    }

    return (
        <div className='LocationSettings'>
            <div className='LocationSettingsHeader'>
                <div>
                    <h2 className="LocationSettingsTitle">Locations</h2>
                    <p className="LocationSettingsDescription">Create new users or update the existing users. You can then set their permissions here too.</p>
                </div>
                <Button buttonText='Create Location' additionalClasses='LocationSettingsButton' clickFunction={showPopup} />
            </div>
            <LocationsList />
            <CreatePopup setVisibleCreatePopup={setVisibleCreatePopup} visibleCreatePopup={visibleCreatePopup} />
        </div>
    );
}