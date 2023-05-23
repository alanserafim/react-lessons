import React, { useState } from "react";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import style from "./Create.module.css"


const Create = () => {
    
  const [usuarioNome, setUsuarioNome] = useState("");
  const [setor, setSetor] = useState("");
  const [ideia, setIdeia] = useState("");
  
  const submit = async (e) => {
    e.preventDefault();
    try {
        const docRef = await addDoc(collection(db, "ideias"), {
            nome: usuarioNome,
            setor: setor,
            ideia : ideia
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    setUsuarioNome("");
    setSetor("");
    setIdeia("");
  };
  
  return (
    <div>
      <div className={style.ideia}>
        <form className={style.ideaForm} onSubmit={submit}>
        <h1>Cadastrar Ideias</h1>
        <input
          type="text"
          placeholder="Nome"
          value={usuarioNome}
          onChange={(e) => setUsuarioNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Setor"
          value={setor}
          onChange={(e) => setSetor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ideia"
          value={ideia}
          onChange={(e) => setIdeia(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
  
export default Create;