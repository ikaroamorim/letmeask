//Importações React
import { Link } from 'react-router-dom';

//Hooks
import { useAuth } from '../hooks/useAuth';

//Estilos e imagens
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';

//Componentes
import { Button } from '../components/Button/Button';

export function NewRoom() {
   const { user} = useAuth();

   return (
      <div id="page-auth">
         <aside>
            <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
            <strong>Crie salas de Q&amp;A ao vivo</strong>
            <p>Tire as dúvidas da sua equipe em tempo real</p>
         </aside>
         <main>
            <div className="main-content">
               <img src={logoImg} alt="Letmeask" />
               <h2>Criar uma nova sala</h2>
               <form>
                  <input
                     type="text"
                     placeholder="Nome da Sala"
                  />
                  <Button type="submit">
                     Criar Sala
                  </Button>
               </form>
               <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
            </div>
         </main>
      </div>);
}