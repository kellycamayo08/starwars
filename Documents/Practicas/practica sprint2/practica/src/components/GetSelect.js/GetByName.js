import React, { useEffect, useState } from 'react';

const GetByName = (name='') => {
    const url = "https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/starwars.json "
    // console.log(name)
    const [starss, setStars] = useState([])
    const getData = async () => {
        const resp = await fetch(url)
        const data = await resp.json();
        setStars(data.results)
        
    }
    useEffect(() => {
        getData()
      }, [])
    name = name.toLocaleLowerCase()
    return starss.filter( item => item.name.toLocaleLowerCase().includes(name))
};

export default GetByName;


