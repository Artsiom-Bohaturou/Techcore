import '../../css/Navigation.scss';
import NavigationItem from './NavigationItem';

import homeIcon from '../../icons/home 1 (Traced).svg';
import usersIcon from '../../icons/group 1 (Traced).svg';
import settingsIcon from '../../icons/setting 1 (Traced).svg';
import folderIcon from '../../icons/folder 1 (Traced).svg';
import calendarIcon from '../../icons/icon-vacation-manager.svg';

export default function Navigation() {
    return (
        <nav className='Navigation'>
            <ul>
                <NavigationItem icon={homeIcon} text='Dashboard' />
                <NavigationItem icon={usersIcon} text='Users' />
                <NavigationItem icon={settingsIcon} text='Settings' isActive={true} />
                <NavigationItem icon={folderIcon} text='P&L' />
                <NavigationItem icon={calendarIcon} text='Vacation Manager' />
            </ul>
        </nav>
    );
}