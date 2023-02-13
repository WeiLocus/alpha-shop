import styles from './app.module.css';
import StepProgress from "./components/StepProgress/StepProgress";
import Step from "./components/Step/Step";
import StepTwo from './components/Step/StepTwo';
import StepThree from './components/Step/StepThree';
import ProgressControl from './components/ProgressControl/ProgressControl'


function App() {
  return (
    <div className={styles.container}>
      <StepProgress />
      <div className={styles.stepWrapper}>
        <Step />
        {/* <StepTwo />
        <StepThree /> */}
        <ProgressControl />
      </div>
    </div>
  )
}

export default App;