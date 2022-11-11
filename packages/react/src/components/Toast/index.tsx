
import { ComponentProps, useRef, useState } from "react";
import { HeaderContentStyled, ToastContainerStyled, ToastContentStyled, ViewportStyled, DescriptionStyled, DescriptionDateStyled, DescriptionStringStyled, ToastTitleStyled, ToastActionStyled } from "./styles";
import { Text } from "../text"

import * as Toasts from '@radix-ui/react-toast'
import { Button } from "../button";
import { X } from "phosphor-react";
import  {  format  }  from  'date-fns' ;
import  {  ptBR  }  from  'date-fns/locale' ;

export interface ToastProps extends ComponentProps<typeof ToastContainerStyled> {
    interval?: number;
    IsDate?: Boolean;
    string: string;
    description?: string;
}


export  const  formattedDate  =  format ( new  Date ( ) ,  'dd MMM aaaa' ,  {
  locale : ptBR ,
} ) ;

export function Toast({ description, interval, IsDate, ...props }: ToastProps) {
    const [open, setOpen] = useState(false);

    const date = new Date()

    return (
        <ToastContainerStyled swipeDirection="right" {...props}>
            <Button onClick={() => {
              setOpen(true);
              setTimeout(() => {
                setOpen(false);
              }, interval);
            }}>Add to Calendar</Button>

            <ToastContentStyled open={open}>
                <HeaderContentStyled>
                    <ToastTitleStyled>Agendamento realizado</ToastTitleStyled>   
                    <ToastActionStyled asChild altText="Goto schedule to undo" onClick={() => setOpen(false)}>
                        <X size={12}/>
                    </ToastActionStyled>
                </HeaderContentStyled>
                <DescriptionStyled>
                    {!IsDate ? (

                    <Text>
                        {description}
                    </Text>

                    ): (

                        <DescriptionDateStyled>
                            <p>{format(date, 'eee', { locale: ptBR})}</p>
                            <strong>,</strong>
                            <p>{format(date, 'dd', { locale: ptBR})}</p>
                            <span>de</span>
                            <p>{format(date, 'MMMM', { locale: ptBR})}</p>
                            <span>às</span>
                            <p>{format(date, 'k', { locale: ptBR})}h</p>
                        </DescriptionDateStyled>
                    )}

                </DescriptionStyled>
            </ToastContentStyled>

            <ViewportStyled />
        </ToastContainerStyled>
    )
}

