import logo from '../logo.svg';
import logo_tni from '../bais.png';
import '../App.css';
import MainContainer from './MainContainer';
import WebMapServices from './WebMapServices';
import Navbar from '../components/Navbar';
import FeatureLayerComponent from './MapComponent';
import MapComponent from './MapComponent';
import ArcGISLayer from './ArcGISLayer';

function App() {
  return (
    <div className="App">
      <div className="custom-topbar-div">
        <img src={logo_tni} alt="Image" style={{ float: 'left', marginRight: '10px', width: '50px', height: '40px' }} />
        <p className="custom-font-header-p1">Badan Intelijen Strategis TNI</p>
        <p className="custom-font-header-p2">Satuan Intelijen Teknik</p>
      </div>
      {/* <ArcGISLayer/> */}
      <WebMapServices />
      {/* <MapComponent/> */}
      {/* <FeatureLayerComponent /> */}
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
