import React from 'react';
import Style from './../Styles/popup.module.css'

function Popup(props){
    const popupStyle={}
    if(props.type=="success"){
        popupStyle.backgroundColor="green"

    }else if(props.type=="danger"){
        popupStyle.backgroundColor="red"
    }
    return(
        <div style={popupStyle} className={Style.popupcontainer}>
            <p className={Style.popupcontainer_message}>{props.message}</p>
            <button onClick={props.closePopup} className={Style.popup_close}>X</button>
        </div>
    )
}

export default Popup;