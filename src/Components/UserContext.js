import React, { createContext } from "react";

const UserContext = createContext("default contexts is me");
const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;
export { UserProvider, UserConsumer };
