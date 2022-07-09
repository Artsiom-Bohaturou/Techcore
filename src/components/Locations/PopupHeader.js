import '../../css/PopupHeader.scss';

export default function PopupHeader({ popupTitle, closeFunction }) {
    return (
        <div className='PopupHeader'>
            <h3 className='PopupTitle'>{popupTitle}</h3>
            <div onClick={() => closeFunction(false)} className='PopupCloseIcon'></div>
        </div>
    );
}