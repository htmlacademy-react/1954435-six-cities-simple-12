import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  roomCardCount: number;
};

function App({roomCardCount}: AppProps): JSX.Element {
  return <MainScreen roomCardCount={roomCardCount}/>;
}

export default App;
