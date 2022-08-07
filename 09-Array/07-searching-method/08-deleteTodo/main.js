const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function deleteTask(id) {
  let foundIndex = tasks.findIndex((obj) => obj.id === id);

  if (foundIndex !== -1) tasks.splice(foundIndex, 1);
}

deleteTask(1);

console.log(tasks);