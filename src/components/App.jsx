import React, { Component } from 'react';
import MainPage from './MainPage/MainPage.jsx';

function App() {
  return (
    <MainPage />
  )
}
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         fetchedPlants: false,
//         plants: [],
//     }
//   }

//   componentDidMount() {
//     fetch('/plant')
//     .then((data) => data.json())
//     .then((plantsInfo) => {
//         console.log('Your plants made it to the frontend!', plantsInfo[0].plantName)
//       this.setState({
//         ...this.state,
//         plants: [plantsInfo[0].plantName]
//       });
//     })
//     .catch(err => console.log("Error on frontend fetching", err))
//   }

//     render() {
//         return (
//             <div>
//                 <h1>Hello World! This is Sarah! My Plants: {this.state.plants} </h1>
//                 <MainContainer />
//             </div>
//         )
//     }
// }

export default App;