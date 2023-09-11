'use client';

import styled from 'styled-components';

export const Root = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.grey};
  ${({ theme }) => theme.common.flexCenterColumn};
`;
