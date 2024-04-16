import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EstateDetails = () => {
    const categories = useLoaderData()
    const {id} = useParams();
    const idInt = parseInt(id)
   
    const category = categories.find( category =>  category.id == idInt)
    console.log(category)

    return (
        <div>
           <h2>Estate Details </h2> 

        </div>
    );
};

export default EstateDetails;