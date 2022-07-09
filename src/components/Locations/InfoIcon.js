import '../../css/InfoIcon.scss';
import icon from '../../icons/info 1 (Traced).svg';

export default function InfoIcon({ text }) {
    return (
        <div className="InfoIcon">
            <img src={icon} alt='i' />
            <p className='InfoText'>{text}</p>
        </div>
    );
}