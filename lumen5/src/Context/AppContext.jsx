import React, { useState } from "react";
export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: true,
    token: null
  });

  function handleLogin(token) {
    setState({
      ...state,
      isAuth: true,
      token: token
    });
  }
  function handleLogout() {
    setState({
      ...state,
      isAuth: false,
      token: null
    });
  }

  return (
    <>
      <AppContext.Provider value={{ state, handleLogin, handleLogout }}>
        {children}
      </AppContext.Provider>
    </>
  );
}

export default AppContextProvider;
