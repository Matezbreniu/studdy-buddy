import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StyledAverage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, value }) => {
    if (value >= 4) return theme.colors.success;
    if (value >= 3) return theme.colors.warning;
    if (value >= 1) return theme.colors.error;
    return theme.colors.grey;
  }};
`;

export const StyledSection = styled.div`
  margin: 33px 10px 26px 24px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const StyledParagraph = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-size: ${({ theme, large }) => (large ? theme.fontSize.l : theme.fontSize.s)};
`;
