import React from 'react';

import {
    useParams
  } from "react-router-dom";



  function postCancelar(id){

    fetch('https://ufabc-track.herokuapp.com/api/alerta/' + id, {
      method : 'POST',
      headers : {"Content-Type": "application/json"},
    }).then((p)=> {
        if(p.status==200){
        }
        if(p.status==500){
        }
    })
    .catch(()=>{
        console.log("Erro")
    })
    
  }



export function CancelarAlerta() {

    let {id} = useParams();

    return(

        <div className='d-flex justify-content-center'>
        
        <div className='w-75 bg-white text-center p-5 rounded'>

            <div className='w-75 justify-content-center'>
            <h1>
                Deseja cancelar as notificações da disciplina?
            </h1>

            <h3 className=''>
                Ao confirmar, você não será mais no notificado por esta disciplina.
            </h3>

            <div className='justify-content-center'>
            <div className='text-white p-3 rounded botao-cancelar' onClick={() => postCancelar(id)}>
                <h4>
                    Cancelar notificação
                </h4>

            </div>
            </div>
            </div>

            
            {id}
        </div>

        </div>
    )
    
}