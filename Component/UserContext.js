export const UserContext = React.createContext();

const UserProvider = (props) => {
  const contextValue = {...yourContext};

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
