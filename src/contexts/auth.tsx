import { createContext, useState } from "react";

interface AuthContextProps {
  showLoginModal: boolean;
  handleOpenModal(): void;
  handleCloseModal(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(true);

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };
  const handleOpenModal = () => {
    setShowLoginModal(true);
  };

  return (
    <AuthContext.Provider
      value={{
        showLoginModal,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
