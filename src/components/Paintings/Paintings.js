import './Paintings.css';

export function Paintings() {
  return (
    <div className="Paintings">
        <div className='flex-row'>
            <div className='img-container'>
                <img className='square-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rembrandt_van_Rijn-De_Nachtwacht-1642.jpg/1024px-Rembrandt_van_Rijn-De_Nachtwacht-1642.jpg'></img>
            </div>
            <div className='img-container'>
                <img className='square-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rembrandt_Harmensz._van_Rijn_150.jpg/1280px-Rembrandt_Harmensz._van_Rijn_150.jpg'></img>
            </div>
        </div>
        <div className='flex-row'>
            <div className='img-container'>
                <img className='vertical-rectangle-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/P1150002_Cognacq-Jay_Rembrandt_anesse_de_Balaam_rwk.jpg/800px-P1150002_Cognacq-Jay_Rembrandt_anesse_de_Balaam_rwk.jpg'></img>
            </div>
            <div className='img-container'>
                <img className='vertical-rectangle-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Rembrandt_Harmensz._van_Rijn_154.jpg/800px-Rembrandt_Harmensz._van_Rijn_154.jpg'></img>
            </div>
            <div className='img-container'>
                <img className='vertical-rectangle-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Rembrandt_Harmensz._van_Rijn_145.jpg/800px-Rembrandt_Harmensz._van_Rijn_145.jpg'></img>
            </div>
        </div>
    </div>
  );
}