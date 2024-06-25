//Realizando o Fecth no endpoint

const fecthPokemon = async () =>{
    for(let i = i; i <= 100; i++){
        await pegaPokemon(i)
    }
}

//Percorrendo os 100 primeiros pokemons
const pegaPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res =  await fecth(url)
    const data = await res.json()
    //console.log(data.name);
    console,log(data.types[0].type.name);
} 


fecthPokemon();