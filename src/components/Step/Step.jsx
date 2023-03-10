import styles from './Step.module.css'
import SelectLocation from './SelectLocation'
import LocationOption from  './LocationOption'

export default function Step () {
  return (
    <>
      <form className={styles.stepPanel} data-phase="address">
        <h3 className="formTitle">寄送地址</h3>
        <section className={styles.infoContainer}>
          <div className={styles.line}>
            <div className={styles.inputGroup}>
              <div className="title">
                <div className={styles.inputLabel}>稱謂</div>
              </div>
              <div className="selectContainer">
                <select required>
                  <option value="mr" selected>先生</option>
                  <option value="ms">女士</option>
                  <option value="mx">不明</option>
                </select>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className="title">
                <div className={styles.inputLabel}>姓名</div>
              </div>
              <input type="text" placeholder="請輸入姓名" />
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>電話</div>
              <input type="tel" placeholder="請輸入行動電話" />
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>Email</div>
              <input type="email" placeholder="請輸入電子郵件" />
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>縣市</div>
              <div className="selectContainer">
                  <LocationOption options={SelectLocation.city}/>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>地址</div>
              <input type="text" placeholder="請輸入地址" />
            </div>
          </div>
        </section>
      </form>
    </>
  )
}