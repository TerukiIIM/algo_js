let mentalHealth = 10 // La variable "mentalHealth" correspond à la santé mentale de John qui est de 10
let nbrMusic = 0 // La variable "nbrMusic" correspond au nombre de musiques qui sont passées
let nbrTaxis = 0 // La variable "nbrTaxis" correspond au nombre de taxis que John prendra pour rentrer chez lui
let nbrRedFire = 30 // La variable "nbrRedFire" correspond au nombre de feux rouge restant avant que John n'arrive chez lui

// Nous allons créer une fonction "getMusic" qui renverra le nom d'un artiste dans une liste prédéfinie, tout en implémentant +1 à la variable "nbrMusic" et -1 à la variable "nbrRedFire". Si la valeur renvoyé par la fonction est "Wejdene" alors, la fonction implémente +1 à la variable "nbrTaxis" et -1 à la variable "mentalHealth"

function getMusic(){
    nbrMusic ++
    nbrRedFire --

    const musics = ["Wejdene", "Scarlxrd", "Imagine Dragons", "Skillet", "Alan Walker"]
    const number = Math.floor(Math.random()* musics.length)
    const result = musics[number]
    
    if (result == "Wejdene") {
        nbrTaxis ++
        mentalHealth --
    }

    return result 
}   

// La boucle while s'arrête lorsque la santé mentale est égale à 0 ou lorsque le nombre de musiques jouées est supérieur à 30. Si c'est le début, un texte de contextualisation apparait afin de contextualiser l'"histoire", avant d'afficher le nombre de musique avec le nom de l'artiste et le nombre de feu rouge restant sinon il affiche le nombre de musique avec le nom de l'artiste et le nombre de feu rouge restant

while (mentalHealth > 1 && nbrMusic < 30) {
    if (nbrMusic == 0) {
        alert(`Après une dure et longue journée de travail, un travailleur décide de commander un Uber afin de rentrer chez lui. Au bureau, la musique de Wejdene passait presque en boucle ce qui l'avait fortement épuisé. Il se disait "si j'écoute encore du Wejdene, ma tête va exploser". Le uber Arrive, il entre dans celui-ci avant d'attendre d'arriver à son domicile. Les musiques passent les une après les autres et, arrivé au premier feu rouge, la musique change`)
    } 
    
    const music = getMusic()

    alert(`${nbrMusic} Au feu rouge, la musique change, passant la musique de ${music}. Il reste encore ${nbrRedFire > 1 ? `${nbrRedFire} feux rouges` : `${nbrRedFire} feu rouge`} avant que John arrive chez lui`)

}

// Lorsque la boucle while se termine, 2 possibilités s'offrent à nous :
// - si le nombre de musique est égale à 30 et donc que le nombre de feu rouge est égale à 0, alors afficher le nombre de taxi(s) prit par John avant d'arriver chez lui 
// - si la musique de Wejden est passé 10 fois, alors John explose dans le taxi

if (nbrMusic == 30) {
    alert(`John arrivera finalement à son domicile, épuisé de cette longue journée. Il a pris ${nbrTaxis > 1 ? `${nbrTaxis} changements` : `${nbrTaxis} changement`} de Taxis afin d'arriver à destination`)
} else {
    alert(`Au feu rouge, la musique change, passant la musique de Wejdene passe pour une dernière fois. John, à bout, explose dans le taxi`)
}