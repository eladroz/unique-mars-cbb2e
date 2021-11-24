import * as React from 'react';
import classNames from 'classnames';
import Typist from 'react-typist';

function TypistElement({line}) {
    console.log(line);
    switch(line.type) {
        case 'TypistText':
            return line.lineBreak ? 
                <div>{line.text}</div> : 
                <span>{line.text}</span> 
        case 'TypistDelay':
            return <Typist.Delay ms={line.delayMillis}/>;
        case 'TypistBackspace':
            return <Typist.Backspace count={line.count} delay={line.delayMillis}/>
        default:
            throw new Error(`Unknown typist element: ${line}`);
    }
}

function typistElement(line) {
    console.log(line);
    switch(line.type) {
        case 'TypistText':
            return line.lineBreak ? 
                <div>{line.text}</div> : 
                <span>{line.text}</span> 
        case 'TypistDelay':
            return <Typist.Delay ms={line.delayMillis}/>;
        case 'TypistBackspace':
            return <Typist.Backspace count={line.count} delay={line.delayMillis}/>
        default:
            throw new Error(`Unknown typist element: ${line}`);
    }
}

export function Hello({message}) {
    return <span>{message}</span>
}

export default function TypistSection(props) {
    console.log(props);
    return <div className={classNames('sb-component', 'sb-component-section', 'text-xl')}>
        {props.lines &&
            <Typist>
                { props.lines.map((line, idx) => {
                    const elem = typistElement(line, idx)
                    console.log(elem)
                    return elem
                })}
            </Typist>
        }
    </div>;
}