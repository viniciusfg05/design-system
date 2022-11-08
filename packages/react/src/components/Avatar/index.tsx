import { User } from "phosphor-react";
import { ComponentProps } from "react";
import { AvatarContainerStyled, AvatarFallbackStyled, AvatarImageStyled } from "./styles";

export interface AvatarProps extends ComponentProps<typeof AvatarImageStyled> {}

export function Avatar(props: AvatarProps) {
    return (
        <AvatarContainerStyled>
            <AvatarImageStyled {...props}/>

            <AvatarFallbackStyled delayMs={600}>
                <User />
            </AvatarFallbackStyled>
        </AvatarContainerStyled>
    )
}