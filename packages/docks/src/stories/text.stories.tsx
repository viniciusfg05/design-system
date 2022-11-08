import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore impedit unde molestias libero, harum autem fugiat quo eligendi aut nam nihil illo ipsum natus quisquam voluptatum necessitatibus distinctio est cupiditate.'
    },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong'
    }
}

