import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [Modal, setModal] = useState(false);

  return (
    <AuthContext.Provider
      value={{ email, setEmail, senha, setSenha, Modal, setModal, nome, setNome }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
