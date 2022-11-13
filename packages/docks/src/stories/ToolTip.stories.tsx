import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Text, Tooltip, TooltipProps} from '@foreverdark/react'



export default {
    title: 'Form/Tooltip',
    component: Tooltip,
    args: {
        children: "Hover"
    },
    argTypes: {
        children: {
            control: 'text'
        },
        content: {
            control: 'text'
        }
    }
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
    args: {
        content: '21 de Outubro - Indisponível'
    }
}





