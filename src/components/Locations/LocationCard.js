import '../../css/LocationCard.scss';
import AdditionalCardSettings from './AdditionalCardSettings';
import EmployeeList from './EmployeeList';
import { useState } from 'react';
import DeletePopup from './DeletePopup';

export default function LocationCard({ data }) {
    const [visibleDeletePopup, setVisibleDeletePopup] = useState(false);

    return (
        <div className='LocationCard'>
            <h3 className='LocationCardCountryName'>
                {data.countryName}
                {data.isDefault ? <span className='LocationCardDefault'>Default</span> : ''}
            </h3>
            <div className='LocationCardCountryInfo'>
                <div>
                    <span className='LocationCardInfo'>Holidays</span>
                    <span className='LocationCardInfo'>Leave Policies</span>
                </div>
                <div>
                    <a className='LocationCardLink' href={data.holidaysLink}>View Holidays</a>
                    <a className='LocationCardLink' href={data.leavePolicies}>View Leave Policies</a>
                </div>
            </div>
            <EmployeeList users={data.users} />
            {!data.isDefault ? <AdditionalCardSettings setVisibleDeletePopup={setVisibleDeletePopup} /> : ''}
            <DeletePopup countryId={data.id} countryName={data.countryName} visible={visibleDeletePopup} setVisible={setVisibleDeletePopup} />
        </div>
    );
}