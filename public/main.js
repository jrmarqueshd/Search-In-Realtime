if(document.querySelector('input[type="search"').getAttribute("search-field") == "on"){
    const $searchInput = document.querySelector("input");

    if(document.getElementById("listToSearch")){
        const $listToSearch = document.getElementById("listToSearch");
        let $childrenListSearch = $listToSearch.children;

        $searchInput.addEventListener("keyup", ()=>{
            [].forEach.call($childrenListSearch, (each)=>{
                if($searchInput.value == each.innerHTML){
                    console.log(each.innerHTML);
                }
            });
        })
        
    }else{
        console.log('Você precisa definir uma <ul id="listToSearch">');
    }

}else{
    console.log('Você precisa definir <input search-field="on" type="search" />')
}