export const getProjects = ()=>{
    return fetch('https://raw.githubusercontent.com/nitishpatel/nitishpatel/master/project.json',{
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
