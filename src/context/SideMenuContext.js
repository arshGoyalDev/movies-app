import {useState, createContext} from "react";

const SideMenuContext = createContext(null);

const SideMenuProvider = ({children}) => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <SideMenuContext.Provider value={{menuOpen, setMenuOpen}}>
      {children}
    </SideMenuContext.Provider>
  );
};

export {SideMenuContext};

export default SideMenuProvider;
