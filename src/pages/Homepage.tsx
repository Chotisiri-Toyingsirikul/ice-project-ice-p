// import React, { useEffect, useState } from 'react'
// import { getallcharecter } from '../services/getallcharecter'

// import { useCharacterStore } from '../store'
// import Searchform from '../component/Searchform'
// import { allCharacter } from '../services/getallcharecter.type'

// type Props = {}

// const Homepage = () => {
//     const { characterList, setCharacterList } = useCharacterStore()
//     const [currentPage, setCurrentPage] = useState(1)
//     const [page, setPage] = useState<number>(0)


//     // const callData = async (page: number = 1) => {
//     //     const response = await getallcharecter.getcharecterAll({ count: 9, page: page })


//     //     console.log("response.data", response.data);
//     //     setCharacterList(response.data.results)
//     //     console.log("characterList", characterList);
//     // }




//     const callData = async (page: number = 1) => {
//         let responseData: any = []
//         for (let i = 1; i <= 42; i++) {

//             const response = await getallcharecter.getcharecterAll({ count: 20 })
//             let finalData = response.data.results
//             responseData = [...responseData, ...finalData]

//             // console.log("responseData", responseData);

//             // console.log("response.data", response.data.results);
//         }
//         console.log(responseData);
//         setCharacterList(responseData)
//         setPage(page)

//         // setCharacterList(response.data.results)
//         // console.log("characterList", characterList);
//     }



//     // const handleOnPrevious = () => {
//     //     if (currentPage > 1) {
//     //         const newPage = currentPage - 1
//     //         setCurrentPage(newPage)
//     //         callData(newPage)
//     //     }
//     // }

//     const handleOnPrevious = () => {
//         if (page > 1) {
//             const newPage = page - 1
//             setPage(page)
//             callData(newPage)
//         }
//     }


//     // const handleOnNext = () => {

//     //     const newPage = currentPage + 1
//     //     setCurrentPage(newPage)
//     //     callData(newPage)
//     // 
//     const handleOnNext = () => {

//         const newPage = page + 1
//         setPage(page)
//         callData(newPage)
//         console.log("page", page);

//     }

//     useEffect(() => {
//         callData(page)
//     }, [page])





//     // useEffect(() => {
//     //     callData(currentPage)
//     // }, [currentPage])

//     return (
//         <div>
//             <div style={{ padding: '20px 50px', width: '1000px', transform: 'translate(12%, -2%)' }}>
//                 <div style={{ display: 'flex' }}>
//                     <h1>Characters of Rick & Morty!</h1>
//                     <Searchform />
//                 </div>


//                 <div
//                     style={{
//                         display: 'grid',
//                         gridTemplateColumns: 'repeat(3, 1fr)',
//                         gap: '10px',
//                         width: '300px'
//                     }}
//                 >
//                     {characterList.slice(page * 9, (page * 9) + 9).map((eachCharacter1) => {
//                         return (
//                             <div style={{ border: '1px solid', width: '400px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
//                                 <img src={eachCharacter1.image} alt="ice" style={{ width: '150px' }} />
//                                 <div style={{ padding: '0 20px' }}>
//                                     {eachCharacter1.name}
//                                     <br />
//                                     {eachCharacter1.species}
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>




//                 <button onClick={handleOnPrevious} style={{ border: '1px solid', borderRadius: '50px', background: 'green', padding: '10px 40px' }}>previous</button>
//                 <button onClick={handleOnNext} style={{ border: '1px solid', transform: 'translate(583%, 119%)', background: 'green', borderRadius: '50px', padding: '10px 40px' }}>next</button>
//             </div>
//         </div>
//     )
// }

// export default Homepage




import React, { useEffect, useState } from 'react'
import { getallcharecter } from '../services/getallcharecter'

import { useCharacterStore } from '../store'
import Searchform from '../component/Searchform'
import { allCharacter } from '../services/getallcharecter.type'



const Homepage = () => {
    const { characterList, setCharacterList } = useCharacterStore()
    const [currentPage, setCurrentPage] = useState(1)



    const callData = async (page: number = 1) => {
        const response = await getallcharecter.getcharecterAll({ count: 9, page: page })


        console.log("response.data", response.data);
        setCharacterList(response.data.results)
        console.log("characterList", characterList);
    }



    const handleOnPrevious = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1
            setCurrentPage(newPage)
            callData(newPage)
        }
    }

    // const handleOnPrevious = () => {
    //     if (page > 1) {
    //         const newPage = page - 1
    //         setPage(page)
    //         callData(newPage)
    //     }
    // }


    const handleOnNext = () => {

        const newPage = currentPage + 1
        setCurrentPage(newPage)
        callData(newPage)
    }

    // const handleOnNext = () => {

    //     const newPage = page + 1
    //     setPage(page)
    //     callData(newPage)
    //     console.log("page", page);

    // }

    useEffect(() => {
        callData(currentPage)
    }, [currentPage])





    // useEffect(() => {
    //     callData(currentPage)
    // }, [currentPage])

    return (
        <div>
            <div style={{ padding: '20px 50px', width: '1000px', transform: 'translate(12%, -2%)' }}>
                <div style={{ display: 'flex' }}>
                    <h1>Characters of Rick & Morty!</h1>
                    <Searchform />
                </div>


                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '10px',
                        width: '300px'
                    }}
                >
                    {characterList.slice(0, 9).map((eachCharacter1) => {
                        return (
                            <div style={{ border: '1px solid', width: '400px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <img src={eachCharacter1.image} alt="ice" style={{ width: '150px' }} />
                                <div style={{ padding: '0 20px' }}>
                                    {eachCharacter1.name}
                                    <br />
                                    {eachCharacter1.species}
                                </div>
                            </div>
                        )
                    })}
                </div>




                <button onClick={handleOnPrevious} style={{ border: '1px solid', borderRadius: '50px', background: 'green', padding: '10px 40px' }}>previous</button>
                <button onClick={handleOnNext} style={{ border: '1px solid', transform: 'translate(583%, 119%)', background: 'green', borderRadius: '50px', padding: '10px 40px' }}>next</button>
            </div>
        </div>
    )
}

export default Homepage










// < div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//                 <button onClick={() => handleOnPrevious()} style={{ border: '1px solid', borderRadius: '50px', background: 'green', padding: '10px 40px' }}>previous</button>

//                 <button onClick={() => handleOnNext()} style={{ border: '1px solid', borderRadius: '50px', background: 'green', padding: '10px 40px' }}>next</button>
//             </ >




// const Homepage = () => {
//     const [showCharacter, setShowCharacter] = useState<allCharacter>([])

//     const callData = async () => {
//         const response = await getallcharecter.getcharecterAll()
//         console.log(response.data);
//         setShowCharacter(response.data)

//     }

//     useEffect(() => {
//         callData()
//     }, [])

//     return (
//         <div>
//             {showCharacter.results.map((eachCharacter1) => {
//                 return <div>
//                     <img src={eachCharacter1.image} alt="ice" />
//                 </div>
//             })}
//         </div>
//     )
// }