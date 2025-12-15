import CameraCaptureFlow from './components/CameraCapture/CameraCaptureFlow';

function App() {
  return (
    <div className="app">
      <h1>Video Capture</h1>
      <CameraCaptureFlow captureMode={{ type: 'manual' }} />
    </div>
  );
}

export default App;
