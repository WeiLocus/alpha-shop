
import styles from './step_Progress.module.css'
import {ReactComponent as Complete} from '../icons/pg-complete.svg'

function StepProgress () {
  return (
  <div>
  <div className={styles.stepProgressWrapper}>
    <h2 className="register-title">結帳</h2>
    {/* register-progress */}
      <section className={styles.progressContainer}>
        <span className={styles.progressGroup}data-phase="address">
          <span><Complete /></span>
          <span className={styles.progressLabel}>寄送地址</span>
        </span>
        <span className={styles.progressBar} data-order="1"></span>
        <span class={styles.progressGroup}data-phase="shipping">
          <span><Complete /></span>
          <span className={styles.progressLabel}>運送方式</span>
        </span>
        <span className={styles.progressBar} data-order="2"></span>
        <span className={styles.progressGroup} data-phase="credit-card">
          <span className="progress-icon">
            <span className="text">3</span>
          </span>
          <span className={styles.progressLabel}>付款資訊</span>
        </span>
      </section>
    </div>
  </div>
  )
}

export default StepProgress