import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../../components/searchBar/searchBar'
import UserCard from '../../components/userCard/userCard'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'
class findUserView extends Component {

    
 
    render() {
        let userCardContent= null
        if(this.props.findLoading)
        {
            userCardContent= <Spinner/>
        }
        else if(this.props.findError)
        {
            userCardContent = <span>Error!, please try again</span>
        }
        else if(this.props.user && Object.keys(this.props.user).length > 0)
        {
            userCardContent = <UserCard username={this.props.user.username} status={this.props.user.status} clicked={() => { return this.props.onAddUser(this.props.user.username)}}/>
   
        }
        else if(Object.keys(this.props.user).length === 0)
        {
            userCardContent = <span>Search for a user</span>
        }
        else{
            userCardContent= null
        }
        if(this.props.userAdded)
        {
            userCardContent= <span>{this.props.user.username+" is now your contact"}</span>
            //console.log(this.props.user.username+" is now your contact")
           // alert(this.props.user.username+" is now your contact");
          
        } 
        return (
            <React.Fragment>
                <span><br/>Find User</span>
                <SearchBar clicked={this.props.onFindUser}/>
                {userCardContent}
                
            </React.Fragment>
        )
    }
}



const mapStateToProps = (state) => ({
    user: state.findUser.user,
    findLoading: state.findUser.findLoading,
    findError: state.findUser.findError,
  

    addLoading: state.findUser.addLoading,
    addError: state.findUser.addError,
    userAdded:state.findUser.userAdded


})

const mapDispatchToProps = dispatch =>{
    return{
    onFindUser: (username) => dispatch(actions.findUser(username)),
    onAddUser: (username) => dispatch(actions.addUser(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(findUserView)
