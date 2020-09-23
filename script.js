// create a reusable function that will remove any user matching the ID that function gets passed.

//The function should accept one argument for the id, filter out any matches and return the updated array.

const removeUser = (id) => {
  const filteredUsers = users.filter((user) => user.id !== id);

  return filteredUsers;
};

const filteredUser = removeUser(1);
