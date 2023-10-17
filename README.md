# zipgo-layout

집사의고민팀 레이아웃 컴포넌트입니다.

## 설치

```
$ npm install zipgo-layout
or
$ yarn add zipgo-layout
```

## DesktopView

모바일 뷰를 데스크탑 뷰에서도 자연스럽게 보이게 하기 위한 상위 컴포넌트입니다.

### Props

```ts
type DesktopViewProps = {
  maxWidth?: number; // 모바일 뷰의 최대 width를 설정합니다.
  backgroundImage?: string; // 전체 뷰의 백그라운드 이미지를 설정합니다.
  backgroundColor?: string; // 전체 뷰의 백그라운드 색상을 설정합니다.
  renderSub?: React.ReactNode; // 모바일 뷰 왼쪽에 렌더링 되는 컴포넌트입니다. 자유롭게 설정해주세요.
};
```

### Example

```ts
import { DesktopView } from 'zipgo-layout';

import BackgroundImg from '@/assets/svg/background_img.svg'; // 배경 이미지

const RenderSupporter = () => {
  return <h1>집사의고민</h1>;
};

const App = () => {
  return (
    <DesktopView
      maxWidth={390}
      backgroundImage={BackgroundImg}
      renderSub={RenderSupporter}
    >
      <div>
        <h1>모바일 뷰 화면입니다.</h1>
      </div>
    </DesktopView>
  );
};

export default Demo;
```
