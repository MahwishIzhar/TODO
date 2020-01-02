import React, { Component } from 'react';

import firebase,{db} from '../firebase';
import Note from './Note';

class MainNote extends Component{
 

render(props){


    return(
    <div>
       <Note uid = {this.props.uid} />

    </div>
    );
    }  
}

export default MainNote;

