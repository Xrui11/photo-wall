import React from 'react';

export default class Image extends React.Component {
    constructor(props){
        super(props);
        this.state={imgs:'',file:null}
    }

    uploadFile(formData){
        fetch('/api/upload',{
            body:formData,
            method:'post'
        })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            this.setState({imgs: result.url})
        })
        .catch((err) => console.log(err))
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('file',this.state.file);
        
        this.uploadFile(formData);
    }

    handleState = (e) => {
        this.setState({file: e.target.files[0]})
    }

    render(){
        if(this.state.imgs){
            return <img src={this.state.imgs}/>
        }
        return(
            <form action="" onSubmit={this.handleSubmit.bind(this)}>
                <input type="file" onChange={this.handleState.bind(this)}/>
                <button type='submit'>提交</button>
            </form>
        )
    }
}