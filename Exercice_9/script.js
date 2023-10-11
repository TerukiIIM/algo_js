class Pokemon {
    constructor (name, atk, def, hp, luck) {
        this.name = name
        this.atk = atk
        this.def = def
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        let Luck = Math.floor(Math.random() * 100) <= this.luck
        return Luck
    }

    atkPokemon(target) {
        if (this.isLucky()) {
            let damages = this.atk - target.def
            if (damages <= 0) {
                console.log(`${this.name} inflige 0 dégat à ${target.name}. Il lui reste ${target.hp} pv`)
            } else {
                target.hp -= damages
                console.log(`${this.name} inflige ${damages} dégats à ${target.name}. Il lui reste ${target.hp} pv`)
            }
        } else {
            console.log(`${this.name} à raté son attaque`)
        }
    }
}

let Aspicot = new Pokemon("Aspicot", 35, 30, 40, 50)
let Méganium = new Pokemon("Méganium", 82, 100, 80, 75)

while (Méganium.hp >= 0 || Aspicot.hp >= 0) {
    console.log(`${Aspicot.name} attaque Méganium`)
    Aspicot.atkPokemon(Méganium)
    if (Méganium.hp <= 0) {
        console.log(`${Méganium.name} est mort`)
        break
    }
    console.log(`${Méganium.name} attaque Aspicot`)
    Méganium.atkPokemon(Aspicot)
    if (Aspicot.hp <= 0) {
        console.log(`${Aspicot.name} est mort`)
        break
    }
}