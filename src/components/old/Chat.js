import React from 'react';

import '../../../App.css';
import '../../small/buttons.css';
import style from '../../modules/style';

import Message from '../small/chat/Message';

class Chat extends React.Component {

    constructor() {
        super()
        this.state = { chat: false }
    }
    openChatBox = () => {
        this.setState({ chat: true })
    }
    closeChatBox = () => {
        this.setState({ chat: false })
    }
    renderChat = (messages) => {

        let messageArray = messages.map(
            (el) => <Message key={el.id} content={el.text} date={el.date_send}/>
        );

        return (
            <div className="chat-box blck-border">
                <button
                    className="close-chat-btn option-text-m"
                    onClick={this.closeChatBox}>
                    disable chat
                </button>
                {messageArray}

            </div >
        );
    }
    renderBtn = () => {
        return (
            <div
                className="btn open-chat-btn"
                style={style.unabledElement}
                onClick={this.openChatBox}>

            </div>
        );
    }
    render() {
        let messages = JSON.parse(localStorage.getItem("notifications"));
        if (this.state.chat) {
            return this.renderChat(messages);
        } else {
            return this.renderBtn();
        }
    }
}

export default Chat;