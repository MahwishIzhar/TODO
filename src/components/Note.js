import React, { Component } from 'react';
import Input from './Input';
import firebase, { db } from '../firebase';
import Card from './Card.js';

class Note extends Component {



    constructor(props) {

        super();
        this.state = {

            text: '',
            uid: props.uid,
            loading: false,
            error:'',
            arr: []
        }
    }

    onTextEnter = (event) => {
        console.log(event.target.value)
        this.setState({ text: event.target.value })
    }

    AddNote = (text, uid) => {

        let temp = Date.now();
        let data = {

            ["Note_" + temp]: {
                ["Note_content_"]: text,
                ["Note_time_"]: new Date().toLocaleString()

            }

        }
// loading
this.setState({loading: true});
        db.collection("useTodo").doc(uid).set(data, { merge: true }).then((s) => { console.log("successful " + s) })
            .catch(err => {
                this.setState({error:err ,
                loading: false}
                    )

                console.log("error " + err) })
// 
        alert('Card added');
// 
        db.collection("useTodo")
            .doc(this.state.uid)
            .get()
            .then(doc => {
                const data = doc.data();
                let array = Object.values(data);
                console.log(array);

                this.setState({ arr: array ,
                loading:false});
// 
            }) .catch(err => {
                this.setState({error:err ,
                loading: false}
                    )
;
    })
}

    renderCard = () => {
        console.log("yh check krna tha :" + this.state.arr);
        return this.state.arr.map((value, i) => {
            return <Card note={value.Note_content_} time={value.Note_time_} />

        })
    }

    componentDidMount() {

        console.log(this.props);

        if(this.state.uid != ""){
         
        this.setState({loading:true});
       
        db.collection("useTodo")
            .doc(this.state.uid)
            .get()
            .then(doc => {
                const data = doc.data();
                let array = Object.values(data);
                console.log(array);
                this.setState({ arr: array ,
                loading:false});


            }) .catch(err => {
                this.setState({error:err ,
                loading: false}
                    )
;
    });
   
        }  
    
    }

    buttonClick = () => {



        if (this.state.text.length > 0) {
            this.setState({error: '' });
            this.AddNote(this.state.text, this.state.uid)
        }
        else {
this.setState({error: 'please enter your text!!' });
        }
    }

    render() {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                //  justifyContent:"center",
                alignItems: "center",
            }} >
                <div className="innerDiv">

                    <Input labelName="TODO item" PlaceHolder="Enter your text" value={this.state.text}
                        onChange={this.onTextEnter} />

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <button className="buttonStyle" onClick={() =>
                            this.buttonClick()


                        } >Add Card</button>


                    </div>


                </div>
                    {this.state.loading ?<p>loading</p>:

this.state.error == ''?
                    this.renderCard() : <p>{this.state.error}</p>}
            </div>
        );
    }
}

export default Note;