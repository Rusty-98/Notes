let nam = document.getElementById("cont");
let show = document.getElementById("contact");

console.log(nam.innerHTML)

var count = 0;

nam.addEventListener("click", (e) => {
    if (count == 0) {
        show.style.display = "block";
        show.classList.add("show");
        nam.innerHTML = `<i class="ri-feedback-line"></i>`;
        nam.style.color = "aliceblue";
        intervalId = setInterval(() => {
            show.style.paddingTop = "3rem";
        }, 100);
        count += 1;
    } else {
        show.style.display = "none";
        show.classList.remove("show");
        nam.innerHTML = `FeedBack`;
        show.style.paddingTop = '2rem';
        clearInterval(intervalId);
        nam.style.color = "black";        
        count = count - 1;
    }

})
