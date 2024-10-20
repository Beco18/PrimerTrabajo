class Activity{
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}
class Repository{
    constructor(){
        this.activities =[];
        this.idCount = 0;
    }
    getAllActivities(){
        return this.activities;
    }
    createActivity(title, description, imgUrl){
        const nuevoActivity = new Activity(
            this.idCount++,
            title, 
            description, 
            imgUrl)
        this.activities.push(nuevoActivity);
    }
    deleteActivity(id){
        const inicialLength = this.activities.length;
        this.activities = this.activities.filter(activity => activity.id !== id);
        // if(this.activities.length === inicialLength){
            //     return `No hay info de id: ${id}`;
        //     }
        //     else{
        //         return `Actividad con id: ${id} eliminado con exito`;
        //     }
    }
    
}
const repository = new Repository();
const newActividad = new Activity(1, "james", "boom","image");
console.log(newActividad)
console.log(repository);

function createActivity(activity){
    const { id,title, description, imgUrl} = activity;

    const card = document.createElement("div");
    card.classList.add("Card");
    // const titleElement = document.createElement("h3");
    // const descriptionElement = document.createElement("p");
    // const imgUrlElement = document.createElement("img");

    // titleElement.innerHTML = "Title"
    // descriptionElement.innerHTML = "description"
    // imgUrlElement.innerHTML = "imgUrl"

    card.innerHTML = `<h3>${title}</h3> <p>${description}</p>
    <img src="${imgUrl}" alt="image">`;

    // titleElement.classList.add("activity-title");
    // descriptionElement.classList.add("activity-description");
    // imgUrlElement.classList.add("activity-imgUrl");
    // card.classList.add("activity-card");


    const bDelete = document.createElement("button");
    bDelete.innerHTML = "Delete";
    bDelete.addEventListener("click", () =>{
        console.log("Delete");
    })
    card.appendChild(bDelete);
    
    console.log(card);
    // card.appendChild(imgUrlElement);
    // card.appendChild(titleElement);
    // card.appendChild(descriptionElement);

    return card;
}
const renderActivities = () => {
    const repository = document.getElementById("container");

    repository.innerHTML = "";


}
// const repository = new Repository();
const activity = new Activity(1, "title", "description", "imgUrl")
const newCard = createActivity(activity);
repository.appendChild(newCard);
  

// const activity = new Activity(1, title, description, imgUrl)
// const repository = document.getElementById("container");
// const newCard = createActivida(activity);
// repository.appendChild(newCard);

