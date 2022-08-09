import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/items.json'
import { formatCurrency } from '../utilities/formatCurrency'

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()

  const item = storeItems.find((storeItem) => storeItem.id === id)

  if (item == null) return null

  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
      <img
        src={item.imgUrl}
        style={{ width: '8rem', height: '5rem', objectFit: 'cover' }}
      />
      <div className='me-auto'>
        <div>
          {item.name}{' '}
          <span className='text-muted' style={{ fontSize: '0.8rem' }}>
            x {quantity}
          </span>
        </div>
        <div className='text-muted' style={{ fontSize: '0.9rem' }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant='outline-danger'
        size='sm'
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}
