document.getElementById("closeElement").addEventListener("click", function() {
    document.getElementById("submenu").style.display = "none"; // Hides the element
});



document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropbtn");
    const dropdownMenu = document.querySelector(".dropdown-content");

    // Toggle dropdown on click
    dropdownBtn.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.style.display =
            dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector(".target");

    function checkPosition() {
        const rect = target.getBoundingClientRect();
        const screenCenter = window.innerHeight / 2;

        // Check if the element's center is near the middle of the screen
        if (rect.top < screenCenter && rect.bottom > screenCenter) {
            target.classList.add("active");
        } else {
            target.classList.remove("active");
        }
    }

    // Run on scroll & load
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", checkPosition);
    checkPosition(); // Run once on page load
});
