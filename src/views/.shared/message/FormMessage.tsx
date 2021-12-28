import React from 'react';
import styled from 'styled-components'

interface message {
    isValidEmail? : any
    required? : any
}

const FormMessage = ({type} : any) => {

    const messageComponents : any = {
        isValidEmail : <Message>올바른 이메일을 입력 해주세요.</Message>,
        isMinLength : <Message>최소 8글자 이상 넣어 주세요.</Message>,
        required : <Message>필수 입력 사항입니다.</Message>,
    }

    return(
        <Container>
            {messageComponents[type]}
        </Container>
    )
};

const Container = styled.div`

`;
const Message = styled.div`
  color: #dc3333;
  font-size: 13px;
`;
export default FormMessage;
