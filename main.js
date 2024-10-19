

const accessKey = "zPSGZykTkfVyTWJKhIi2oBSqTJqoAuooa5k4CGhJZF4";

const input = document.querySelector(".input");

const imagesResults = document.querySelector(".images-results");

const showMoreResults = document.querySelector(".show-more-results");

const generateBtn = document.getElementById("generate-btn");

let enteredValue = "";
let page = 1;

async function generateImages() {

    if (page === 1) {
        imagesResults.innerHTML = '';
    }

  enteredValue = input.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${enteredValue}&client_id=${accessKey}`;

    const response = await fetch(url);

    const data = await response.json();

    const results = data.results;


    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        const container = document.createElement("div");

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;

        imageLink.target = "_blank";

        imageLink.appendChild(image);

        container.appendChild(imageLink);

        imagesResults.appendChild(container);
    });

    showMoreResults.style.display = "block";
}

generateBtn.onclick = () => {
    page = 1;
    generateImages();
    
}

showMoreResults.addEventListener("click", () => {
    page++;
    generateImages();
});


