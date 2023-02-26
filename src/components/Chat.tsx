import React from "react";

interface ChatProps {
  username: string;
  children?: React.ReactNode;
  adicionaMensagens: () => void;
  mensagensList: any;
  mensage: string;
  setMensagem: (e: { target: { value: React.SetStateAction<string> } }) => void;
}

const Chat: React.FC<ChatProps> = ({
  username,
  adicionaMensagens,
  mensagensList,
  mensage,
  setMensagem,
}) => {
  console.log(mensagensList);
  return (
    <div className="contentChat">
      <div className="card">
        <div className="chat-header">Chat - {username}</div>
        <div className="chat-window">
          <ul className="message-list">
            {mensagensList.map((mensagem: any) => {
              return mensagem.user !== username ? (
                <li className="boxTextUserSecondary">{mensagem.mensagens}</li>
              ) : (
                <li className="boxTextUserPrimary">{mensagem.mensagens}</li>
              );
            })}
          </ul>
        </div>
        <div className="chat-input">
          <input
            onChange={setMensagem}
            type="text"
            value={mensage}
            className="message-input"
            placeholder="Type your message here"
          />
          <button onClick={adicionaMensagens} className="send-button">
            Send
          </button>
        </div>
      </div>
      <div>{/* <button onClick={limparChat}>Limpar chat</button> */}</div>
    </div>
  );
};

export default Chat;
