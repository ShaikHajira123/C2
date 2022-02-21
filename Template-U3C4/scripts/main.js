async function apiCall(url) {


    //add api call logic here
    try{
        let res=await fetch(url)
        let data=await res.json()
        return data
    }catch(error){
        console.log(error)
    }


}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(term=>{
       
         let image=document.createElement('img')
         image.src=term.urlToImage
         let div=document.createElement('div')
         div.setAttribute('id','box')

        

         
         let p1=document.createElement('p')
         p1.innerHTML=term.title

         
         let p2=document.createElement('p')
         p2.innerHTML=term.description

         div.append(image,p1,p2)

         div.onclick=()=>{
             localStorage.setItem('article',JSON.stringify(term))
             window.location.href="news.html"
         }
         main.append(div)
    })

}
function show(term,main) {
     

    let image=document.createElement('img')
    image.src=term.urlToImage

    let div=document.createElement('div')

    let p=document.createElement('h3')
    p.innerHTML=`Name : ${term.source.name}`

    
    let p1=document.createElement('p')
    p1.innerHTML=`Title : ${term.title}`

    
    let p2=document.createElement('p')
    p2.innerHTML=`Description : ${term.description}`

    let p3=document.createElement('p')
    p3.innerHTML=`PublishedAt : ${term.publishedAt}`

    let p4=document.createElement('p')
    p4.innerHTML=`Content : ${term.content}`

    let p5=document.createElement('p')
    p5.innerHTML=`url : ${term.url}`

    div.append(p,p1,p2,p4,p3,p5)

    main.append(image,div)

}



export { apiCall, appendArticles ,show}