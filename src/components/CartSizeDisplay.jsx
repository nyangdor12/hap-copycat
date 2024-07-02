import { useCartList } from './cartlist-hooks';

export default function CartSizeDisplay() {
    const { cartList } = useCartList();

    if (!cartList.length) return <div></div>;
    return (
        <div>{cartList.reduce((n, {qty}) => n + qty, 0)}</div>
    );
}