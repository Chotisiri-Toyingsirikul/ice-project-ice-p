import { create } from 'zustand'
import { eachCharacter } from '../services/getallcharecter.type'


interface Store {
    characterList: eachCharacter[]
    setCharacterList: (value: eachCharacter[]) => void
}

export const useCharacterStore = create<Store>()((set) => ({

    characterList: [],
    setCharacterList: (value: eachCharacter[]) => set(() => ({ characterList: value })),


}))
