class Activity{
    constructor(id, title, description, imgUrl){
        this.id = id,
        this.title = title,
        this.description = description,
        this.imgUrl = imgUrl
    }
}

class Repository{
    constructor(){
        this.activities = [];
    }
    getAllActivities(){
        return this.activities;
    }
    createActivity(title, description, imgUrl){
        const newActivity = new Activity(this.idCount++, title, description, imgUrl);
        this.activities.push(newActivity);
    }

    deleteActivity(id){
        const inicialLength = this.activities.length;
        this.activities = this.activities.filter((activity) => activity.id !== id);
        if (this.activities.length === inicialLength){
            return `No se encontro ningun actividad con el id: ${id}`;
        }
        else{
            return `Actividad con id: ${id} eliminada exitosamente.`;
        }
    }
        
}


const repository = new Repository();
// const activity = new Activity(1, "title", "desciption", "imgUrl");
// repository.createActivity(activity);

function createActivity(activity){
    
    const {id, title, description, imgUrl} = activity
    
    const card = document.createElement("div");
    

    card.classList.add("card");

    card.innerHTML = `<h3>${title}</h3> 
    <img src="${imgUrl}" alt="image"> 
    <p>${description}</p>`
    


    const boutonDelete = document.createElement("button") 
    boutonDelete.innerHTML = "Delete";
    boutonDelete.addEventListener("click", () =>{
        renderActivities();
        repository.deleteActivity(id);
    });
    card.appendChild(boutonDelete);
    return card;
};
    const renderActivities = () => {
    const container = document.getElementById("container");

    container.innerHTML = "";
    
    const activities = repository.getAllActivities();
    
    
    const cards = activities.map((activity) => createActivity(activity));
    cards.forEach((card) => container.appendChild(card));
};
    const addBouton = document.getElementById("agregar");
    addBouton.addEventListener("click", (e) => handleform(e))
    const handleform = (e) =>{e.preventDefault();
        const inputTitle = document.getElementById("title");
        const inputDescription = document.getElementById("description");
        const inputimgUrl = document.getElementById("imgUrl");

        if(inputTitle.value.length >0 && 
            inputDescription.value.length >0 && 
            inputimgUrl.value.length >0
        ){
            repository.createActivity(
                inputTitle.value, 
                inputDescription.value, 
                inputimgUrl.value
            ); 
            inputTitle.value = ""
            inputimgUrl.value = ""
            inputDescription.value = ""
            renderActivities();
        } else{
            alert("error");
        }
        // console.log(inputDescription)
};
            
    
//         const cardElement = document.createElement("div");
//         cardElement.appendChild(inputTitle);
//         cardElement.appendChild(inputDescription);
//         cardElement.appendChild(inputimgUrl);

//         return cardElement
//         newActivity.forEach(e => {
//         container.appendChild(e)
//         });
//     }
