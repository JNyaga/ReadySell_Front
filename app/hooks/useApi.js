import React, { useState } from 'react'


export default useApi = (apiFunc) => {
    const [data, setData] = useState([])
    const [error, setEror] = useState(false)
    const [loading, setLoading] = useState(false)

    const request = async (...args) => {
        setLoading(true)
        const response = await apiFunc(...args); //apiFunc~ listingsApi.getListings
        setLoading(false)

        if (!response.ok) {
            setEror(true)
            return response;
        }

        setEror(false);
        setData(response.data)
        return response;

    }

    return { data, error, loading, request }

}