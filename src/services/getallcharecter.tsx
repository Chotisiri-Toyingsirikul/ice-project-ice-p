import axios from "axios"
import { allCharacter } from "./getallcharecter.type"

export const getallcharecter = {
    getcharecterAll: async ({ count, page }: { count: number, page: number }) => {
        const response = await axios.get<allCharacter>(`https://rickandmortyapi.com/api/character?count=${count}&page=${page}`)
        return response
    },
    // getcharecterAll: async ({ count }: { count: number }) => {
    //     const response = await axios.get<allCharacter>(`https://rickandmortyapi.com/api/character?count=${count}`)
    //     return response
    // },

    getEachCharecter: async (id: number) => {
        const response = await axios.get<allCharacter>(`https://rickandmortyapi.com/api/character/id`)
        return response
    }
}