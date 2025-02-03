document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const nav = document.querySelector("nav ul");
    const menuToggle = document.createElement("button");
    menuToggle.innerText = "☰ Menu";
    menuToggle.classList.add("menu-toggle");

    document.querySelector("header").insertBefore(menuToggle, nav);

    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });

    // Cart Update Simulation
    const cart = document.querySelector(".user-actions a:nth-child(2)");
    let cartCount = 1; // Assuming initial cart count is 1

    document.querySelectorAll(".product").forEach((product) => {
      const addToCartBtn = document.createElement("button");
      addToCartBtn.innerText = "Add to Cart";
      addToCartBtn.classList.add("add-to-cart");
      product.appendChild(addToCartBtn);

      addToCartBtn.addEventListener("click", function () {
        cartCount++;
        cart.innerText = `Cart (${cartCount})`;
        alert("Item added to cart!");
      });
    });

    // Smooth Scrolling
    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
      anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
  