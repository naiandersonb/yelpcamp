import './styles.scss';

type InputType = {
    placeHolder: string;
}

export function Input(props: InputType) {
    return(
        <input type="text" placeholder={props.placeHolder} />
    )
}