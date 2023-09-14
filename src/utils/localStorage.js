export const getUser = () => {
  return JSON.parse(localStorage.getItem('account'));
}

export const addUser = ({ name, email, password }) => {
  const user = {
    name,
    email,
    password
  }
  localStorage.setItem('account', JSON.stringify(user));
  return user;
}

export const getSignOutStatus = () => {
  return localStorage.getItem('sign-out') === "true";
}

export const addSignOutStatus = (isLogged) => {
  const status = Boolean(isLogged);
  localStorage.setItem('sign-out', status);
  return status;
}