import '../css/Button.scss';

export default function Button({ buttonText, clickFunction, additionalClasses }) {
    return (
        <button onClick={() => clickFunction()} className={`Button ${additionalClasses}`}>{buttonText}</button>
    );
}