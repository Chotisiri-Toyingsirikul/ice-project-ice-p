import React, { useState } from 'react'
import { useCharacterStore } from '../store'

const Searchform = () => {
    const { characterList, setCharacterList } = useCharacterStore()
    const [selectedSortBy, setSelectedSortBy] = useState<string>('')

    const sortCharacterList = (sortBy: string) => {
        let sortedList = [...characterList]
        if (sortBy === 'name') {
            sortedList.sort((a, b) => a.name.localeCompare(b.name))
        } else {
            sortedList.sort((a, b) => a.id - b.id)
        }
        setCharacterList(sortedList)
    }


    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.target.value
        setSelectedSortBy(selectedValue)
        sortCharacterList(selectedValue)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', }}>
            <form style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    <input
                        type="radio"

                        value="name"
                        checked={selectedSortBy === 'name'}
                        onChange={handleRadioChange}
                    />
                    <label>Sort Name</label>
                </div>
                <div>
                    <input
                        type="radio"

                        value="id"
                        checked={selectedSortBy === 'id'}
                        onChange={handleRadioChange}
                    />
                    <label>Sort Id</label>
                </div>
            </form>
        </div>
    )
}

export default Searchform


