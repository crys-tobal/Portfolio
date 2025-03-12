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
    // Select the elements based on your selector
    const elements = document.querySelectorAll(".project-thumbnail-container > div > div > div:first-child");

    // Log the result to the console to inspect the selected elements
    console.log(elements);

    // Apply the 'target' class if elements are found
    elements.forEach(element => element.classList.add("target"));
});





document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the 'target' class
    const targets = document.querySelectorAll(".target");
    const fixedHeightFromBottom = 150; // Change size when 150px from bottom

    function checkPosition() {
        // Loop through all 'target' elements
        targets.forEach(target => {
            const rect = target.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Monitor the *top* of the element instead of a changing reference point
            const elementTop = rect.top;

            // Expand when the top of the element reaches the 150px mark from the bottom
            if (elementTop < viewportHeight - fixedHeightFromBottom) {
                target.classList.add("active");
            } 
            // Shrink back when scrolled up past the trigger point
            else {
                target.classList.remove("active");
            }
        });
    }

    // Run on scroll & load
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", checkPosition);
    checkPosition(); // Run once on page load
});
