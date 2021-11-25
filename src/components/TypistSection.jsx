import * as React from 'react';
import classNames from 'classnames';
import Typist from 'react-typist';

function makeChildren(elem, i) {
    let children = []
    if (elem.delayBefore)
        children.push(<Typist.Delay key={`before-${i}`} ms={elem.delayBefore}/>)

    if (elem.type === 'TypistTextElement') {
        children.push((
            <span key={`text-${i}`}>
                {elem.text}
                {elem.lineBreak ? <br/> : ''}
            </span>))
    } else if (elem.type === 'TypistBackspaceElement') {
        children.push((
            <Typist.Backspace 
                key={`backspace-${i}`} 
                count={elem.count}/>))
    } else {
        throw new Error(`Unknown element: ${elem}`)
    }

    return children;
}

export default function TypistSection(props) {
    return <div className={classNames('sb-component', 'sb-component-section', 'sb-typist-section')}>
        {props.elements &&
            <Typist key={Math.random()}>
                { props.elements.flatMap((elem, i) => makeChildren(elem, i)) }
            </Typist>
        }
    </div>;
}