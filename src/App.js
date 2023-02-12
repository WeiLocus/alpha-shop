import styles from './app.module.css';
import StepProgress from "./components/step-progress/StepProgress.js";
import Step1 from "./components/step/Step1.js";
import Step2 from './components/step/Step2.js';
import Step3 from './components/step/Step3.js';
import ProgressControl from './components/progress-control/ProgressControl.js'


function App() {
  return (
    <div className={styles.container}>
      <StepProgress />
      <div className={styles.stepWrapper}>
        {/* <Step1 />
        <Step2 /> */}
        <Step3 />
        <ProgressControl />
      </div>
    </div>
  )
}

export default App;