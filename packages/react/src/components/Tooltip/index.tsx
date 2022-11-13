
import { ComponentProps } from "react";
import { ToolTipArrowStyled, ToolTipContainerStyled, ToolTipContentStyled, ToolTipPortalStyled, ToolTipRootStyled, ToolTipTriggerStyled } from "./styles";
import * as TooltipComp from '@radix-ui/react-tooltip'
import { Button } from "../button";


export interface TooltipProps extends ComponentProps<typeof ToolTipContainerStyled> {
    content: string;
}

export function Tooltip({ content, ...props }: TooltipProps) {
    return (
        <ToolTipContainerStyled {...props}>
            <ToolTipRootStyled delayDuration={200}>
                <ToolTipTriggerStyled asChild>
                    <Button>
                        {props.children}
                    </Button>
                </ToolTipTriggerStyled>

                <ToolTipPortalStyled>
                        <ToolTipContentStyled sideOffset={5} data-align={'center'}>
                            {content} 
                        <ToolTipArrowStyled />
                    </ToolTipContentStyled>
                </ToolTipPortalStyled>
            </ToolTipRootStyled>
        </ToolTipContainerStyled>
    )
}

