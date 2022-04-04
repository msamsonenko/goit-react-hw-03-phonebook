import styled from 'styled-components';

export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  width: 300px;
  height: auto;
  margin: 10px;
`;
export const ContactFormLabel = styled.label`
  margin: 5px;
`;
export const ContactFormInput = styled.input`
  margin: 5px;
  outline: none;
`;
export const ContactFormBtn = styled.button`
  width: 100px;
  margin: 5px;
  margin-top: auto;
  padding: 5px;
  cursor: pointer;
`;
