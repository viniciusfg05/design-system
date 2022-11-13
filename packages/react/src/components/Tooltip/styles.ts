import { styled } from "../../styles"
import * as Toast from '@radix-ui/react-tooltip'
import { fontSizes } from "@foreverdark/tokens/dist"
import { keyframes } from "@stitches/react"

export const ToolTipContainerStyled = styled(Toast.Provider, {

})

export const ToolTipRootStyled = styled(Toast.Root, {


})

export const ToolTipTriggerStyled = styled(Toast.Trigger, {
    
})

export const ToolTipPortalStyled = styled(Toast.Portal, {

})

export const ToolTipArrowStyled = styled(Toast.Arrow, {
    fill: '$gray900',
    width: '1rem',
    height: '0.5rem',
})

const transformSlide = keyframes({
    from: {
        transform: 'translateY(-100%)',
    },
    to: {
        transform: 'translateY(0)',
    },
})

const slideIn = keyframes({
    from: {
        transform: 'scale(0)',
        height: '0',
        opacity: '0'
    },
    to: {
        transform: 'scale(1)',
        height: '2.75',
        opacity: '1'
    },
})

const slideOut = keyframes({
    to: {
        transform: 'scale(0)',
        height: '0',
        opacity: '0'
    },

    from: {
        transform: 'scale(1)',
        height: '2.75',
        opacity: '1'
    },
})

export const ToolTipContentStyled = styled(Toast.Content, {
    backgroundColor: '$gray900',
    color: '$gray100',
    padding: '$3',
    borderRadius: '$md',
    width: '13.125rem',
    height: '2.75',
    fontFamily: 'Inter, roboto',
    fontSizes: '$sm',
    alignItems: 'center',
    textAlign: 'center',
    border: 'none',
    // fontWeight: '$medium',

    '&[data-state="delayed-open"]': {
        animation: `${slideIn} 200ms ease-out `,
    },

    '&[data-state="closed"]': {
        animation: `${slideOut} 200ms ease-out`,
    },
})


