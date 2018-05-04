import React, {Component} from 'react';

class AddNewItem extends Component {

    constructor(props){
        super(props);

        this.state = {
            newItem: ''
        }
    }


    getNewItem(props) {

        this.props.clicked(this.state.newItem);


    }

    inputChange(event){

        const newInput = event.target.value;

        this.props.changeInput(newInput);

        this.setState( prevState => ({
            newItem: newInput
        }))



    }

    render() {

        let textClass = ['text-input'];
        if(this.props.errorClass){
            textClass.push('danger');
        }
        // console.log(this.state.errorClass);

        return(
            // ref={input => this.input = input}
            <div>
                <input type="text" className={textClass.join(" ")} onChange={this.inputChange.bind(this)}/>
                <a className="btn" onClick={() => this.getNewItem()}>Add Item</a>
            </div>
        )
    }
}

export default AddNewItem;