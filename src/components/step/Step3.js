import styles from '../step/step_panel.module.css'

export default function Step3 () {
  return (
    <div>
      <form className={styles.stepPanel} data-phase="credit-card">
        <h3 class="formTitle">付款資訊</h3>
        {/* creditCardContainer */}
        <section class={styles.creditCardContainer}>
          <div class={styles.line}>
            <div class={styles.inputGroup}>
              <div class={styles.inputLabel}>持卡人姓名</div>
              <input type="text" placeholder="John Doe" />
            </div>
          </div>
          <div class={styles.line}>
            <div class={styles.inputGroup}>
              <div class={styles.inputLabel}>卡號</div>
              <input type="text" placeholder="1111 2222 3333 4444" />
            </div>
          </div>
          <div class={styles.line}>
            <div class={styles.inputGroup}>
              <div class={styles.inputLabel}>有效期限</div>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div class={styles.inputGroup}>
              <div class={styles.inputLabel}>CVC / CCV</div>
              <input type="text" placeholder="123" />
            </div>
          </div>
        </section>
      </form>
    </div>
  )
}