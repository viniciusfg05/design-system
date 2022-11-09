import { MultStepCotainerStyled, LabelStyled, StepsStyled, StepStyled} from "./styles";

export interface MultStepProps {
    size: number;
    currentStep: number;
}

export function MultStep({ size, currentStep = 1 }: MultStepProps) {
    return (
        <MultStepCotainerStyled>
            <LabelStyled>Passo {currentStep} de {size}</LabelStyled>

            <StepsStyled css={{ '--steps-size': size }}>
                { Array.from({ length: size }, ( _, i) => i + 1).map(step => {
                    return <StepStyled active={currentStep >= step}/>
                }) }
            </StepsStyled>
        </MultStepCotainerStyled>
    )
}

MultStep.displayName = 'MultStep'
