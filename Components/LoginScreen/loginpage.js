import React from "react";

function LoginScreen() {
  return (
    <>
      <form>
        <label for="fname">Email:</label>
        <br />
        <input type="text" id="email" name="email" />
        <br />
        <label for="fname">Password:</label>
        <br />
        <input type="text" id="password" name="password" />
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}

export default LoginScreen;