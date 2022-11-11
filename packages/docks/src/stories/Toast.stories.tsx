import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Text, Toast, ToastProps} from '@foreverdark/react'

export default {
    title: 'Form/Toast',
    component: Toast,
    args: {
        interval: 9000000000000
    },
    argTypes: {
        interval: {
        //   options: [ '2000', '3000' ],
            control: 'number'
        },
    }

} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
    args: {
    }
}


