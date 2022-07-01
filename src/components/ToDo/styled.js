import styled from 'styled-components';

export const ItemTodo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  width: 250px;
  margin: 0 auto;
  text-align: left;
  margin-top: 15px;
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ItemText = styled.div`
  text-decoration: ${({ primary }) => (primary ? 'line-through' : 'none')};
  display: inline-block;
  cursor: pointer;
`;

export const DeleteItem = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 22px;
  position: relative;

  & svg {
    width: 12px;
    height: 100%;
    & path {
      fill: #fff;
    }
  }
`;
