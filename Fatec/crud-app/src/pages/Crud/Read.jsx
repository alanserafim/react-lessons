import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect, useState } from 'react';


export const Read = () => {

    const [ideias, setIdeias] = useState();

    const getIdeas = async () => {
        const ideiasArray = [];
        const querySnapshot = await getDocs(collection(db, "ideias"));
        querySnapshot.forEach((doc) => {
            ideiasArray.push({...doc.data(), id: doc.id})
        setIdeias(ideiasArray)
        console.log(`${doc.id} => ${doc.data()}`);
        })
    }
    console.log(ideias);
    useEffect(()=>{
        getIdeas()
      },
      []
      )

  return (
    <div>
        <ul>
        {
                ideias?.map((item, index) => {
                    <li key={index}>{item}</li>
                })
            
        }
        </ul>
        
    </div>
  )
}
