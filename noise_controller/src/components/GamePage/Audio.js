import React from 'react';
//import './App.css';

// components
import AudioAnalyser from './AudioAnalyser';

class Audio extends React.Component {
	constructor() {
		super();
		this.state = {
			audio: null,
			animals: [],
			delay: 5,
			count: 0,
		};
	}

	componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick = () => {
    this.setState({
      count: this.state.count + 1
    })
    if (this.state.count >= this.state.delay) {
      this.setState({
        count: 0,
        animals: [...this.state.animals, 1]
      })
    }
  }

  startTimer = () => {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timer)
	}
	
	resetAnimals = () => {
		this.setState({
			animals: []
		})
	}

	getMicrophone = async () => {
		const audio = await navigator.mediaDevices.getUserMedia({
			audio : true,
			video : false
		});
		this.setState({ audio });
	};

	stopMicrophone = () => {
		this.state.audio.getTracks().forEach((track) => track.stop());
		this.setState({ audio: null });
	};

	toggleMicrophone = () => {
		if (this.state.audio) {
			this.stopMicrophone();
			this.stopTimer()
		} else {
			this.getMicrophone();
			this.startTimer()
		}
	};

	render() {
		console.log(this.state.animals)
		return (
			<div className="App">
				<button onClick={this.toggleMicrophone}>{this.state.audio ? 'Stop Mic' : 'Start Mic'}</button>
				{this.state.audio && (
					<div>
						<AudioAnalyser 
							audio={this.state.audio} 
							animals={this.state.animals} 
							count={this.state.count} 
							delay={this.state.delay}
							resetAnimals={this.resetAnimals}	
						/>
					</div>
				)}
				{this.state.animals &&
					this.state.animals.map(animal => 'animal')
				}
			</div>
		);
	}
}

export default Audio;
