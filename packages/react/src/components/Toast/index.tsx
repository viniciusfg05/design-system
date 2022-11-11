
import { ComponentProps, useRef, useState } from "react";
import { HeaderContentStyled, ToastContainerStyled, ToastContentStyled, ViewportStyled } from "./styles";
import * as Toasts from '@radix-ui/react-toast'
import { Button } from "../button";
import { X } from "phosphor-react";

export interface ToastProps extends ComponentProps<typeof ToastContainerStyled> {
    interval?: number;
}

export function Toast({ interval, ...props }: ToastProps) {
    const [open, setOpen] = useState(false);
    const eventDateRef = useRef(new Date());

    function prettyDate(date: Date) {
        return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date);
      }

    return (
        <ToastContainerStyled swipeDirection="right" {...props}>
            <Button onClick={() => {
              setOpen(true);
              setTimeout(() => {
                setOpen(false);
              }, interval);
            }}>CLick</Button>

            <ToastContentStyled open={open}>
                <HeaderContentStyled>
                    <Toasts.Title>Agendamento realizado</Toasts.Title>   
                    <Toasts.Action asChild altText="Goto schedule to undo" onClick={() => setOpen(false)}>
                        <X size={11}/>
                    </Toasts.Action>
                </HeaderContentStyled>
                <Toasts.Description>
                {prettyDate(eventDateRef.current)}
                </Toasts.Description>
            </ToastContentStyled>

            <ViewportStyled />
        </ToastContainerStyled>
    )
}

