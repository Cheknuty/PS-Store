import { CartItemContent, CartItemContentCompany, CartItemContentTitle, CartItemImg, CartItemWrapper } from "./cartitem.style";


export function CartItem({game : {epic, title, company}}) {
    return (
        <CartItemWrapper>
            <CartItemImg src={epic} width="300"  />
            <CartItemContent>
                <CartItemContentTitle>{title}</CartItemContentTitle>
                <CartItemContentCompany>{company}</CartItemContentCompany>
            </CartItemContent>
        </CartItemWrapper>
    )
}