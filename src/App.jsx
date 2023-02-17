import styles from 'App.module.css';
import Header from "components/Header/Header"
import StepProgress from "components/StepProgress/StepProgress";
import Step from "components/Step/Step";
import StepTwo from './components/Step/StepTwo';
import StepThree from './components/Step/StepThree';
import ProgressControl from 'components/ProgressControl/ProgressControl'
import Cart from 'components/Cart/Cart'
import Footer from 'components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main className={styles.siteMain}>
        <div className={styles.mainContainer}>
          <section className={styles.registerContainer}>
            <StepProgress />
            <section className={styles.formContainer}>
              <Step />
              {/* <StepTwo />
              <StepThree /> */}
            </section>
          </section>
          <Cart />
          <ProgressControl />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;