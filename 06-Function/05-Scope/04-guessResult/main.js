let x = 1;
function func() {
  console.log(x); // * Error  viable x under console.log
  let x = 2;
}
func();