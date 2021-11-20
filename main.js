import {algoritmo} from './algorithm.js';
const addMainFriend = document.getElementById('addMainFriend');
const mainFriendInput = document.getElementById('inputNames');
const invitedInput = document.getElementById('inputQty');
const calcular = document.getElementById('calcular');
const myFriendsContainer = document.getElementById('myFriends');
const myFriends = [];
let contador = 0;

addMainFriend.addEventListener('click', ()=> {
    myFriendsContainer.innerHTML = '';

    if((mainFriendInput.value && invitedInput.value)===''){
        alert('Por favor rellene los campos con datos válidos');
    }else if(!(Number(invitedInput.value))){
        alert('Por favor ingrese solo números en "cantidad de amigos"');
    }else{

            myFriends.push({name: mainFriendInput.value, friends: []});
            myFriends[contador].friends.lenght = invitedInput.value;
            //console.log(myFriends); debugueando
            contador++;

            myFriends.map((el,i)=>{
                myFriendsContainer.innerHTML = `<li><h3>${el.name}</h3><div id="friend_${i}"></div></li>`;
                for(let x= 0; x < el.friends.lenght; x++){
                    document.getElementById(`friend_${i}`).innerHTML += 
                    `<div>
                        <label>Amigo</label>
                        <input type="text" placeholder="friend's name" id="secondary_${i}_${x}_name">
                        <label>Platos</label>
                        <input type="text" placeholder="friend's dishes quantity" id="secondary_${i}_${x}_dish">
                        <button class="submitInfo" id="${i}_${x}">+</button>
                    </div>`
                
                    const btn = document.querySelectorAll('.submitInfo');
                    btn.forEach(b=>{
                        b.addEventListener('click',(e)=>{
                            if((document.getElementById(`secondary_${e.target.id}_name`).value && document.getElementById(`secondary_${e.target.id}_dish`).value) === '' ){
                                alert('Porfavor Ingrese un dato válido');
                            }else if(!(Number(document.getElementById(`secondary_${e.target.id}_dish`).value))){
                                alert('Por favor ingrese solo números');
                            }
                            else {
                                el.friends.push({name: document.getElementById(`secondary_${e.target.id}_name`).value , dishes: Number(document.getElementById(`secondary_${e.target.id}_dish`).value)});
                                document.getElementById(`secondary_${e.target.id}_name`).value = '';
                                document.getElementById(`secondary_${e.target.id}_dish`).value = '';
                            }
                        });
                    });
                }
            });
        }
});

calcular.addEventListener('click',()=>{
    if(!myFriends.length){
        alert('Aun no se han ingresado datos!');
    }else{
        algoritmo(myFriends);
        console.log(myFriends);
        document.querySelector('.appContent').innerHTML = 
        `<ul id="invitados">
            <h3>...Y los invitados son:</h3>

        </ul>`
        myFriends.map(i=>{
            i.friends.map(j=>{
                document.getElementById('invitados').innerHTML += `<li>${i.name} y su amigo ${j.name}</li>`
                console.log(`${i.name} y su amigo ${j.name} estan invitados`);
            })
        });
    }
});