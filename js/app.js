const tabsNav = document.querySelectorAll("[data-tabs-nav] li a");
const tabsBody = document.querySelectorAll("[data-tabs-body]")

//tabs
tabsNav.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault()
        const id = button.getAttribute("href").substring(1)
        tabsBody.forEach(element => {
            element.classList.add("hide")
        })
        const getActiveTabContent = document.getElementById(id)
        getActiveTabContent.classList.remove("hide")
        
        tabsNav.forEach(element  => {
            element.classList.remove("active")
            if (id === element.getAttribute("href").substring(1)) {
                element.classList.add("active")
            }
        })
    })
});