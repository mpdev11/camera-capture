import { useState } from 'react';
import VideoPreview from './VideoPreview';
import Snapshot from './Snapshot';
import './CameraCaptureFlow.css';

function CameraCaptureFlow({ captureMode = { type: 'auto', delay: 5 } }) {
  const [snapshotUrl, setSnapshotUrl] = useState(null);
  const allowedCaptureModeTypes = ['auto', 'manual'];
  const instructions = {
    auto: 'Click the button to allow camera access. A photo will be taken automatically after a few seconds.',
    manual: 'Click the button to allow camera access. Manually take snapshot whenever you are ready!',
  };
  if (!allowedCaptureModeTypes.includes(captureMode.type)) {
    console.error(`Invalid capture mode type value: ${captureMode.type}\nValid values: ${allowedCaptureModeTypes.join(', ')}`);
  }
  return (
    <div className="camera-capture-flow">
      <p className="camera-capture-flow__instructions">{instructions[captureMode.type]}</p>
      <VideoPreview onSnapshot={setSnapshotUrl} captureMode={captureMode} />
      <Snapshot snapshotUrl={snapshotUrl} />
    </div>
  );
}

export default CameraCaptureFlow;
