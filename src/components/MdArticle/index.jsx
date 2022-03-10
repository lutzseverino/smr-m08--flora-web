import ReactMarkdown from "react-markdown";
import React from 'react';

export default class MdArticle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            article: null,
        }
    }

    componentDidMount() {
        fetch(this.props.article)
        .then(response => response.text()
        .then((data) => { 
            this.setState( { isLoaded: true, article: data } )
        }))
    }

    render() {
        const { isLoaded, article } = this.state;
        
        var result;

        if (!isLoaded) {
            result = <p>Retrieving article... please wait. Taking too long? Reload the page.</p>
        } else {
            result = <ReactMarkdown>{article}</ReactMarkdown>
        }

        return (
            
            <div className="max-w-[70ch] p-8 md:pt-32 md:pb-32 ml-auto mr-auto">
                {result}
            </div>
        )
    }
}

