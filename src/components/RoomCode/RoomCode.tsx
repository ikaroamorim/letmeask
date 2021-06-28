import copyImg from '../../assets/images/copy.svg';
import { IRoomCodeProps } from '../../interfaces/IRoomCodeProps';

import './roomcode.scss';

export function RoomCode( props: IRoomCodeProps) {
   function copyRoomCodeToClipboard(){
      navigator.clipboard.writeText(props.code);
   }

   return (
      <button 
      className="room-code"
      onClick={copyRoomCodeToClipboard}>
         <div>
            <img src={copyImg} alt="Copy room code" />
         </div>
         <span>Sala# {props.code}</span>
      </button>
   )
}