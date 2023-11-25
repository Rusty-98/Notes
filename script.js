let nam = document.getElementById("cont");
let show = document.getElementById("contact");

var count = 0;

nam.addEventListener("click", (e) => {
    if (count == 0) {
        show.style.display = "block";
        show.classList.toggle("show");
        nam.style.color = "red";
        count += 1;
    } else {
        show.style.display = "none";
        show.classList.remove("show");
        nam.style.color = "black";
        count = count - 1;
    }

})