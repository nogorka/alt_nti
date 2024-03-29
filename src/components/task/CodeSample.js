import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { defaultStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeSample = (props) => {

    return (
        props.code !== null && props.code !== "" ?
            <div>
                <br></br>
                <br></br>

                <SyntaxHighlighter language="python" style={defaultStyle} showLineNumbers={true}>
                    {props.code}
                </SyntaxHighlighter>
            </div>
            : <br></br>
    );
}
export default CodeSample;