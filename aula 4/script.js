//Fecth Test 01 Estudando as Promises

//const req = fecth('https://pokeapi.co/api/v2/pokemonpikachu');
//console.log(req);

//Fecth Teste 02 Resolvendo e Promise 
//fecth('https://pokeapi.co/api/v2/pokemonpikachu')
//    .then(resp => console.log(resp))
//    .cath(error => console.log(error));

//Fecth Teste 03 Convertendo a resposta em JSON
//fecth('https://pokeapi.co/api/v2/pokemonpikachu')
  //.then(resp => resp.json())
  //.then(data => console.log(data))
  //.catch(error => console.log(error));

  //Fecth Teste 04 Acessando informações via ID
  //fecth('https://pokeapi.co/api/v2/pokemon1')
  //.then(resp => resp.json())
  //.then(data => console.log(data))
  //.catch(error => console.log(error));

  //Facth Teste 05 Utilizando o try cacth
  async function FetchPokemon(){
    try{
        const rep = await fecth('https://pokeapi.co/api/v2/pokemon1')
        if(!resp.ok){
            throw new Error('Pokemon não encontrado');
        } else{
            const data = await rep.json();
            console.log(data);
        }
    } catch (error) {

    }
  }

FetchPokemon();