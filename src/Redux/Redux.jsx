import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Counter from "./components/Counter";

const Redux = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default Redux;
