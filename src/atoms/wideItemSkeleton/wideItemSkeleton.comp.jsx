import { WideItemSkeletonHeader, WideItemSkeletonMain, WideItemSkeletonWrapper } from "./wideItemSkeleton.style";


export function WideItemSkeleton() {
    return (
        <WideItemSkeletonWrapper>
            <WideItemSkeletonHeader></WideItemSkeletonHeader>
            <WideItemSkeletonMain></WideItemSkeletonMain>
        </WideItemSkeletonWrapper>
    )
}