import React from 'react';
import ReactMarkdown from 'react-markdown';
import $ from 'jquery';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            mdText : '',
            mdFileName : '',
            htmlFileNamme : ''
        };
    }

    mdOnChange(e){
        this.setState({
            mdText : e.target.value
        });
    }
    
    mdFileOnChange(e){
        this.setState({
            mdFileName : e.target.value
        });
    }

    htmlFileOnChange(e){
        this.setState({
            htmlFileNamme : e.target.value
        });
    }

    getExample(e){
        console.log("dfsf");

        // $.get(("http://localhost:8080/"), (data, status) => {
        //     console.log('data',data);
        // });

        // fetch("/",{
        //     method:"GET",
        //     // mode:"no-cors"
        // })
        // .then(response => {
        //     response.json()
        // })
        // .catch(error => console.error('Error:', error))
        // .then(response => console.log('Success:', JSON.stringify(response)));
    }

    render(){
        const {mdText, mdFileName, htmlFileNamme} = this.state;
        return (
            <div className="container">
                <h1 className="title">Markdown Note Downloader</h1>
                <h4 className="subtitle"> (ReactMarkdown Example) </h4>
                <div className="row">
                    <h2 className="col-3">Input:</h2>
                    <textarea className="col-7" value={mdText} onChange={this.mdOnChange.bind(this)}></textarea>
                </div>

                <div className="row mdFile">
                    <h4 className="col-3">Markdown File Name:</h4>
                    <input type="text" value={mdFileName} onChange={this.mdFileOnChange.bind(this)}/>
                    <a download={mdFileName + '.md'} href={URL.createObjectURL(new Blob([mdText]))}>download</a>
                </div>

                {/* <div className="row">
                    <button type="button" className="btn btn-primary" onClick={this.getExample.bind(this)}>Get example</button>
                </div> */}

                <div className="row output">
                    <h2 className="col-3">Output:</h2>
                    
                    <ReactMarkdown className="col-7 mdOutput" source={mdText}/>
                </div>

                <div className="row htmlFile">
                    <h4 className="col-3">HTML File Name:</h4>
                    <input type="text" value={htmlFileNamme} onChange={this.htmlFileOnChange.bind(this)}/>
                    <a href={URL.createObjectURL(new Blob([$('.mdOutput').html()]))} download={htmlFileNamme + ".html"}>download</a>
                </div>
                
                <div className="home">
                    <a href="http://localhost:3000/">Home</a>
                </div>
            </div>
        );
    }
}

export default App;