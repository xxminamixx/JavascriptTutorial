
func asyncLog() {
  setTimeout(function() {
    console.log(1);
  }, 0);

  console.log(2);
}
