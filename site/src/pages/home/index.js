import {} from '../../api/vilao'
import { Link } from 'react-router-dom';

export default function cadastrar(){
   
    return(
        <main>
           <Link to='/cadastrar' className='voltar'>cadastrar vilao </Link>
            <Link to='/consultar' className='consu'>Consultar vilao</Link>
        </main>
    );
}