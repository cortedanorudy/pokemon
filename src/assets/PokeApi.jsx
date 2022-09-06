import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const PokeApi = () =>{

    const [ pok, setPok ] =useState(0);
    const [ decimetros , setDecimetros ] = useState(true)
    const [ hectogramos , setHectogramos ] = useState(true)

    const random = Math.floor(Math.random() * 600)+1;

    useEffect(() => {
        change();
    },[])

    const change = () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
            .then(res => setPok(res.data))
    }
  
    console.log(pok)

    return(
        <div className="card">
            <h1>{pok.name}</h1>
            <img src={pok.sprites?.other["official-artwork"].front_default} alt="" style={{height: "200px"}}/>
            <br />
            <div><b>Types:</b> {pok.types?.[0].type.name}</div>
            <div><b>height:</b> {decimetros ? pok.height : pok.height/10} {decimetros ? 'decimetros' : 'metros'}</div>
            <div><b>Weight:</b> {hectogramos ? pok.weight : pok.weight/10} {hectogramos ? 'hectogramos' : 'kilogramos'}</div>
            <br />
            <br />
            <button onClick={change}><i className="fa-solid fa-forward"></i></button>
            <br />
            <button onClick={() => setDecimetros(!decimetros)}>cambiar a {decimetros ? 'metros' : 'decimetros'}</button>
            <br />
            <button onClick={() => setHectogramos(!hectogramos)}>cambiar a {hectogramos ? 'kilogramos' : 'hectogramos'}</button>

        </div>

    )
}

export default PokeApi;