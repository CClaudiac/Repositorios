let personas= []

while (personas.length <10 ){
    personas.push("persona1")
    console.log("agragado", personas.length)
    if(personas.length ==10){
        console.error("limite")
    }
}