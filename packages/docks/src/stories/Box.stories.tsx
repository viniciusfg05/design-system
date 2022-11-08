import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

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
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
