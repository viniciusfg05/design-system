import { colors } from '@ignite-ui/tokens'

import { styled } from './styles'

const H1Styled = styled("h1", {
    fontFamily: "$default",
    color: "$gray400"
})

export function App() {
    return (
        <H1Styled style={{ color: colors.gray400 }} >Hello World</H1Styled>
    )
}
