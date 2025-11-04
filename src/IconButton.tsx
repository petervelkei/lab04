import "./IconButton.css"

export type IconButtonProps = {
    iconName?: string;
    onClick?: () => void;
    value?: string;
}


export function IconButton({iconName, onClick, value}: IconButtonProps) {
    return (
        <button type="button" onClick={onClick} className="icon-button">
            <span className="material-symbols-outlined">
                {iconName}
            </span>
            {value}
        </button>
    );
}