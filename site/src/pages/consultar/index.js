import { cadastravilao } from '../../api/vilao'
import { Link, useParams } from 'react-router-dom';
import { useState, } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify'



export default function Index(){

    const [vilao, setVilao] = useState('')
    const [maldades, setMaldades] = useState('')
    const [super_poder, setSuper_poder] = useState(false)
    const [ID, setId] = useState(0)

    async function listadevilao(){

    }

    
    return(
        <main className="bodylista">
            
           
                <div className='tabela'>
                    <table>
                        <thead>
                            <tr>
                                <th>vilao</th>
                                <th>maldades</th>
                                <th>super poder</th>
                            </tr>
                        </thead>
                        <tbody>

                            {vilao.map(item => 
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.vilao}</td>
                                    <td>{item.maldades}</td>
                                    <td>{item.super_poder}</td>
                                </tr>
                            )}

                            
                        </tbody>
                    </table>
                </div>        
        </main>
    );
}