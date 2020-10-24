import React from "react";
import { UserConsumer } from "./UserContext";

function ComponentF() {
  return (
    <UserConsumer>
      {/* the function bellow gets
			 the userProvider value in App.js 
			 as it's parameter */}
      {(value) => <h1>{value}</h1>}
    </UserConsumer>
  );
}

export default ComponentF;
