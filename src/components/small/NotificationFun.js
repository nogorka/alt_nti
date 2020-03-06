import React from 'react';
import '../../App.css';
import '../small/buttons.css';
import style from '../../modules/style';
import {useState} from 'react';

const Notification = (props) => {

    let [state, setState] = useState(false);

    const openNotPanel = () => {
        setState(true);
    }
    const closeNotPanel = () => {
        setState(false);
    }

    const RenderBtn = () => {
        return (
            <button
                className="btn not-open-btn"
                style={style.unabledElement}
                onClick={openNotPanel}>

            </button>
        );
    }
    const RenderBox = () => {
        return (
            <div className="screen not-panel-align">
                <div
                    className="gray-screen"
                    style={style.lowerElement}>
                </div>

                <div
                    className='msg-box'
                    style={style.upperElement}>
                    <button className='btn not-close-btn' onClick={closeNotPanel}></button>
                    <div className='not-text normal-text'>{msg}</div>
                </div>
            </div>
        );
    }

    return (
       state ? <RenderBox/> : <RenderBtn/>
    
    );
}

export default Notification;