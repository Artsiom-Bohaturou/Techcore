import settingsIcon from '../icons/setting 1 (Traced).svg';
import arrow from '../icons/Shape.svg';
import '../css/Breadcrumbs.scss';

export default function Breadcrumbs() {
    return (
        <div className='Breadcrumbs'>
            <a className='BreadcrumbLink'><img className='BreadcrumbsIcon' src={settingsIcon} alt=' ' draggable='false' /> Settings</a>
            <img className='BreadcrumbArrow' src={arrow} alt='>' draggable='false' />
            <a className='BreadcrumbLink'>Vacation Manager</a>
        </div>
    );
}