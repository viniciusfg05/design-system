import { styled } from "../../styles";
import { Text } from "../text";

export const MultStepCotainerStyled = styled('div', {
    width: '100%',
})

export const LabelStyled = styled(Text, {
    color: '$gray200',

    defaultVariants: {
        size: 'xs'
    }
})

export const StepsStyled = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
    gap: '$2',
    marginTop: '$1',
  })
  
  export const StepStyled = styled('div', {
    height: '$1',
    borderRadius: '$px',
    backgroundColor: '$gray600',
  
    variants: {
      active: {
        true: {
          backgroundColor: '$gray100',
        },
      },
    },
})

