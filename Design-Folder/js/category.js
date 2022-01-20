function searchBook() {
  let box = document.getElementsByClassName("book-hidden");
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("book");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      console.log(box);

      box[i].style.display = "none";
    } else {
      box[i].style.display = "list-item";
    }
  }
}
