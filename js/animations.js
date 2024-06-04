
const images = document.querySelectorAll("#sobre");

function handleScroll() {
    images.forEach((image) => {
        const bounding = image.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (bounding.bottom > 0 && bounding.top < windowHeight) {
      
            image.classList.add("animate__animated", "animate__backInRight"); 
        } else {
   
            image.classList.remove("animate__animated", "animate__backInRight"); 
        }
    });
}


window.addEventListener("scroll", handleScroll);
