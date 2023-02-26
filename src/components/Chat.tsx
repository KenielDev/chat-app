import React, { useRef } from "react";
import { ChatProps, MensagensProps } from "../interfaces/interfaces";
import IconSendMessage from "./IconSendMessage";

const Chat: React.FC<ChatProps> = ({
  username,
  adicionaMensagens,
  mensagensList,
  mensage,
  setMensagem,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    adicionaMensagens();
    formRef.current?.reset();
    setMensagem({ target: { value: "" } });
  }

  return (
    <div className="contentChat">
      <div className="card">
        <div className="chatHeader">Chat - {username}</div>
        <div className="chatWindow">
          <ul className="listMessage">
            {mensagensList.map((mensagem: MensagensProps) => {
              return (
                <li
                  className={`${
                    mensagem.user !== username
                      ? "boxTextUserSecondary"
                      : "boxTextUserPrimary"
                  }`}
                >
                  {mensagem.mensagens}
                </li>
              );
            })}
          </ul>
        </div>
        <form ref={formRef} className="chatForm" onSubmit={submitForm}>
          <input
            onChange={setMensagem}
            type="text"
            value={mensage}
            className="messageInput"
            placeholder="Escreva a sua mensagem..."
          />
          <button type="submit" className="sendButton">
            <IconSendMessage />
          </button>
        </form>
      </div>
      <div>{/* <button onClick={limparChat}>Limpar chat</button> */}</div>
    </div>
  );
};

export default Chat;
