import { TextInput, TextInputProps } from "./TextInput";
import {IconButton} from "./IconButton";
import "./TextInputAndButton.css"

export type TextInputAndButtonProps = TextInputProps & {
    buttonContent?: string;
    onClick?: () => void;
    iconName?: string;
}

export function TextInputAndButton( { buttonContent, onClick, iconName, ...textInputProps }: TextInputAndButtonProps )
{
    return <div className="TextInputAndButton">
        <TextInput { ...textInputProps } onEnter={ onClick } />

        <IconButton
            onClick={ onClick }
            iconName={iconName}
            value={ buttonContent }
        />
    </div>
}