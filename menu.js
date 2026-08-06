const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {

    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {

        items.forEach(other => {

            if (other !== item) {

                other.classList.remove("active");
                other.querySelector(".accordion-content").style.maxHeight = null;

            }

        });

        item.classList.toggle("active");

        if (item.classList.contains("active")) {

            content.style.maxHeight = content.scrollHeight + "px";

        } else {

            content.style.maxHeight = null;

        }

    });

});