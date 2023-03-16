import './App.css';
import DisplayQuestion from './components/DisplayQuestion';
import questions from './questions';

const containerStyle = {
    backgroundColor:"#eaedf9",
    height:'80%',
    width:'90%',
    borderRadius: 10,
    margin: 'auto'

}

const containQnStyle = {
    margin: 'auto',
    width: '90%',
}

const pgStyle = { 
    position:'absolute',
    display:'flex',
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
}

const titleStyle = {
    textAlign: 'center',
    color:'#65707d',
    fontFamily: "'Brush Script MT', cursive",
    fontSize:40
}

function App() {
  return (
    <div className="App" style={pgStyle}>
        <div style={containerStyle}>
            <h1 style={titleStyle}>FAQ</h1>
            <div style={containQnStyle}>
            {
                questions.map((data) => 
                <DisplayQuestion question={data} key={data.key}/>
                )
            }
            </div>
        </div>
    </div>
  );
}

export default App;
