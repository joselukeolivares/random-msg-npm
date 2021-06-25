const messages=[
    "Jose",
    "Luis",
    "Nicolay",
    "Yessica",
    "Diego",
    "Laura",
    "Caroline",
    "Paulina"
]

const randomMsg=()=>{
    const message=messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}

module.exports= {randomMsg}
