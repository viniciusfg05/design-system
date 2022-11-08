import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
    title: 'Typography/Heading',
    component: Heading,
    args: {
        children: 'Custum Title',
    },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'H1 heading',
        as: 'h1'
    },
    parameters: {
        docs: {
            description: {
                story: "Por padrão o heading sempre será um `H2`, mas podemos alterar com a propriedade `as` "
            }
        }
    }
}

