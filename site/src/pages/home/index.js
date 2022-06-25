import {} from '../../api/vilao'
import { Link } from 'react-router-dom';

export default function cadastrar(){
   
    return(
        <main>
           <Link to='/cadastrar' >cadastrar vilao </Link>
           <Link to='/consultar' >Consultar vilao</Link>
        </main>
    );
}