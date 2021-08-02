function Employee(name, title, image, review) {
  this.name = name;
  this.title = title;
  this.image = image;
  this.review = review;
}

var emp1 = new Employee(
  "Manaal Syed",
  "Intern",
  "first",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Augue mauris augue neque gravida in fermentum."
);

var emp2 = new Employee(
  "Luopu Malakpa",
  "Product Manager",
  "second",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus."
);

var emp3 = new Employee(
  "Soha Habib",
  "Junior Software Developer",
  "third",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
);

var emp4 = new Employee(
  "Tsubaki Choti",
  "Senior Software Developer",
  "fourth",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Risus sed vulputate odio ut enim blandit volutpat. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Diam in arcu cursus euismod quis."
);

var employees = [emp1, emp2, emp3, emp4];

//set inital review
var i = 0;
setReview(i);

document.querySelector(".prev-btn").addEventListener("click", function () {
  if (i > 0 && i < employees.length) {
    i--;
  } else {
    i = employees.length - 1;
  }
  setReview(i);
});

document.querySelector(".next-btn").addEventListener("click", function () {
  if (i >= 0 && i < employees.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setReview(i);
});

document.querySelector(".random").addEventListener("click", function () {
  i = Math.floor(Math.random() * employees.length);
  setReview(i);
});

function setReview(i) {
  document.querySelector(".name").innerHTML = employees[i].name;
  document.querySelector(".job-title").innerHTML = employees[i].title;
  document.querySelector(".review-text").innerHTML = employees[i].review;
  document.querySelector(".profile").src =
    "images/" + employees[i].image + ".jpeg";
}
