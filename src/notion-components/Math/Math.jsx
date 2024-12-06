import React from 'react';
import './Math.css'
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const BlockEquation = ({ math, mode='light' }) => {
    return(
        <div className={`blockmath-main ${mode}`}>
            <BlockMath math={math} />
        </div>
    )
}

const InlineEquation = ({ math, mode='light' }) => {
    return(
        <div className={`inline-main-${mode}`}>
            <InlineMath math={math} />
        </div>
    )
}

export { BlockEquation, InlineEquation }