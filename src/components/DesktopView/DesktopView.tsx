import { PropsWithChildren } from 'react';
import { keyframes, styled } from 'styled-components';

import useDesktopView from '../../hooks/useDesktopView';
import { StyledProps } from '../../types/utility';

interface DesktopViewProps extends PropsWithChildren {
  maxWidth?: number;
  backgroundImage?: string;
  backgroundColor?: string;
  renderSub?: React.ReactNode;
}

const DesktopView = (props: DesktopViewProps) => {
  const { children, maxWidth, backgroundImage, backgroundColor, renderSub } =
    props;

  const { clientWidth } = useDesktopView();

  return (
    <DesktopViewContainer $backgroundColor={backgroundColor}>
      {backgroundImage && (
        <Background alt="데스크탑 배경화면" src={backgroundImage} />
      )}
      <DesktopViewSupporter $clientWidth={clientWidth} $maxWidth={maxWidth}>
        {renderSub}
      </DesktopViewSupporter>
      <DesktopViewChildrenContainer id="mobile" $maxWidth={maxWidth}>
        {children}
      </DesktopViewChildrenContainer>
    </DesktopViewContainer>
  );
};

export default DesktopView;

interface DesktopViewContainerProps
  extends StyledProps<Pick<DesktopViewProps, 'backgroundColor'>> {}

interface DesktopViewSupporterProps
  extends StyledProps<
    Pick<DesktopViewProps, 'maxWidth'> & { clientWidth: number }
  > {}

interface DesktopViewChildrenContainerProps
  extends StyledProps<Pick<DesktopViewProps, 'maxWidth'>> {}

const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DesktopViewContainer = styled.div<DesktopViewContainerProps>`
  position: fixed;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;

  background-color: ${({ $backgroundColor = '#fff' }) => $backgroundColor};
`;

const DesktopViewSupporter = styled.div<DesktopViewSupporterProps>`
  left: calc(50vw - 51.2rem);

  display: ${({ $clientWidth, $maxWidth = 420 }) =>
    $clientWidth < $maxWidth + 512 ? 'none' : 'flex'};
  align-items: center;

  width: 51.2rem;
  max-width: 57rem;
  height: 100vh;

  opacity: ${({ $clientWidth, $maxWidth = 420 }) =>
    $clientWidth < $maxWidth + 512 ? 0 : 1};

  animation: 200ms ease-in 0s 1 normal forwards running ${opacity};
`;

const DesktopViewChildrenContainer = styled.div<DesktopViewChildrenContainerProps>`
  overflow-y: scroll;

  width: ${({ $maxWidth = 420 }) => `${$maxWidth}px`};
  height: 100vh;

  background-color: #fff;
  box-shadow: 0 0 300px 30px rgb(0 0 0 / 10%);
`;

const Background = styled.img`
  user-select: none;

  position: fixed;
  z-index: -1;

  width: 100vw;
  height: 100%;

  object-fit: cover;
`;
