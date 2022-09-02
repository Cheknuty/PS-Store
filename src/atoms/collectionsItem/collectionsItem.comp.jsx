import { CollectionsItemImg, CollectionsItemWrapper } from "./collectionsItem.style";


export function CollectionsItem({img, img2x}) {
    return (
        <CollectionsItemWrapper>
            <CollectionsItemImg src={img} srcSet={`${img} 1x, ${img2x} 2x`}/>
        </CollectionsItemWrapper>
    )
}