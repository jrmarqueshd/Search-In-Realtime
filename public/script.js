window.addEventListener("load", ()=>{
    document.querySelector(".lds-circle").classList.add("off");

    let date = new Date();
    let year = date.getUTCFullYear(-3);
    let since = 2019;

    let $year = document.getElementById("year");
    $year.innerText = since==year ? `${year}` : `${since} - ${year}`;
})