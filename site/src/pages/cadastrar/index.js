import { cadastravilao } from '../../api/vilao'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify'

export default function Index(){

    const [vilao, setVilao] = useState('')
    const [maldades, setMaldades] = useState('')
    const [super_poder, setSuper_poder] = useState(false)
    const [ID, setId] = useState(0)



    async function salvarClick(){
        try{
           
         const a = await cadastravilao(vilao, maldades, super_poder, ID);
         toast.dark('heroi cadastrado')
            
            
        }
        catch (err){
            toast.error(err.message.data.erro)
        }
    }
    return(
        <main>
            <ToastContainer/>
            <input type='text' placeholder='vilao' value={vilao} onChange={e => setVilao(e.target.value)} />
            <input type='text' placeholder='maldades' value={maldades} onChange={e => setMaldades(e.target.value)} />
            <input type='text' placeholder='super_poder' value={super_poder} onChange={e => setSuper_poder(e.target.value)} />

            <button onClick={salvarClick}> Salvar</button>

            <Link to='/' className='voltar'>Voltar </Link>

        </main>
    );
}