let toddo=[
    {item:'bannana',duedate:'14/01/2000'},
    { item:'apple',duedate:'23/01/2000'}
];
display();


function todo(){
    let anish=document.querySelector('#tododate');
   let element= document.querySelector('#todoinput');
    let elem=element.value;
    let manish=anish.value;
    toddo.push({item:elem,duedate:manish});
   
    element.value="";
    manish.value="";
    display();
    
}
function display(){
    let displayelement=document.querySelector('#toddocontainer');
    let newhtml='';
    
    for(let i=0;i<toddo.length;i++){
       // let hello=toddo[i].item;
       // let mooo=toddo[i].duedate;
       let{item,duedate}=toddo[i];
        newhtml+=`
        <span>${item}</span>
        <span>${duedate}</span>
        <button onclick='toddo.splice(${i},1); display()'; id="monu"
        >delete</button>
        `;

        

    }
    displayelement.innerHTML=newhtml;
    
}