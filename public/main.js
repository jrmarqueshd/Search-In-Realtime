if(document.querySelector('input[type="search"').getAttribute("search-field") == "on"){
    const $searchInput = document.querySelector("input");
    const $head = document.querySelector("html > head");
    const styledCustimized = `<style> ul > li[custom-class="hidden"]{display: none!important;}</style>`;

    $head.insertAdjacentHTML("beforeend", styledCustimized);
    if(document.querySelector('ul[list-search-id="on"]')){
        const $listToSearch = document.querySelector('ul[list-search-id="on"]');
        let $childrenListSearch = $listToSearch.children;
        $searchInput.addEventListener("keyup", ()=>{
            let verifyInputValue = $searchInput.value;
            if($searchInput.value.length){
                [].forEach.call($childrenListSearch, (eachChildren)=>{
                    if(RegExp(verifyInputValue, "i").test(eachChildren.innerHTML)){
                        eachChildren.removeAttribute("custom-class");
                    }else{
                        eachChildren.setAttribute("custom-class", "hidden");
                    }
                });
            }else{
                [].forEach.call($childrenListSearch, (eachChildren)=>{
                    eachChildren.removeAttribute("custom-class");
                });
            }
        });
    }else{
        console.log('Você precisa definir uma <ul list-search-id="on">');
    }
}else{
    console.log('Você precisa definir <input search-field="on" type="search" />')
}