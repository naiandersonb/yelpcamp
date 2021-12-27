import './styles.scss';

type ButtonType = {
    children: string;
    outlined?: boolean;
}

export function Button(props: ButtonType) {
    return(
        <button className={!props.outlined ? "btn" : "btn_outline"}>
            {props.children}
        </button>
    )
}