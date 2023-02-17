import styles from './StepTwo.module.css'

export default function StepTwo () {
  return (
    <>
      <form className={styles.stepPanel} data-phase="shipping">
        <h3 className="formTitle">運送方式</h3>
        {/* deliverContainer */}
        <section className="deliverContainer">
          <label className={styles.radioGroup} data-price="0">
            <input id="shippingStandard" type="radio" name="shipping"  checked/>
            <div className={styles.radioInfo}>
              <div className={styles.content}>
                <div className="text">標準運送</div>
                <div className="price">免費</div>
              </div>
              <div className="period">約 3~7 個工作天</div>
            </div>
            <div className={styles.radioBoxBorder}></div>
          </label>

          <label className={styles.radioGroup} data-price="500">
            <input id="shippingDhl" type="radio" name="shipping" />
            <div class={styles.radioInfo}>
              <div className={styles.content}>
                <div className="text">DHL 貨運</div>
                <div className="price">$500</div>
              </div>
              <div className="period">48 小時內送達</div>
            </div>
            <div className={styles.radioBoxBorder}></div>
          </label>
        </section>
      </form>
    </>
  )
}