import '../../css/Menu.scss';
import AdditionalMenu from './AdditionalMenu';
import MainMenu from './MainMenu';

export default function Menu() {

    return (
        <div className='Menu'>
            <MainMenu />
            <AdditionalMenu />
        </div>
    );
}