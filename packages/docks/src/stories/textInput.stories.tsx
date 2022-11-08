import type { Meta, StoryObj } from '@storybook/react'
import { Box, TextInput, TextInputProps, Text } from '@ignite-ui/react'

export default {
    title: 'Form/Text Input',
    component: TextInput,

    args: {},
    decorators: [
        (Story) => {
            return (
                <Box as={'label'} css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                    <Text>Email address</Text>
                    { Story() }
                </Box>
            )
        }
    ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'O que voce deseja?'
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'cal.com'
    }
}

