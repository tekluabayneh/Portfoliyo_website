// Create a new IntersectionObserver instance

const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Corrected typo from "entery" to "entry"
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".Hidden");
hiddenElements.forEach((el) => observe.observe(el));

// Add event listener to each section element

const quationTab = document.querySelectorAll(".Q_item");
const Plus_btn = document.querySelectorAll(".Plus_item");

Plus_btn.forEach((btn, index) => {
  quationTab[0].classList.add("active");
  btn.addEventListener("click", function () {
    // Remove 'active' class from all tabs
    quationTab.forEach((tab) => {
      tab.classList.remove("active");
    });

    // Add 'active' class to the corresponding tab
    quationTab[index].classList.add("active");
  });
});


