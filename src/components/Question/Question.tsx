import { IQuestion } from "../../interfaces/IQuestionProps";
import './question.scss';

export function Question({
   content,
   author,
   isAnswered = false,
   isHighlighted = false,
   children }: IQuestion) {
   return (
      <div className={`question ${isAnswered && 'answered'} ${ (isHighlighted && !isAnswered) ? 'highlighted': ''} `}>
         <p>{content}</p>
         <footer>
            <div className="user-info">
               <div>
                  <img src={author.avatar} alt="Avatar do usuário" />
                  <span>{author.name}</span>
               </div>
               <div>
                  {children}
               </div>

            </div>
         </footer>
      </div>
   )
}