// dynamically insert the name in html file
const studentInfo = document.getElementById("student-info");
studentInfo.textContent = "Kenley Bides - Student ID: 200607233";

// calls the cat api
const catBtn = document.getElementById("load-cat");
const catContainer = document.getElementById("cat-container");

/* even listener on the button */
catBtn.addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      const catImg = document.createElement("img");
      catImg.src = data[0].url;
      catImg.alt = "A cute cat";
      catImg.classList.add("cat-img");

      catContainer.innerHTML = ""; // reset (clears the previous cat)
      catContainer.appendChild(catImg);
    })
    .catch((error) => {
      /* in case of an error */
      catContainer.innerHTML = "<p>Couldn't load a cat 😿</p>";
      console.error("Error fetching cat image:", error);
    });
});
