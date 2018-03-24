import styled from 'styled-components';
import { tomato } from '../../theme/variables';
import { Relative } from '../../theme/grid';

export const Title = styled.h1`
    margin-top: 0;
    color: ${tomato}
`;

export const VideoContainer = styled(Relative)`
    align-self: right;
    width: 90vh;
    flex-shrink: 0;
    flex-grow: 0;
`;