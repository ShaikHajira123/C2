
function storeSearchterm(term) {
    term.addEventListener("keypress",(e)=>{
        if(e.code==="Enter"){
            let input_value=document.getElementById("searchbar").value
            localStorage.setItem("searchnews",input_value)
            window.location.href="search.html"
          }
    });
  
    

}

export default storeSearchterm