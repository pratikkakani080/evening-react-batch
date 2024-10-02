import React from "react";
import AuthContext from ".";

function AuthContextProvider({ children }) {
  return (
    <div>
      <AuthContext.Provider value={{ data: "test" }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthContextProvider;
