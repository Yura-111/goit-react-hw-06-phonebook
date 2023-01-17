import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormContacts = styled(Form)`
display: flex;
flex-direction: column;
width: 400px;
border: 1px solid;
padding: 16px;
 
`;

export const Input = styled(Field)`
width: 300px;
font-size: 14px;
margin-bottom: 32px;
padding: 8px;

:focus {
  border-color: ${p => p.theme.colors.primary};
  outline: none;
}
`;

export const NameInput = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 20px;
  color: ${p => p.theme.colors.text};
`;

export const ButtonAdd = styled.button`
  display: block;
  width: 120px;
  height: 40px;
  margin-top: ${props => props.theme.space[3]}px;
  padding: 4px 16px;
  color: rgb(255, 255, 255);
  font-size: 16px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.radii.normal};
  cursor: pointer;

  transition: all 250ms linear;
  :hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
