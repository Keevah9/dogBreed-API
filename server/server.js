const express = require('express')
const app = express()
const PORT =  8000
const cors = require('cors')

app.use(cors())

const dogBreed = {
    'german sheperd':{
        'breed': 'German Sheperd',
        'origin': 'Germany',
        'pure': true,
        'scientist': 'Unknown'
    },

    'husky':{
        'breed': 'Australian Husky',
        'origin': 'Australia',
        'pure': true,
        'scientist': 'Unknown'
    },
    
    'unknown':{
        'breed': 'Unknown',
        'origin': 'Unknown',
        'pure': 'Unknown',
        'scientist': 'Unknown'
    } 
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:breed', (req, res) =>{
    const breedName = req.params.breed.toLowerCase()
    if( dogBreed[breedName] ){
        res.json(dogBreed[breedName])
    }else{
        res.json(dogBreed['unknown'])
    }
    
})




app.listen(process.env.PORT || PORT, () =>{
    console.log(`Live on port ${PORT}! Better go catch it!`)
})