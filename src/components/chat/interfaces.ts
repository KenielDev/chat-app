export interface ChatProps {
  username: string;
  mensagens?: string;
  adicionaMensagem: (mensagem: MensagensProps) => void;
}

export interface ChatProps {
  username: string;
  mensagem?: string;
}

export interface MensagensProps {
  user: string;
  mensagens: string;
}
