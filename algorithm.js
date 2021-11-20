const myFriends = [
    //amigo 1
    {
        name: 'Manuel Arce',
        friends: [
            { name: 'Laura Rojas', dishes: 1},
            { name: 'Rebeca Jara', dishes: 2},
            { name: 'Olman Ulate', dishes: 1},
            { name: 'Diana Sancho', dishes: 3},
            { name: 'Teresa Oviedo', dishes: 4}
        ]
    },
    //amigo 2
    {
        name: 'Miguel Segura',
        friends: [
            { name: 'Mario Vargas', dishes: 4},
            { name: 'Manuel Lopez', dishes: 2},
            { name: 'Diego Solis', dishes: 1},
            { name: 'Rebeca Jara', dishes: 2}
        ]
    },
    //amigo 3
    {
        name: 'Adriana Fallas',
        friends: [
            { name: 'Olman Ulate', dishes: 1},
            { name: 'Diego Sandi', dishes: 3},
            { name: 'Sergio Romero', dishes: 5},
            { name: 'Cristiano Ronaldo', dishes: 3}
        ]
    },
    //amigo 4
    {
        name: 'Lorena Torres',
        friends: [
            { name: 'Luis Sandi', dishes: 1},
            { name: 'Sergio Romero', dishes: 5},
            { name: 'Laura Rojas', dishes: 1},
            { name: 'Eduardo Ramos', dishes: 5},
            { name: 'Oscar Moreno', dishes: 4},
        ]
    },
    //amigo 5
    {
        name: 'Marianela Salazar',
        friends: [
            { name: 'Diego Calvo', dishes: 3},
            { name: 'Diego Solis', dishes: 1},
            { name: 'Mario Vargas', dishes: 4},
            { name: 'Rebeca Jara', dishes: 2}
        ]
    },
    //amigo 6
    {
        name: 'Rebeca Morera',
        friends: [
            { name: 'Oscar Maroto', dishes: 4},
            { name: 'Lorena Torres', dishes: 2},
            { name: 'Teresa Oviedo', dishes: 4},
            { name: 'Rebeca Jara', dishes: 2},
            { name: 'Oscar Ruiz', dishes: 2}
        ]
    },
    //amigo 7
    {
        name: 'Luis Salas',
        friends: [
            { name: 'Teresa Oviedo', dishes: 4},
            { name: 'Rebeca Jara', dishes: 2},
            { name: 'Diego Fallas', dishes: 3},
            { name: 'Olman Ulate', dishes: 1},
            { name: 'Fabricio Ramirez', dishes: 3}
        ]
    },
    //amigo 8
    {
        name: 'Oscar Ulate',
        friends: [
            { name: 'María Paz Vargas', dishes: 4},
            { name: 'Mario Salazar', dishes: 3},
            { name: 'Enrique Peña', dishes: 5},
            { name: 'Diego Pais', dishes: 2},
            { name: 'Cristiano Ronaldo', dishes: 3}
        ]
    },
];



export const algoritmo = (array)=> {
    
    const mainFriends = [];
    const secondaryFriends = [];
    let mayor = 0;
    let menor;

    //Buscar
    for(let i = 0; i < array.length; i++){
        //Amigos Principales
        mainFriends.push(array[i].name);
        secondaryFriends.push(array[i].friends);
        for(let j = 0; j < array[i].friends.length; j++){
            //Revisa Amigos Secundarios, recorriendo el ciclo por todos los potenciales invitados
            for(let l = i + 1; l < array.length; l++){
                for(let m = 0; m < array[l].friends.length; m++){
                    if((array[i].friends[j].name)===(array[l].friends[m].name)){
                        array[l].friends.splice(m,1);//elimina repetidos
                    }
                }
            }
        }   
    };
    //chequear entre los invitados si hay alguien que pertenece a los amigos principales
    array.map((element) => {
        element.friends.map((fri,index)=>{
            for(let i= 0; i < mainFriends.length; i++){
                if(mainFriends[i]===fri.name){
                    //Eliminar
                    element.friends.splice(index,1);
                }
            }//fin del ciclo for
        });
    });
    
    array.map((friend)=>{
        if(friend.friends.length > mayor){
            mayor = friend.friends.length;
            array.map(f=>{
                f.friends.map((e,i)=>{
                    if(e.dishes > (mayor-2)){
                        //f.friends.splice(i,1);
                        f.friends.splice(f.friends.indexOf(e),1);
                    }
                });
            });
        }
    });

    //escoger invitados por menor cantidad de platos
    for(let g = 0; g < array.length; g++){
        if(array[g].friends.length > 1){
            menor = mayor;
            for(let x = 0; x < array[g].friends.length; x++){
                if((array[g].friends[x].dishes)< menor){
                    menor = array[g].friends[x].dishes;
                }
            }
            array[g].friends.map((el,index)=>{
                if(el.dishes > menor){
                    array[g].friends.splice(index,1);
                }
            });
        }
    }
    array.map(y => {
        if(y.friends.length > 1){
            y.friends.pop(y.friends.length - 1);
        }
    });
}

algoritmo(myFriends);
// myFriends.map(i=>{
//     i.friends.map(j=>{
//         console.log(`${i.name} y su amigo ${j.name} estan invitados`);
//     })
// });
