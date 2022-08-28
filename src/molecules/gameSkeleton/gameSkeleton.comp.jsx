import { Container } from "../container/container.comp";
import { GameSkeletonDescText, GameSkeletonHero, GameSkeletonHeroDesc, GameSkeletonHeroImg, GameSkeletonWrapper } from "./gameSkeleton.style";


export function GameSkeleton() {
    return (
        <Container>
            <GameSkeletonWrapper>
                <GameSkeletonHero>
                    <GameSkeletonHeroImg></GameSkeletonHeroImg>
                    <GameSkeletonHeroDesc>
                        <GameSkeletonDescText></GameSkeletonDescText>
                        <GameSkeletonDescText></GameSkeletonDescText>
                        <GameSkeletonDescText></GameSkeletonDescText>
                        <GameSkeletonDescText></GameSkeletonDescText>
                        <GameSkeletonDescText></GameSkeletonDescText>
                        <GameSkeletonDescText></GameSkeletonDescText>
                    </GameSkeletonHeroDesc>
                </GameSkeletonHero>
            </GameSkeletonWrapper>
        </Container>
    )
}