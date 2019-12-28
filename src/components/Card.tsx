import styled from 'styled-components';
import colors from '../lib/colors';
import shadow from '../lib/shadow';
import spacing from '../lib/spacing';

export default styled.section`
  background-color: ${colors.white};
  ${shadow};
  padding: ${spacing[4]};
  border-radius: 2px;
`;
