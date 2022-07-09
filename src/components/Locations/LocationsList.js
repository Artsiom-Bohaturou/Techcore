import { useSelector } from 'react-redux';
import '../../css/LocationsList.scss';
import LocationCard from './LocationCard';

export default function LocationsList() {

    const data = useSelector((state) => state.locationSettings.locationsList);

    return (
        <div className='LocationsList'>
            {data.map((e) => <LocationCard key={e.id} data={e} />)}
        </div>
    );
}