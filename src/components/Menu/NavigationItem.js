import '../../css/NavigationItem.scss';

export default function NavigationItem({ icon, text, isActive }) {
    return (
        <li className='NavigationItem'>
            <a className='NavigationLink'>
                <img className='NavigationIcon' src={icon} alt=' ' draggable='false' />
                <span className={isActive ? 'NavigationText NavigationActive' : 'NavigationText'}>{text}</span>
            </a>
        </li>
    );
}