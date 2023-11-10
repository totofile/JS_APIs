// On crée une fonction permettant de compter nos tâches en prenant en compte leur état (fait ou en cours)
function counter(){
    let total = 0
    let doneCount = 0
    let progressCount = 0
    // récupérer l'ensemble de tâches existantes dans un tableau (avec un querySelectorAll)
    let tasks = document.querySelectorAll("li")
    tasks = Array.from(tasks)
    // On affecte la taille du tableau au compteur des tâches au total
    total = tasks.length - 1
    // On fait une boucle sur le tableau
        // sur chaque tache, 
        // si notre tache est "marquer comme faite" alors on incrément le compteur des tâche faites
    const doneTasks = tasks.filter((task, index)=>{
        if (index === 0){
            return false
        }
        return task.querySelector("#pTask").dataset.isDone;
    })
    doneCount = doneTasks.length;
    progressCount = total - doneCount

    document.querySelector('.text-bg-success').innerText = doneCount
    document.querySelector('.text-bg-warning').innerText = progressCount
    document.querySelector('.text-bg-secondary').innerText = total

    if (total === 0){
        document.querySelector('.alert').style.display = 'block'
        return;
    }
    document.querySelector('.alert').style.display = 'none'

    // On fait la différence entre le compteur des tâches au total et le compteur des tâche faites pour trouver le compteur des tâche en cours
}
// On exécute cette fonction pour chaque action précitée  

// cibler le click sur le bouton
const addTaskButton = document.querySelector("button[title='Ajouter une tâche']")
addTaskButton.addEventListener("click", (event)=>{
    // ajouter un prompt
    const title = prompt('Titre de la tâche à ajouter')
    if (title === ""){
        alert("Le titre ne peut pas vide")
        return;
    }
    // cloner et parametrer le clone
    const liPrototype = document.querySelector("#liPrototype")
    const liClone = liPrototype.cloneNode(true)
    liClone.style.display = "block"
    liClone.querySelector("#pTask").innerText = title
    // On cible l'événement "click" du bouton pour marquer la tâche comme fait 
    liClone.querySelector("#doneButton").addEventListener('click', (event)=>{
        // On récupère le paragraphe contenant le texte du titre et le rayer
        const del = document.createElement("del")
        const title = document.createTextNode(liClone.querySelector("#pTask").innerText)
        del.appendChild(title)
        liClone.querySelector("#pTask").dataset.isDone = true
        liClone.querySelector("#pTask").innerHTML = del.outerHTML
        counter()
    })

    // On cible l'événement "click" du bouton pour éditer 
    liClone.querySelector("#editButton").addEventListener("click", ()=>{
        const modifiedTitle = prompt(
            'Titre de la tâche à modifier',
            liClone.querySelector("#pTask").innerText
            )
		// On récupère le paragraphe contenant le texte du titre et on modifie
        if (modifiedTitle === ""){
            alert("Le titre ne peut pas vide")
            return;
        }
        liClone.querySelector("#pTask").innerText = modifiedTitle
        
    })

    liClone.querySelector("#deleteButton").addEventListener("click", ()=>{
        alert("Êtes-vous sûr de vouloir supprimer cette tâche ?")
        liClone.parentNode.removeChild(liClone)
        counter()
    })
    
    // ajouter le clone dans la liste
    document.querySelector('ul').appendChild(liClone)
    counter()
})
counter()