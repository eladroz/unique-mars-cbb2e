import * as React from 'react';
import classNames from 'classnames';
import Typist from 'react-typist';

function typistElement(line, idx) {
    switch(line.type) {
        case 'TypistText':
            return line.lineBreak ? 
                <div key={idx}>{line.text}</div> : 
                <span key={idx}>{line.text}</span> 
        case 'TypistDelay':
            return <Typist.Delay  key={idx} ms={line.delayMillis}/>;
        case 'TypistBackspace':
            return <Typist.Backspace  key={idx} count={line.count} delay={line.delayMillis}/>
        default:
            throw new Error(`Unknown typist element: ${line}`);
    }
}

export default function TypistSection(props) {
    return <div className={classNames('sb-component', 'sb-component-section', 'text-xl')}>
        {props.lines &&
            <Typist>
                { props.lines.map((line, idx) => typistElement(line, idx)) }
            </Typist>
        }
    </div>;
}