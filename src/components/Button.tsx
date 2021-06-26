type ButtonProps = {
   children?: string;
   text?: string;
}

export function Button(props: ButtonProps) {
   return (
      <button> {props.text || 'Default'} </button>
   )
}

//export default Button;