let dashboard = document.querySelector(".dashboard");
let Dashboards = document.querySelector(".Dashboards");
let catalogue = document.querySelector(".catalogue");
// let Catalogue = document.querySelector(".Catalogue");
let profile = document.querySelector(".profile");
let Profile = document.querySelector(".Profile");

dashboard.addEventListener("click", () => {
    Catalogue.classList.add("hide");
    Profile.classList.add("hide");
    Dashboards.classList.remove("hide");
})
catalogue.addEventListener("click", () => {
    Catalogue.classList.remove("hide");
    Profile.classList.add("hide");
    Dashboards.classList.add("hide");

})
profile.addEventListener("click", () => {
    Catalogue.classList.add("hide");
    Dashboards.classList.add("hide");
    Profile.classList.remove("hide");
})

// -------initializing datatable--------
new DataTable('#catalogue-example', {
    paging: false,
    scrollCollapse: true,
    scrollY: '200px'
});
new DataTable('#profile-example', {
    paging: false,
    scrollCollapse: true,
    scrollY: '200px'
});