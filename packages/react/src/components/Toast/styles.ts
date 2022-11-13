import { styled } from "../../styles"
import * as Toast from '@radix-ui/react-toast'
import { keyframes } from "@stitches/react"
import { fontWeights, lineHeights } from "@foreverdark/tokens/dist"

export const ToastContainerStyled = styled(Toast.Provider, {


})

const slideIn = keyframes({
    from: {
        transform: 'translateX(110%)',
    },
    to: {
        transform: 'translateX(0%)',
    },
})
  
const slideOut = keyframes({
  from: { 
      transform: 'translateX(-0%)',
},
to: {
      transform: 'translateX(110%)',
  },
})

export const ToastContentStyled = styled(Toast.Root , {
    width: '22.5rem',
    height: '100%',

    backgroundColor: '$gray600',
    borderRadius: "$md",
    padding: "$4",


    '&[data-state="open"]': {
        animation: `${slideIn} 200ms ease-out`,
      },
    
    '&[data-state="closed"]': {
      animation: `${slideOut} 200ms ease-out`,
    },
})

export const ToastTitleStyled = styled(Toast.Title , {
    fontSize: "$xl",
    fontWeight: '$bold',
    color: '$white',
    marginBottom: '$1',
    fontFamily: 'Roboto',

})

export const ToastActionStyled = styled(Toast.Action , {
    display: 'flex',
    alignitems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '$5',
    height: '$5',
  
    background: 'transparent',
    border: 0,
    lineHeight: 0,
    top: '1.5rem',
    right: '1.5rem',

})

export const HeaderContentStyled = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const DescriptionStyled = styled(Toast.Description, {
    margin: 0,
    color: '$gray200',
    fontFamily: 'Roboto',
    fontSize: '$sm',
    lineHeight: '$tall'

})

export const DescriptionDateStyled = styled('div', {
    display: 'flex',
    alignItems: 'center',
    
    p: {
        textTransform: 'capitalize',
        margin: 0
    },
    
    span: {
        marginLeft: '$1',
        marginRight: '$1'
    },
    
    strong: {
        fontWeight: 'normal',
        marginRight: '$1'

    }

})

export const DescriptionStringStyled = styled('p', {
    
})



export const ViewportStyled = styled(Toast.Viewport, {
    '--viewport-padding': '$4',
    position: 'fixed',
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    width: '390px',
    maxWidth: '100vw',
    margin: 0,
    listStyle: 'none',
    zIndex: 2147483647,
    outline: 'none',
    padding: '$4'
})