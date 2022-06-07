document.querySelector('button').addEventListener("click", findBreed)

async function findBreed(){
    const breed = document.querySelector('input').value
    // let url = `https://dogbreed-api-test.herokuapp.com/api/${breedName}`
    
    try{
        const res = await fetch(`https://dogbreed-api-test.herokuapp.com/api/${breed}`)
        const data = await res.json()
        console.log(data)
        document.querySelector('h2').innerText = data.breed
    }
    catch(err){
        console.log(err)
    }
}


