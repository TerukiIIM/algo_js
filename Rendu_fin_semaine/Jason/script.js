let characters = [] // Tableau contenant les 5 personnages
let death = [] // Tableau contenant les personnages morts

// Class permettant de créer les personnages avec une proba de mourir, d'attaquer et de mourir en attaquant aléatoire.
class Character {
    constructor(name, characteristic, hp) {
        this.name = name
        this.characteristic = characteristic
        this.hp = hp
        this.deathProba = Math.random()
        this.attackProba = Math.random()
        this.damagesDeathProba = Math.random()
    }

    // Propriété "attaque" qui permet à Jason de :
    // - tuer un survivant
    // - tuer un survivant mais perdre 15pv
    // - perdre 10
    attack(target) {
        if (Math.random() < this.attackProba) {
            console.log(`${this.name} attaque ${target.name}`)

            if (Math.random() < target.damagesDeathProba ) {
                console.log(`${this.name} a perdu 15 pv mais tue ${target.name}`)
                Jason.hp -= 15
                target.hp = 0
            } else {
                console.log(`${this.name} a tué ${target.name}`)
                target.hp = 0
            }
        } else {
            console.log(`${this.name} essaie d'attaquer ${target.name}, mais rate.`)
            if (Math.random() < target.damagesDeathProba) {
                console.log(`${target.name} a esquivé l'attaque de ${this.name} et inflige 10 points de dégâts à Jason.`)
                Jason.hp -= 10
            }
        }
        
    }
}

const Jason = new Character("Jason", "Tueur en série", 100) // Création de Jason

// Liste de prénom
let names = ["Albert", "Alex", "Alexis", "Alice", "Arthur", "Charles", "Charlot", "Chris", "Christophe", "Clemence", "Clement", "Clide", "Ellie", "Elza", "Emmy", "Eric", "Eva", "Iris", "Jade", "Jessi", "John", "Jonathan", "Julia", "Julie", "June", "Kevin", "Laura", "Leo", "Leon", "Marcus", "Mark", "Max", "Mickael", "Mike", "Olivia", "Rachel", "Rick", "Robin", "Rose", "Sophie", "Stephane", "Ted", "Tess", "Thomas", "Tom", "Tony", "Victor", "Victoria"]
// Liste de charactéristiques
let characteristics = ["Nerd", "Sportif", "Blonde", "Agile", "Stratège"]

// Boucle for permettant de créer les 5 personnages avec un nom et une charactéristique aléatoire
for (let i = 0; i < 5; i++) {
    const randomName = Math.floor(Math.random() * names.length)
    const name = names[randomName]
    const randomCharac = Math.floor(Math.random() * characteristics.length)
    const characteristic = characteristics[randomCharac]
    const character = new Character(name, characteristic, 100)
    characters.push(character)
    characteristics.splice(randomCharac, 1) // Permet de supprimer la caractériste déja prise
}

// Boucle while qui s'arrête lorsque:
// - Tous les survivants sont morts
// - Jason est mort
// - Tous le monde est mort
while (Jason.hp > 0 && characters.length != 0) {
    let random =  Math.floor(Math.random() * characters.length)
    let target = characters[random]
    Jason.attack(target)
    if (target.hp <= 0) {
        death.push(target.name)
        characters.splice(random, 1)
    }
    
    if (Jason.hp <= 0 && death.length == 5) {
        console.log("Tous le monde est mort")
        break
    }

    if (Jason.hp <= 0) {
        console.log("Jason est mort")
        if (death.length == 0) {
            console.log("Tous les survivants ont survécues");
            break
        } else {
            let lastDeath = death.pop()
            console.log(`Les survivants ont gagné mais ${death.length > 1 ? `${death.join(", ")} et ${lastDeath} sont morts` : `${lastDeath} est mort` } `)
            break
        }
    } 
    
    if (characters.length == 0) {
        console.log("Jason a tué tous les survivants")
        break
    }
}


// |--------------------------------------|
// |---------AUTRE FAÇON DE FAIRE---------|
// |--------------------------------------|

// let persos = [];
// let morts = [];

// let stats = [
// 		(Nerd = {
// 				p_death: 0.5,
// 				p_atk: 0.2,
// 				p_deathByAtk: 0.5,
// 		}),
// 		(Sportif = {
// 				p_death: 0.5,
// 				p_atk: 0.6,
// 				p_deathByAtk: 0.4,
// 		}),
// 		(Blonde = {
// 				p_death: 0.6,
// 				p_atk: 0.3,
// 				p_deathByAtk: 0.6,
// 		}),
// 		(Agile = {
// 				p_death: 0.3,
// 				p_atk: 0.2,
// 				p_deathByAtk: 0.3,
// 		}),
// 		(Stratège = {
// 				p_death: 0.2,
// 				p_atk: 0.5,
// 				p_deathByAtk: 0.4,
// 		}),
// ];

// class Perso {
// 		constructor(name, hp, charac) {
// 				this.name = name;
// 				this.hp = hp;
// 				this.charac = charac;
// 		}

// 		atk(target) {
// 				if (Math.random() < this.charac.p_atk) {
// 						console.log(`${this.name} attaque ${target.name}`)
// 						if (Math.random() > target.charac.p_death) {
// 								console.log(`${this.name} a tué ${target.name}`)
// 								target.hp = 0
// 						} else {
// 								if (Math.random() > target.charac.p_deathByAtk) {
// 										console.log(`${this.name} a perdu 15 pv mais tue ${target.name}`)
// 										Jason1.hp -= 15
// 										target.hp = 0
// 								}
// 						}
// 				} else {
// 						console.log(`${this.name} essaie d'attaquer ${target.name}, mais rate.`)
// 						if (Math.random() < target.charac.p_atk) {
// 								console.log(`${target.name} a esquivé l'attaque de ${this.name} et inflige 10 points de dégâts à Jason.`)
// 								Jason1.hp -= 10
// 						}
// 				}
// 		}
// }

// tueur = {
// 	p_death: 0.5, // useless
// 	p_atk: 0.5,
// 	p_deathByAtk: 0.5, // useless
// };
// let Jason1 = new Perso("Jason", 100, tueur);

// for (i = 0; i < 5; i++) {
// 	let randomName = names[Math.floor(Math.random() * names.length)];
// 	let random = Math.floor(Math.random() * stats.length);
// 	let randomCharac = stats[random];
// 	let perso = new Perso(randomName, 100, randomCharac);

// 	persos.push(perso);
// 	stats.splice(random, 1);
// }

// while (Jason1.hp > 0 && persos.length > 0) {
// 		let random = Math.floor(Math.random() * persos.length);
// 		let randomPerso = persos[random];
// 		Jason1.atk(randomPerso);

// 		if (randomPerso.hp == 0) {
// 				morts.push(randomPerso.name);
// 				persos.splice(random, 1);
// 		}

// 		if (Jason1.hp <= 0 && morts.length == 5) {
// 				console.log("Tous le monde est mort")
// 				break
// 		}

// 		if (Jason1.hp <= 0) {
// 				console.log("Jason est mort")
// 				if (morts.length == 0) {
// 						console.log("Tous les survivants ont survécues");
// 						break
// 				} else {
// 						let lastDeath = morts.pop()
// 						console.log(`Les survivants ont gagné mais ${morts.length > 1 ? `${morts.join(", ")} et ${lastDeath} sont morts` : `${lastDeath} est mort` } `)
// 						break
// 				}
// 		}

// 		if (persos.length == 0) {
// 				console.log("Jason a tué tous les survivants");
// 				break;
// 		}
// }
