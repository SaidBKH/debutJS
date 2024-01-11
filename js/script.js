
const addBtn = document.querySelector('#btn');           // selectionne le bouton add a task 
const taskCard = document.querySelector(".todoCard");          // selectionne le modèle de carte de tache
const taskContainer = document.querySelector("#todoCards");       // selectionne le conteneur des cartes 
const cardCountElement = document.querySelector("#cardCountDisplay");  //  Sélectionne l'élément qui affiche le nombre de cartes



let cardCount = 0; // Initialise le compteur de cartes

addBtn.addEventListener('click',addTask);  // Ajoute un écouteur d'événements pour le clic sur le bouton "Add a task"




function addTask(){                                        // Fonction pour ajouter une nouvelle tâche
    const newTask = taskCard.cloneNode(true)               // Clone le modèle initial de carte de tâche

    const newTextArea = newTask.querySelector('.task')    // Sélectionne la zone de texte de la nouvelle tâche

    newTextArea.value = "New Task"                        // Définit la valeur par défaut de la zone de texte
    
    taskContainer.appendChild(newTask)                   // Ajoute la nouvelle tâche au conteneur des cartes de tâches
    const cardCountElement = document.querySelector("#cardCountDisplay");

        cardCount++;                                      // Incrémente le compteur de cartes

        cardCountElement.textContent = cardCount;        // Met à jour le texte de l'élément qui affiche le nombre de cartes

        updateNewCard(newTask);     // Appelle la fonction pour mettre à jour la nouvelle carte


}


function updateNewCard(newTask) {// Fonction pour mettre à jour la nouvelle carte
   
    const newTextArea = newTask.querySelector('.task'); // Sélectionne la zone de texte de la nouvelle tâche

    newTextArea.addEventListener('input', function () {   // Ajoute un événement pour détecter les changements dans la zone de texte
        updateCardText(newTask, newTextArea.value);         // Met à jour le texte de la nouvelle carte en fonction de la zone de texte

    });

    const delBtn = newTask.querySelector('.delBtn');     // Ajoute un événement pour détecter le clic sur l'icône de la corbeille
    delBtn.addEventListener('click', function () {
        deleteCard(newTask);          // Appelle la fonction pour supprimer la carte

    });
}

function updateCardText(card, newText) {   // Fonction pour mettre à jour le texte de la carte

    const cardTextArea = card.querySelector('.task');     // Sélectionne la zone de texte de la carte

    cardTextArea.value = newText;     // Met à jour le texte de la carte en fonction de la nouvelle valeur
}

function deleteCard(card) { // Fonction pour supprimer la carte

    taskContainer.removeChild(card);     // Supprime la carte du conteneur des cartes de tâches


    cardCount--;     // Décrémente le compteur de cartes

    cardCountElement.textContent = cardCount;     // Met à jour le texte de l'élément qui affiche le nombre de cartes

}