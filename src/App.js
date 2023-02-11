import styles from './app.module.css';
import StepProgress from "./components/step-progress/stepProgress.js";
import StepPanel1 from "./components/step/stepPanel1.js";
import StepPanel2 from './components/step/stepPanel2.js';
import StepPanel3 from './components/step/stepPanel3.js';
import ProgressControl from './components/progress-control/progressControl.js'


function App() {
  return (
    <div className={styles.container}>
      <StepProgress />
      <div className={styles.stepWrapper}>
        {/* <StepPanel1 />
        <StepPanel2 /> */}
        <StepPanel3 />
        <ProgressControl />
      </div>
    </div>
  )
}

export default App;