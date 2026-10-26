/*
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // Toggle mobile navigation menu
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});
*/

/*
document.addEventListener("DOMContentLoaded", () => {
  // Get current page filename (e.g., "about.html", "portfolio.html")
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    // Match link href with current filename or default home
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

/*
document.addEventListener("DOMContentLoaded", () => {
  // Get current path name, removing trailing slashes or query parameters
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    // Get the base filename from href (ignoring hash tags like #showcase)
    const linkHref = link.getAttribute("href");
    if (!linkHref) return;

    const linkPage = linkHref.split("#")[0].split("/").pop();

    // Check if the current path matches the link target
    const isHome = (currentPath === "" || currentPath === "index.html") && (linkPage === "" || linkPage === "index.html");
    const isMatch = linkPage !== "" && currentPath.includes(linkPage);

    if (isHome || isMatch) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
*/

document.addEventListener("DOMContentLoaded", () => {
  // 1. Get exact current filename (defaulting to index.html)
  let currentFile = window.location.pathname.split("/").pop();
  if (!currentFile || currentFile === "/") {
    currentFile = "index.html";
  }

  // 2. Target navigation links
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    // Ignore pure section anchors (e.g., href="#disciplines" or href="#showcase")
    if (href.startsWith("#")) {
      link.classList.remove("active");
      return;
    }

    // Extract file target from link (strip out any trailing #anchors)
    const targetFile = href.split("#")[0].split("/").pop() || "index.html";

    // Strict exact-match comparison
    if (targetFile === currentFile) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    // 1. Toggle mobile menu open/closed
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("open");
      navLinks.classList.toggle("open");
    });

    // 2. Close dropdown automatically when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("open");
        navLinks.classList.remove("open");
      });
    });

    // 3. Close dropdown when clicking outside the navbar
    document.addEventListener("click", (e) => {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        menuToggle.classList.remove("open");
        navLinks.classList.remove("open");
      }
    });
  }
});