import styled from 'styled-components';

export const ContactListContainer = styled.ul`
  list-style: none;
  margin: 10px;
  padding: 0;
`;
export const ContactListItem = styled.li`
  width: 600px;

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const ContactListBtn = styled.button`
  margin-left: 20px;
`;
export const ContactListName = styled.span`
  display: inline-block;
  width: 40%;
`;
export const ContactListNumber = styled.span`
  display: inline-block;
  width: 30%;
`;
