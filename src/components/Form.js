import React from "react"
import { Form, Input, Button } from "antd";

import axios from 'axios';
import {connect} from 'react-redux';

class CustomForm extends React.Component {

    handleFromSubmit = (event, requestType, articleID) =>{

        event.preventDefault();

        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        axios.defaults.headers ={
          "Content-Type": "application/json",
          Authorization: this.props.token
        }

        switch (requestType) {
            case 'post':
                axios.post('https://django-react-crud.herokuapp.com/api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.error(err));
                break;
            
            case 'put':
                axios.put(`https://django-react-crud.herokuapp.com/api/${articleID}/`,          {
                    title: title,
                    content: content
                })
                .then(res => 
                  this.setState({
                    title: title,
                    content: content
                  })
                  )
                .catch(err => console.error(err));
                break;
        
            default:
                break;
        }
        

    }
  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.handleFromSubmit(
            event,
            this.props.requestType,
            this.props.articleID
            )}>
          <Form.Item label="Title">
            <Input name='title' placeholder="Put a title here" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name='content' placeholder="Enter some content" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
}



export default connect(mapStateToProps)(CustomForm)