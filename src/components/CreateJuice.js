import React from 'react';

class CreateJuice extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        symptoms: [
             {name: 'stress', checked: false},
             {name: 'hangover', checked: false},
             {name: 'depression', checked: false},
             {name: 'fatigue', checked: false},
             {name: 'nervousness', checked: false},
             {name: 'eyes', checked: false},
             {name: 'memory', checked: false},
             {name: 'cleansing', checked: false}
        ]
    }
}

    handleCheck(event, index) {
        let oldSymptoms = this.state.symptoms;
        oldSymptoms[index].checked = true
        this.setState({symptoms: oldSymptoms})
    }

    handleSubmit() {
        console.log(this.state);
    }

    render() {
        return (
            <div className="createJuice">
                <h1>Create Juice</h1>
                {this.state.symptoms.map( (item, index) => {
                    return (
                        <div key={index}>
                        <input type="checkbox" id={item.name} name={item.name} value={item.name} onClick={(event)=> {this.handleCheck(event, index)}} />
                    <label htmlFor="symptom1"> {item.name}</label>
                        </div>
                    )
                })  
                }
                <button onClick={(event)=> {this.handleSubmit()}}>Submit</button>
            </div>
        );
    }
}

export default CreateJuice;
