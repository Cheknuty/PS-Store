import { TinyItemSkeletonFooter, TinyItemSkeletonMain, TinyItemSkeletonWrapper } from "./tinyItemSkeleton.style";


export function TinyItemSkeleton() {
    return (
        <TinyItemSkeletonWrapper>
            <TinyItemSkeletonMain></TinyItemSkeletonMain>
            <TinyItemSkeletonFooter></TinyItemSkeletonFooter>
        </TinyItemSkeletonWrapper>
    )
}