 

export default function LegalPad() {
  return (
    <div>
Minus-Project, 대망의 첫번째 컴포넌트 Tooltip 관해 소개하는 포스팅을
작성해보도록 하겠습니다. 긴말 없이 우선 Component Story 부터 보시겠습니다.

<iframe src="http://minus-cms.s3-website.ap-northeast-2.amazonaws.com/frame/tooltip" title="component"></iframe>


<h3>1. Minus-Project에 대하여</h3>
첫번째 포스팅이니 만큼 minus-project에 관한 설명부터 간단히 드리고 가도록 하겠습니다. 
minus는 코드를 간결하게 하자는 의미에서 지어본 이름입니다.
그렇기에 최대한 간단하고 쉬운 방법으로 로직, UI 등을 구성하려고 합니다.
<h3>2. Minus-UI</h3>
코드를 간결하게 하기 위해서 사람들은 라이브러리를 많이 사용하곤 합니다(귀찮은 이유도 있을 듯). 
하지만 저도 MUI, Antd 등의 UI 라이브러리를 많이 사용해본 결과, 생각보다 불편한 점이 많았습니다.
스타일이 내 맘에 안든다던지, 혹은 내가 원하는 기능이 없다던지 하는 문제는 많은 분들이 겪어보셨을 것입니다. 
그렇기에 저는 이럴거면 직접 만들어보자 라는 생각으로 minus를 시작했습니다. 
결국 minus는 blog임과 동시에 UI 라이브러리의 Docs가 될 예정이며, 해당 라이브러리는 Headless를 추구할 계획입니
<h3>3. 그렇다면 minus의 Tooltip, 뭐가 좋을까?</h3>

크게 두가지 장점을 설명드릴 수 있겠습니다.

<b>1. 성능향상</b>

제가 사용해본 라이브러리(가장 크게 Antd)의 Tooltip 같은 경우에는, 새로운 Root를 사용하여 원래 렌더링되던 Root와 다른 위치에 렌더링이 되는 방식으로 구현되어 있었습니다. 
해당 방식은 Root내부가 아니라 외부에 있기 때문에, 컴포넌트, 로직에 대한 간섭이 거의 없다는게 장점입니다. 
하지만 그로 인해 문제가 생기더라구요. 
바로 성능입니다.
Tooltip이 필요할 때마다 다른 Root에 추가하다 보니까, 상황에 따라서는 엄청난 수의 Tooltip이 만들어지기도 하고, 그에 따라서 렌더링이 오래 걸리는
경우도 생겨났습니다. 또한 위치에 대한 커스텀도 생각보다 힘들더라구요
그렇기에 저는 초기에 같이 렌더링되게 한 뒤 숨겨놓는 방법을 선택했습니다.
해당 기능이 FCP(First Contentful Paint) 에는 비용이 더 발생할 수 있지만,
그 후에는 훨씬 좋은 성능을 보였습니다. (react dev tool로 측정한 결과 25%의
성능 향상을 보여주었습니다.)

<b>2. 추가 기능</b>
위에서 테스트 해보신것 처럼, 편리하게 사용할 수 있는 많은 기능들을
추가했습니다. 말줄임이 일어났을 때만 Tooltip이 표출되도록 하는 기능을
추가하였습니다. 다른 라이브러리에는 없더라구요.... 직접 라이브러리 구현을
도전하게된 가장 큰 계기가 아닐까 싶습니다. drag를 할수 있어야 하는
Tooltip은 드래그가 가능하도록 변경하는 속성도 넣어놨습니다. 말풍선 꼬리
on,off 등등의 기타 기능들도 구현해놓았습니다. 껄껄 혹시 더 필요하시거나
수정이 필요한 기능이 있으시면 댓글 부탁드립니다.
      <span />
    </div>
  );
}
