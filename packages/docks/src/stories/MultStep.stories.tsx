import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, MultStep, MultStepProps } from '@foreverdark/react'

export default {
    title: 'Form/Mult Step',
    component: MultStep,
    args: {
        size: 5,
        currentStep: 1
    },
    decorators: [
        (Story) => {
            return (
                <Box as={'label'} css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
                    { Story() }
                </Box>
            )
        }
    ]
} as Meta<MultStepProps>

export const Primary: StoryObj<MultStepProps> = {}

export const Full: StoryObj<MultStepProps> = {
    args: {
        currentStep: 2
    }
}


