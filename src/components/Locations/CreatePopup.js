import PopupHeader from "./PopupHeader";
import '../../css/CreatePopup.scss';
import CreateForm from "./CreateForm";

export default function CreatePopup({ setVisibleCreatePopup, visibleCreatePopup }) {


    return (
        <div className={`CreatePopup ${visibleCreatePopup ? 'Active' : ''}`}>
            <div className="CreatePopupContainer">
                <PopupHeader popupTitle='CreateLocation' closeFunction={setVisibleCreatePopup} />
                <div className="CreatePopupContent">
                    <CreateForm closeFunction={setVisibleCreatePopup} />
                </div>
            </div>
        </div>
    );
}