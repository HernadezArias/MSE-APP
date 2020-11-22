export interface Member {
    name: String
    species: String
    gender: String
    house: String
    dateOfBirth: String
    yearOfBirth: number
    ancestry: String
    eyeColour: String
    hairColour: String
    wand: {
            wood: String
            core: String
            length: number
        },
    patronus: String
    hogwartsStudent: boolean
    hogwartsStaff: boolean
    actor: String
    alive: boolean
    image: String
}