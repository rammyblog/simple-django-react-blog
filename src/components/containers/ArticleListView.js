import React from "react"
import Articles from "../Article"
import axios from "axios"
import CustomForm from "../Form";
import {connect} from 'react-redux';

class ArticleList extends React.Component {
  state = {
    articles: []
  }

  static getDerivedStateFromProps(newProps, state) {
    if (newProps.token) {
      axios.defaults.headers ={
        "Content-Type": "application/json",
        Authorization: newProps.token
      }
      

      // axios.get("https://django-react-crud.herokuapp.com/api/")
      // .then(res => {
      //     article = res.data;
      //     console.log(article);
          
      // });


      // if (state.articles !== [] || state.articles !== null) {

      //   article = getPosts(); 
      
        
      //   return{
      //     articles: getPosts()
      //   };
      // }

      

      
      
    }
    return null;
  
  }




  componentDidMount(){
      axios.get(`https://django-react-crud.herokuapp.com/api/`).then(res =>{
        this.setState({
            articles: res.data
        });        
    })
  }



  render() {
    return (
        <div>
          
          <Articles data={this.state.articles}/>         
            <br/>
            <h2>Create an article</h2>
            <CustomForm requestType='post' articleId={null} btnText='Create'/>
        </div>
        )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
}



export default connect(mapStateToProps)(ArticleList)
