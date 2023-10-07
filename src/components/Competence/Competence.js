import React from 'react';
import './Competence.css'
import {
  SiTypescript,SiJavascript, SiCsharp, SiCplusplus, SiReact, SiSymfony, SiLaravel, SiAndroidstudio, SiUnity,SiGit
} from "react-icons/si";

import{FaJava, FaNode} from "react-icons/fa"

import {TbBrandKotlin, TbSql} from "react-icons/tb"

const Competences = () => {
    return (

      <div className='competenceContainer'>
        <h2>Languages :</h2>
  
        <SiTypescript size={50}/> 
        <SiJavascript size={50}/> 
        <TbBrandKotlin size={55}/> 
        <FaJava size={50}/> 
        <SiCplusplus size={50}/> 
        <SiCsharp size={50}/> 
        <TbSql size={50}/> 

        <h2>Framework  et logiciels :</h2>
  
        <SiReact size={50}/> 
        <SiSymfony size={50}/> 
        <SiLaravel size={55}/> 
        <SiAndroidstudio size={50}/> 
        <SiUnity size={50}/> 

        <h2>Autres :</h2>
  
        <SiGit size={50}/> 
        <FaNode size={60}/> 

      </div>
    );
};

export default Competences;
