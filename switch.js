let expresion = "messi"


// aca lo que hace es, vamos a analizar la variable expresion, si expresion es messi le decimos es el mejor de la historia
// si es ronaldo es el segundo mejor de la historia y si es maradona le decimos es el tercer mejor de la historia
switch(expresion){
    case "messi":
    console.log("Es el mejor de la historia")
    break;
    case "ronaldo":
    console.log("es el segundo mejor de la historia")
    break;
    case "maradona":
    console.log("Es el tercer mejor de la historia")
    break;
    default: 
    alert("No es ninguna pibe, elegi bien")
}
// aca estariamos diciendo con default que si no se cumple ninguna de los casos anteriores, vamos a decirle algo
// en este caso "no es ninguna pibe, elegi bien"