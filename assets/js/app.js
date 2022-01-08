//? Local Data
const data = [
  {
    id: 1,
    title: "The Complete JavaScript Course 2022: From Zero to Expert!",
    price: "€9.99",
    category: "JavaScript",
    time: "69",
    img: "./assets/images/course-1.jpg",
  },
  {
    id: 2,
    title: "The Modern Javascript Bootcamp Course (2022)",
    price: "€8.99",
    category: "JavaScript",
    time: "52",
    img: "./assets/images/course-2.jpg",
  },
  {
    id: 3,
    title: "The Modern JavaScript Bootcamp",
    price: "€13.99",
    category: "JavaScript",
    time: "29.5",
    img: "./assets/images/course-3.jpg",
  },
  {
    id: 4,
    title: "Modern JavaScript (Complete guide, from Novice to Ninja)",
    price: "€15.99",
    category: "JavaScript",
    time: "20.5",
    img: "./assets/images/course-4.jpg",
  },
  {
    id: 5,
    title: "The Data Science Course 2022: Complete Data Science Bootcamp",
    price: "€9.99",
    category: "Data-Science",
    time: "32",
    img: "./assets/images/course-5.jpg",
  },
  {
    id: 6,
    title: "Machine Learning, Data Science and Deep Learning with Python",
    price: "€9.99",
    category: "Data-Science",
    time: "15.5",
    img: "./assets/images/course-6.jpg",
  },
  {
    id: 7,
    title: "Complete 2022 Data Science & Machine Learning Bootcamp",
    price: "€10.99",
    category: "Data-Science",
    time: "41",
    img: "./assets/images/course-7.jpg",
  },
  {
    id: 8,
    title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
    price: "€9.99",
    category: "Python",
    time: "60",
    img: "./assets/images/course-8.jpg",
  },
  {
    id: 9,
    title: "The Python Mega Course 2022: Build 10 Real-World Programs",
    price: "€9.99",
    category: "Python",
    time: "33",
    img: "./assets/images/course-9.jpg",
  },
];

//? Get Parent Elements
const buttonContainer = document.querySelector(".button-container");
const coursesContainer = document.querySelector(".courses-container");

//? Display item after page load
window.addEventListener("DOMContentLoaded", () => {
  displayButtons();
  dispalayCourses(data);
});

//? Display Courses
const dispalayCourses = (courseItems) => {
  const displayItems = courseItems
    .map((course) => {
      return `<article class="course">
            <img src=${course.img} alt=${course.title} class="course__img" />
            <h3 class="course__title">${course.title}</h3>
            <div class="course__info">
              <span class="info__price">${course.price}</span>
              <span class="info__time">${course.time}h</span>
              </div>
          </article>`;
    })
    .join("");

  //? render in html tag
  coursesContainer.innerHTML = displayItems;
};

//? Display Buttons
const displayButtons = () => {
  const categories = ["All", ...new Set(data.map((item) => item.category))];

  const displayItems = categories
    .map((category) => {
      return ` <button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");

  //? render in html tag
  buttonContainer.innerHTML = displayItems;

  const filterBtns = buttonContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const filterCourse = data.filter(
        (course) => course.category === category
      );

      if (category === "All") {
        dispalayCourses(data);
      } else {
        dispalayCourses(filterCourse);
      }
    });
  });
};
