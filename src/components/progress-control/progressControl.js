import styles from '../progress-control/progress_control.module.css'
import {ReactComponent as LeftArrow} from '../icons/left-arrow.svg'
import {ReactComponent as RightArrow} from '../icons/right-arrow.svg'

export default function ProcessControl () {
  return (
    <div>
      <div className={styles.hr}></div>
      <section className={styles.buttonGroup} data-phase="shipping">
        <button className={styles.prev}>
          <LeftArrow /> 上一步 
        </button>
        <button className={styles.next}>
          確認下單
        </button>
      </section>
    </div>
  )
}

function ProcessControl2 () {
    return (
    <div>
      <div className={styles.hr}></div>
      <section className={styles.buttonGroup} data-phase="shipping">
        <button className={styles.prev}>
          <LeftArrow /> 上一步 
        </button>
        <button className={styles.next}>
          下一步 <RightArrow />
        </button>
      </section>
    </div>
  )
}

function ProcessControl1 () {
    return (
    <div>
      <div className={styles.hr}></div>
      <section className={styles.buttonGroup} data-phase="shipping">
        <button className={styles.firstPrev}>
          <LeftArrow /> 上一步 
        </button>
        <button className={styles.next}>
          下一步 <RightArrow />
        </button>
      </section>
    </div>
  )
}