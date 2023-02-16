import styles from '../ProgressControl/ProgressControl.module.css'
import {ReactComponent as LeftArrow} from '../../assets/icons/left-arrow.svg'
import {ReactComponent as RightArrow} from '../../assets/icons/right-arrow.svg'

export default function ProcessControl () {
  return (
    <section className={styles.progressControlContainer}>
        {/* <StepOneProgressControl /> */}
        <StepTwoProgressControl />
        {/* <StepThreeProgressControl /> */}
    </section>
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
    <>
      <section className={styles.buttonGroup} data-phase="address">
        <NextBtn/>
      </section>
    </>
  )
}

function StepTwoProgressControl () {
  return (
    <>
      <section className={styles.buttonGroup} data-phase="shipping">
        <PrevBtn />
        <NextBtn />
      </section>
    </>
  )
}

function StepThreeProgressControl () {
  return (
    <>
      <section className={styles.buttonGroup} data-phase="credit-card">
        <PrevBtn />
        <OrderBtn />
      </section>
    </>
  )
}