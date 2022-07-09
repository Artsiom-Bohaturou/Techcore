import '../../css/CreateForm.scss';
import { Checkbox, Input, InputNumber, Select } from "antd";
import { Option } from 'antd/lib/mentions';
import InfoIcon from './InfoIcon';
import { useDispatch } from 'react-redux';
import { addLocationAC } from '../../store/LocationSettingsActions';

export default function CreateForm({ closeFunction }) {
    const weekdays = [{ label: 'Sunday', value: 'Sunday' }, { label: 'Monday', value: 'Monday' }, { label: 'Tuesday', value: 'Tuesday' }, { label: 'Wednesday', value: 'Wednesday' }, { label: 'Thursday', value: 'Thursday' }, { label: 'Friday', value: 'Friday' }, { label: 'Saturday', value: 'Saturday' }];
    const userList = ['Julia Senko', 'Aleksandr', 'Jessica Monro'];
    const dispatch = useDispatch();

    const closePopup = (e) => {
        e.preventDefault();
        closeFunction(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[21]);
        if (e.target[1].value) {
            const data = {
                id: '4',
                countryName: e.target[1].value,
                holidaysLink: '',
                leavePolicies: '',
                isDefault: e.target[23].value,
                users: []
            }
            dispatch(addLocationAC(data));
            closeFunction(false);
        }
    }

    return (
        <form className='CreateForm' onSubmit={handleSubmit}>
            <fieldset className='NameFieldset' id='LocationForm'>
                <Input placeholder='Location Name' />
            </fieldset>

            <fieldset className='WorkweekFieldset' required>
                <label>Workweek<span className='RequiredField'>*</span></label>
                <Checkbox.Group options={weekdays} />
            </fieldset>

            <fieldset className='QuoteReset'>
                <label className='InputLabel'>Leave Quota Reset Based On</label>
                <Select size='large' defaultValue='year'>
                    <Option value='year'>Accounting year</Option>
                    <Option value='employment'>Use employment date</Option>
                </Select>
                <InfoIcon text={`This setting will determine if your leave balance will be reset based on the accounting year (company's fiscal year) or based on the employee's start date. Besides quotas, your roll-over policy will also be affected according to this setting.`} />
            </fieldset>

            <fieldset className='YearStart'>
                <label className='InputLabel'>Fiscal Year Start</label>
                <Select size='large' defaultValue='January'>
                    <Option value='January'>January</Option>
                    <Option value='February'>February</Option>
                </Select>
                <InputNumber size='large' min={1} max={10} defaultValue={1} />
            </fieldset>

            <fieldset>
                <Checkbox>No Brought Forward Expiry Date</Checkbox> <InfoIcon text={`Each year, the user's rolled over leaves will expire on the date you set. The quotas for each leave type are configured through the Leave Types section for this location and each can be set individually to allow or not allow roll overs.`} />
            </fieldset>

            <fieldset className='WeekStart'>
                <label className='InputLabel'>Week Starts on</label>
                <Select size='large' defaultValue='Monday'>
                    <Option value='Monday'>Monday</Option>
                    <Option value='Sunday'>Sunday</Option>
                </Select>
            </fieldset>

            <fieldset className='Timezone'>
                <label className='InputLabel'>Timezone<span className='RequiredField'>*</span></label>
                <Select size='large' defaultValue='Minsk'>
                    <Option value='Minsk'>(GMT+03:00) Minsk</Option>
                    <Option value='Vilnius'>(GMT+02:00) Vilnius</Option>
                </Select>
                <InfoIcon text='This default time zone is used throughout the system. For example for accurately displaying leave information in the calendar and for the system events listed in the Logs.' />
            </fieldset>

            <fieldset className='AddUsers'>
                <Select
                    mode="multiple"
                    allowClear
                    size='large'
                    placeholder="Add users"
                >
                    {userList.map((e, i) => <Option key={i}>{e}</Option>)}
                </Select>
            </fieldset>

            <fieldset className='SetDefault'><Checkbox>Make this location default</Checkbox> <InfoIcon text='By making this Location the default one, all new team members will be automatically added to this Location.' /></fieldset>

            <p className='AdditionalInfo'>
                Once you've created a Location, assign a <a href=''>Leave Policy</a> to the Location, in order to enable Users to request Leave.  To assign a Leave Policy, go to Location {'>'} Leave Policies {'>'} Assign Leave Policy.
            </p>

            <div className='ButtonsContainer'>
                <button onClick={closePopup} className='Button CloseButton'>Close</button>
                <button className='Button CreateButton' type='submit'>Create</button>
            </div>
        </form>
    );
}