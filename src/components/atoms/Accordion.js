import React from 'react'
import styled from 'styled-components'

const Accordion = (props) => {

    const toggleOpen = (e) => {
        let answer = e.target.nextElementSibling;
        // display none only when 'not-active'
        if (!answer.classList.contains("not-active")){
            console.log("nottot");
            answer.classList.add("not-active");
        } else {
            answer.classList.remove("not-active");
        }
    };

    return (
        <div
            style={{ textAlign: 'left' }} 
            onClick={toggleOpen}
        >
            <QuestionDiv>
                <div className="container">
                        <span>
                            Q.&nbsp;{props.question}
                        </span>
                </div>
                <AnswerDiv className="answer not-active" >
                    <div className="container">
                        A.&nbsp;{props.answer}
                    </div>
                </AnswerDiv>
            </QuestionDiv>
        </div>

    );
}

export default Accordion;

const QuestionDiv = styled.div`
    width: 100%;
    cursor: pointer;
    /* border-top: 2px solid #ddd; */
    border-bottom: 2px solid #ddd;
    background-color: #eeeeee;
`;

const AnswerDiv = styled.div`
    width: 100%;
    background-color: #fff;
`;