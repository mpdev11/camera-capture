import { useState, useRef } from 'react';
import Countdown from './Countdown';
import './VideoPreview.css';

function VideoPreview({ onSnapshot, captureMode }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [cameraAccessGranted, setCameraAccessGranted] = useState(false);
  const [countdownActive, setCountdownActive] = useState(false);

  const startCamera = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      video.srcObject = stream;
      setCameraAccessGranted(true);
      if (captureMode.type === 'auto') {
        setCountdownActive(true);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const takeSnapshot = () => {
    setCountdownActive(false);
    const video = videoRef.current;
    if (!video) return;

    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');
    if (onSnapshot) onSnapshot(imageData);
    stopStream();
    setSuccess(true);
  };

  const stopStream = () => {
    const video = videoRef.current;
    if (!video) return;

    const stream = video.srcObject;
    if (!stream) return;

    stream.getTracks().forEach((track) => track.stop());
    video.srcObject = null;
  };

  return (
    <div className="video-preview">
      <button className="video-preview__start-camera-button" onClick={startCamera} disabled={cameraAccessGranted || error || success}>
        START
      </button>
      <h2>Video:</h2>
      <div className="video-preview__video-container">
        <video className="video-preview__video" ref={videoRef} autoPlay muted playsInline style={{ display: cameraAccessGranted ? 'block' : 'none' }} />
        {countdownActive && <Countdown className="video-preview__countdown" seconds={captureMode.delay} onCountdownEnd={takeSnapshot} />}
        {error && <p className="video-preview__error">Error: {error}</p>}
        {success && <p className="video-preview__success">Snapshot successfully captured!</p>}
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {captureMode.type === 'manual' && (
        <button className="video-preview__snapshot-button" disabled={!cameraAccessGranted || error || success} onClick={takeSnapshot}>
          TAKE SNAPSHOT!
        </button>
      )}
    </div>
  );
}

export default VideoPreview;
