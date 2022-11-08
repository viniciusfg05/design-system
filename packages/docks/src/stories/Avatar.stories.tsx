import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/viniciusfg05.png',
        alt: 'Vinicius Ferreira'
    },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    },
}


