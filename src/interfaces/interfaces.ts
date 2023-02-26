export interface MensagensProps {
  user: string;
  mensagens: string;
}

export interface ChatProps {
  username: string;
  children?: React.ReactNode;
  adicionaMensagens: () => void;
  mensagensList: any;
  mensage: string;
  setMensagem: (e: { target: { value: React.SetStateAction<string> } }) => void;
}
