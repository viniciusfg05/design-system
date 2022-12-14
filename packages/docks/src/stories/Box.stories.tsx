import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@foreverdark/react'

export default {
    title: 'Sufaces/Box',
    component: Box,

    args: {
        children: (
            <>
                <Text>Testando o Elemento Box</Text>
            </>
        )
    },
    argTypes: {
        children: {
            control: {
                type: null
            }
        }
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
