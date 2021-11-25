import * as React from 'react';
import classNames from 'classnames';
import Typist from 'react-typist';

function makeChildren(elem) {
    let children = []
    if (elem.delayBefore)
        children.push(<Typist.Delay ms={elem.delayBefore}/>)

    if (elem.type === 'TypistTextElement') {
        children.push(<span>{elem.text}{elem.lineBreak ? <br/> : ''}</span>)
    } else if (elem.type === 'TypistBackspaceElement') {
        children.push(<Typist.Backspace count={elem.count}/>)
    } else {
        throw new Error(`Unknown element: ${elem}`)
    }
    return children;
}

export default function TypistSection(props) {
    return <div className={classNames('sb-component', 'sb-component-section', 'sb-typist-section')}>
        {props.elements &&
            <Typist>
                { props.elements.flatMap((elem) => makeChildren(elem)) }
            </Typist>
        }
    </div>;
}