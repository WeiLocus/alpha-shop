import styles from '../ProgressControl/ProgressControl.module.css'
import {ReactComponent as LeftArrow} from '../../assets/icons/left-arrow.svg'
import {ReactComponent as RightArrow} from '../../assets/icons/right-arrow.svg'

export default function ProcessControl () {
  return (
    <div>
      <div className={styles.hr}></div>
      <section className={styles.buttonGroup} data-phase="shipping">
        <PrevBtn />
        <NextBtn/>
      </section>
    </div>

  )
}

function PrevBtn () {
  return (
    <>
      <button className={styles.firstPrev}>
        <LeftArrow /> 上一步 
      </button>
    </>
  )
}

function NextBtn () {
    return (
    <>
      <button className={styles.next}>
        下一步 <RightArrow />
      </button>
    </>
  )
}

// function ProcessControlTwo () {
//     return (
//     <div>
//       <div className={styles.hr}></div>
//       <section className={styles.buttonGroup} data-phase="shipping">
//         <button className={styles.prev}>
//           <LeftArrow /> 上一步 
//         </button>
//         <NextBtn />
//       </section>
//     </div>
//   )
// }

// function ProcessControlFinal () {
//     return (
//     <div>
//       <div className={styles.hr}></div>
//       <section className={styles.buttonGroup} data-phase="shipping">
//         <button className={styles.prev}>
//           <LeftArrow /> 上一步 
//         </button>
//         <button className={styles.next}>
//           確認下單
//         </button>
//       </section>
//     </div>
//   )
// }