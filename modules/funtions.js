const urlValorant = "https://valorant-api.com/v1/agents"

fetch(urlValorant)
.then(response=>{
    return response.json()

}).then(
    response=>console.table(response.data)

).catch(error=>{
    console.log("error", error)

})

