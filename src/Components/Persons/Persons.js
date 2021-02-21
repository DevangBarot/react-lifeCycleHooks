import React, { Component } from 'react'
import Person from './Person/Person';

class Persons extends Component{

    static getDerivedStateFromProps(props,state){
        console.log('[Persons.js] getDerivedStateFromProps')
        return state;
    }

    componentWillReceiveProps(props){
        console.log('[Persons.js] componentWillReceiveProps',props)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js shouldComponenet Update]')
        /**
         * we can conditionally update the component
         */
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js]  getSnapShotBeforeUpdate...')
        return {message: 'NewMessage'};
    }

    // componentWillUpdate(){

    // }

    componentDidUpdate(prevProps,prevState,snapShot){
        console.log('[Persons.js] componentDidUpdate....')
        console.log(snapShot)
    }

    render(){
        console.log('[Persons.js] rendering.....')
        return this.props.persons.map( ( person, index ) => {
            return ( <Person
                clicked={() => this.props.clicked( index )}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={( event ) => this.props.changed( event, person.id )} />
                );
            });
    }
}

export default Persons;