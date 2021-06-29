import { IQuestion } from "../../interfaces/IQuestionProps";
import './question.scss';

export function Question( props: IQuestion){
   return (
   <div className="question">
      <p>{props.content}</p>
      <footer>
         <div className="user-info">
            <img src={props.author.avatar} alt="Avatar do usuário" />
            <span>{props.author.name}</span>
            <div></div>

         </div>
      </footer>
      </div>
   )
}