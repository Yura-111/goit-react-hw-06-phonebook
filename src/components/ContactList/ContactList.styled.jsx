import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
`;
export const ButtonDelete = styled.button`
width: 100px;
height: 30px;
  margin-top: ${props => props.theme.space[3]}px;
  margin-left: ${props => props.theme.space[3]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
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

export const TextContact = styled.p`
  font-size: ${props => props.theme.fontSizes[3]}px;
`;