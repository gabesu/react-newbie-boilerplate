import React, {Component} from 'react';
import AddNewItem from './AddNewItem';
import List from './List';

class ToDo extends Component{

    constructor(){
        super();

        this.state = {
            listItems: ['Rice', 'Beans', 'Banana'],
            message:'',
            errorClass: false
        }

    }

    changeInput(newInput){

        // this.setState({inputItem: newInput});
        console.log(newInput);

        //Check if list already contains new item
        const itemExists = this.state.listItems.includes(newInput);

       if(itemExists){
            this.setState(prevState => ({
                message: newInput +' is already on your list',
                errorClass: true
            }));
       }else{

            newInput !== '' && this.setState(prevState => ({
                message:'',
                errorClass: false
            }));
        }
    }



    // Function to Add New Item to the List
    addNewItem(newItem) {

        //Check if list already contains new item
        const itemExists = this.state.listItems.includes(newItem);

       if(itemExists){
            this.setState(prevState => ({
                message: newItem +' is already on your list'
            }));
       }else{

            newItem !== '' && this.setState(prevState => ({
                listItems: [newItem].concat(prevState.listItems), // This adds newItem to the top of the list/array
                // listItems: prevState.listItems.concat(newItem)
                message:''
            }));


       }

    }

    render() {
        const {listItems} = this.state;

        const {errorClass} = this.state;

        //Tell Abel deconstructing gives current state to props
        const {message} = this.state;
        return(
            <div>
                {
                    this.state.message !== '' && <p>{this.state.message}</p>
                }

                <AddNewItem
                clicked={(newItem)=> this.addNewItem(newItem)}
                errorClass={this.state.errorClass}
                changeInput={this.changeInput.bind(this)}
                />


                <List listItems={listItems} />

            </div>
        )
    }
}

export default ToDo;