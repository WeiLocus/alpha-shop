import styles from './app.module.css';
import StepProgress from "./components/step-progress/stepProgress.js";
import StepPanel1 from "./components/step/stepPanel1.js";
import StepPanel2 from './components/step/stepPanel2.js';
import StepPanel3 from './components/step/stepPanel3.js';


function App() {
  return (
    <div>
      <StepProgress />
      <div className={styles.stepWrapper}>
        <StepPanel1 />
        <StepPanel2 />
        <StepPanel3 />
      </div>
    </div>
  )
}

export default App;