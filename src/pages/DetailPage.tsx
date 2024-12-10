import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const DetailPage = (props: Props) => {
    const { id } = useParams()
    const [eachCharacterDetail, setEachCharacterDetail] = useState()
    const CallData = () => {
        setEachCharacterDetail
    }
    return (
        <div>{id}</div>
    )
}

export default DetailPage