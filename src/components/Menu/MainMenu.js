import Logo from './Logo';
import '../../css/MainMenu.scss';
import Navigation from './Navigation';
import UserProfile from './UserProfile';

export default function MainMenu() {
    return (
        <div className='MainMenu'>
            <div>
                <Logo />
                <Navigation />
            </div>
            <UserProfile />
        </div>
    );
}