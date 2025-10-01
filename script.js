const body= document.querySelector("body"),
    sidebar = body.querySelector(".sidebar");
    toggle = body.querySelector(".toggle");

toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
});

document.querySelectorAll('.dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const parent = this.closest('.dropdown');
        parent.classList.toggle('open');
    });
});