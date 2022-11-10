import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@foreverdark/react'

export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore impedit unde molestias libero, harum autem fugiat quo eligendi aut nam nihil illo ipsum natus quisquam voluptatum necessitatibus distinctio est cupiditate.',
        size: 'md'
    },
    argTypes: {
        size: {
            options: [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl' ],
            control: {
              type: 'inline-radio'
            }
        },
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong'
    }
}

