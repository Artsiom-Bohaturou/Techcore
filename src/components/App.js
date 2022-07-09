import '../css/App.scss';
import Breadcrumbs from './Breadcrumbs';
import LocationSettings from './Locations/LocationSettings';
import Menu from './Menu/Menu';
import 'antd/dist/antd.css';

export default function App() {
    return (
        <div className='App'>
            <Menu />
            <main className='Content'>
                <Breadcrumbs />
                <LocationSettings />
            </main>
        </div>
    );
}

