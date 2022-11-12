import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Text, Toast, ToastProps} from '@foreverdark/react'



export default {
    title: 'Form/Toast',
    component: Toast,
    args: {
        interval: 3000,
        IsDate: true,
    },
    argTypes: {
        interval: {
            control: 'number'
        },
        IsDate: {
            control: 'boolean'
        },
        description: {
            control: 'text'
        }
    }

} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
    args: {
        description: 'Lorem ipsum dolor sit amet, consectetur adip'
    }
}



