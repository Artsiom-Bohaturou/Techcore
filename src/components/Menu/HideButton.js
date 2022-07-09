import '../../css/HideButton.scss';

export default function HideButton({ isActive, setActive }) {

    const hideAdditionalMenu = () => {
        setActive(!isActive);
    }

    return (
        <button
            onClick={hideAdditionalMenu}
            className='HideButton'>
            <div className={`Arrow ${isActive ? 'Active' : ''}`}></div>
        </button>
    );
}