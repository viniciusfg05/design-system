
import { Check } from "phosphor-react";
import { ComponentProps } from "react";
import { CheckboxContainerStyled, CheckboxIndicatorStyled } from "./styles";

export function Checkbox(props: CheckboxProps) {
    return (
        <CheckboxContainerStyled {...props}>
            <CheckboxIndicatorStyled asChild>
                <Check weight="bold"/>
            </CheckboxIndicatorStyled>
        </CheckboxContainerStyled>
    )
}

export interface CheckboxProps extends ComponentProps<typeof CheckboxContainerStyled> {}