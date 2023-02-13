import styles from '../ProgressControl/ProgressControl.module.css'
import {ReactComponent as LeftArrow} from '../../assets/icons/left-arrow.svg'
import {ReactComponent as RightArrow} from '../../assets/icons/right-arrow.svg'

export default function ProcessControl () {
  return (
    <div>
      <div className={styles.hr}></div>
        <StepOneProgressControl />
        {/* <StepTwoProgressControl />
        <StepThreeProgressControl /> */}
    </div>
  )
}

function PrevBtn () {
  return (<button className={styles.prev}><LeftArrow /> 上一步 </button>
  )
}

function NextBtn () {
    return ( <button className={styles.next}> 下一步 <RightArrow /></button>
  )
}

function OrderBtn () {
  return (<button className={styles.next}>確定下單</button>
  )
}

function StepOneProgressControl () {
  return (
    <div>
      <section className={styles.buttonGroup} data-phase="address">
        <NextBtn/>
      </section>
    </div>
  )
}

function StepTwoProgressControl () {
  return (
    <div>
      <section className={styles.buttonGroup} data-phase="shipping">
        <PrevBtn />
        <NextBtn/>
      </section>
    </div>
  )
}

function StepThreeProgressControl () {
  return (
    <div>
      <section className={styles.buttonGroup} data-phase="credit-card">
        <PrevBtn />
        <OrderBtn />
      </section>
    </div>
  )
}