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