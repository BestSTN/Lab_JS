let mergeObjects = (...objs) => {
  return objs.reduce((acc, item) => {
    return acc === {} ? (acc = item) : Object.assign(item, acc);
  }, {});
};

console.log(
  mergeObjects(
    { fName: "John", Lname: "Doe", age: 25 },
    { fName: "Nick", Lname: "Doe", hobby: "Music" }
  )
);
