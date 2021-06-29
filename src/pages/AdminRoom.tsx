import { Link, useHistory, useParams } from 'react-router-dom';

//Imagens e estilos
import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import '../styles/room.scss';

//Componentes
import { Button } from '../components/Button/Button';
import { RoomCode } from '../components/RoomCode/RoomCode';

//Hooks
//import { useAuth } from '../hooks/useAuth';
//import { useState } from 'react';

//Interfaces
import { IRoomParams } from '../interfaces/IRoomParams';
//import { database } from '../services/firebase';
import { Question } from '../components/Question/Question';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';




export function AdminRoom() {
   //const { user } = useAuth();
   const params = useParams<IRoomParams>();
   const roomId = params.id;
   const { title, questions } = useRoom(roomId);
   const history = useHistory()

   async function handleDeleteQuestion(questionId: string){
      if( window.confirm('Tem certeza que você deseja excluir essa pergunta?')){
         await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
      }
   }

   async function handleEndRoom(){
      database.ref(`rooms/${roomId}`).update({
         endedAt: new Date()
      })


      history.push('/');     
   }

   return (
      <div id="page-room">
         <header>
            <div className="content">
               <Link to={'/'}>
                  <img src={logoImg} alt=" Logo do Site" />
               </Link>
               <div className="room-commands-container"> 
                  <RoomCode code={roomId} />
                  <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
               </div>
            </div>
         </header>

         <main>
            <div className="room-title">
               <h1>Sala {title}</h1>
               {questions.length > 0 && <span> {questions.length} perguntas</span>}
            </div>

            <div className="question-list">
               {questions.map(question => {
                  return (
                     <Question
                        key={question.id}
                        content={question.content}
                        author={question.author}
                     >
                        <button
                        type="button"
                        onClick={() => { handleDeleteQuestion(question.id)}}>
                           <img src={deleteImg} alt="Remover Pergunta" />
                        </button>
                     </Question>
                  )
               })}
            </div>

         </main>
      </div>
   )
}
