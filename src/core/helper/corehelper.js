export const getProjects = ()=>{
    return fetch('https://api.jsonbin.io/b/5f7da873302a837e957637b6',{
        method:"GET"
    })
    .then(data=>data.json())
    .catch(err=>console.log(err))
}

export const submitMessage=  message =>{
    return fetch(`https://nitishpatel.herokuapp.com/api/contact/`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",

        },
        body: JSON.stringify(message)
    })
    .then(response => response.json() )
    .catch(err => console.log(err))
}
