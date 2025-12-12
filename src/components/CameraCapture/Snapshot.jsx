import './Snapshot.css';

function Snapshot({ snapshotUrl }) {
  return (
    <div className="snapshot">
      <h2>Snapshot:</h2>
      <div className="snapshot__container">{snapshotUrl && <img className="snapshot__img" src={snapshotUrl} alt="Video snapshot." />}</div>
    </div>
  );
}

export default Snapshot;
