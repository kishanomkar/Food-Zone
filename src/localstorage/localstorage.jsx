// localstorage.jsx

// Dummy initial users
const defaultUsers = [
  {
    id: 1,
    name: "Kishan",
    email: "kishan@example.com",
    password: "123456",
    cart: [],
  },
  {
    id: 2,
    name: "Omkar",
    email: "omkar@example.com",
    password: "abcdef",
    cart: [],
  }
];

// Save default users if not present
export const initUsers = () => {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(defaultUsers));
  }
};

// Fetch users
export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

// Add new user
export const addUser = (newUser) => {
  const users = getUsers();
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
};

// Login validation
export const validateUser = (email, password) => {
  const users = getUsers();
  return users.find((user) => user.email === email && user.password === password);
};

// Store current logged in user
export const setLoggedInUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getLoggedInUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};
