import React from "react";

const EMPTY = Symbol();

export function createContainer(useHook) {
  let Context = React.createContext(EMPTY);

  function Provider(props) {
    let value = useHook(props.initialState);
    return <Context.Provider value={value}>{props.children}</Context.Provider>;
  }

  function useContainer() {
    let value = React.useContext(Context);
    if (value === EMPTY) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }
    return value;
  }

  return { Provider, useContainer };
}

export function useContainer(container) {
  return container.useContainer();
}
