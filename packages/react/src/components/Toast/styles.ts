import { styled } from "../../styles"
import * as Toast from '@radix-ui/react-toast'

export const ToastContainerStyled = styled(Toast.Provider, {


})


export const ToastContentStyled = styled(Toast.Root , {
    width: '22.5rem',
    height: '100%',

    backgroundColor: '$white',
    borderRadius: "$md",
    padding: "$4",
})

export const HeaderContentStyled = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const ViewportStyled = styled(Toast.Viewport, {
    position: 'fixed',
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    width: '390px',
    maxWidth: '100vw',
    margin: 0,
    listStyle: 'none',
    zIndex: 2147483647,
    outline: 'none',
})