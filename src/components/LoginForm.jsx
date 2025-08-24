import "../App.css";

export function LoginForm({
  username,
  handleSetUsername,
  password,
  handleSetPassword,
  handleAuthentication,
}) {
  function handleChangeUsername(value) {
    handleSetUsername(value);
  }

  function handleChangePassword(value) {
    handleSetPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password);

    if (username === "harshal" && password === "1234") {
      handleAuthentication(true);
    }
  }

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          name="username"
          autoFocus={true}
          value={username}
          onChange={(e) => handleChangeUsername(String(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => handleChangePassword(String(e.target.value))}
        />
      </div>
      <div className="form-group">
        <input type="submit" value="Login" />
      </div>
    </form>
  );
}
