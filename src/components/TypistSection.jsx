import * as React from 'react';
import classNames from 'classnames';
import Typist from 'react-typist';
import hash from 'object-hash';

// React-typist doesn't like fragments, custom components and such, 
// so return an array of actual simple elements to add. Each should have a unique key.
function makeChildren(elem, i) {
    let children = []
    if (elem.delayBefore)
        children.push(<Typist.Delay 
                        key={`delaybefore-${i}`} 
                        ms={elem.delayBefore}/>)

    if (elem.type === 'TypistTextElement') {
        children.push(
            <span key={i}>
                {elem.text}
                {elem.lineBreak ? <br/> : ''}
            </span>)
    } else if (elem.type === 'TypistBackspaceElement') {
        children.push(
            <Typist.Backspace key={i} count={elem.count}/>)
    } else {
        throw new Error(`Unknown element: ${elem}`)
    }
    return children;
}

export default function TypistSection(props) {
    // To trigger a re-animate on each change to props.elements, the component key is based on the elements hash.
    return <div className={classNames('sb-component', 'sb-component-section', 'sb-typist-section')}>
        {props.elements &&
            <Typist key={hash(props.elements)}>
                {props.elements.flatMap((elem, i) => makeChildren(elem, i))}
            </Typist>
        }
    </div>;
}