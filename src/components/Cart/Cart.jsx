
import styles from './Cart.module.css'
import CartData from './CartData'
import {ReactComponent as Plus} from '../../assets/icons/plus.svg'
import {ReactComponent as Minus} from '../../assets/icons/minus.svg'

export default function Cart () {
  return (
      <section className={styles.cartContainer}>
      <h3 className="cart-title">購物籃</h3>
      <section className="productList" data-total-price="0">
        <OrderItem CartData={CartData}/>
      </section>
      <PriceCount />
    </section>
  )
}

// 將CaraData props傳入，用map迭代
function OrderItem ({CartData}) {
  return (
    <>
    {CartData.map((item) => (
        <div className={styles.productContainer} data-count="0" key={item.id} >
        <img className={styles.imgContainer} src={item.img}  alt={item.name}/>
        <div className={styles.productInfo}>
          <div className={styles.productName}>{item.name}</div>
          <div className={styles.productControlContainer}>
            <div className={styles.productControl}>
              <Minus className={styles.action}/>
              <span className="productCount">{item.quantity}</span>
              <Plus className={styles.action} />
            </div>
          </div>
          <div className="price">${item.price}</div>
        </div>
      </div>
    ))}
    </>
  )
}

function PriceCount () {
  let total = 0
  CartData.forEach((data) => {
    total += data.price * data.quantity
    return total
  })
  return (
    <>
      <section className={styles.cartInfo}>
        <div className="text">運費</div>
        <div className="price">免運</div>
      </section>
      <section className={styles.cartInfo}>
        <div className="text">小計</div>
        <div className="price">${total}</div>
      </section>
    </>
  )
}

