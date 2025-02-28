 

export default function LegalPad() {
  return (
    <div>
Minus-Ui, 두번째 컴포넌트 소개 시간이 돌아왔습니다! 첫번째 tooltip을 소개하고 생각보다 시간이 오래 걸렸네요. 이번에도 거두절미 하고 바로 Story 부터 보시겠습니다.

<iframe src="https://d2gt38x81vtxw2.cloudfront.net/frame/snackbar" title="component"></iframe>

<h3>Snackbar</h3>
만들다보니까 기존 Root 이외에 다른 Root에서 렌더링 되는 컴포넌트가 재미있는 것 같습니다. 아마 다음에 소개드릴 컴포넌트도 마찬가지 아닐까 싶습니다.
snackbar 역시 많은 장점들을 담으려고 하였습니다.

<h3>minus의 Snackbar, 뭐가 좋을까?</h3>
이번에도 두가지로 설명드리도록 하겠습니다.

<b>1. 메서드 기반</b>

이 부분은 다른 라이브러리도 대부분 이런식으로 기능합니다만, 저 역시 컴포넌트를 사용하는게 아닌 
컴포넌트에 등록된 메서드를 사용하는 방식으로 구현하였습니다.
Snackbar.show(config) 의 형식으로 언제 어디서나 쉽게 사용하실수 있습니다.
또한 저는 snackbar를 비동기로 구현하였습니다.
<ins>snackbar는 '특정 동작' 이후에 사용자에게 정보를 전달하기 위해 사용하는 경우가 가장 많습니다.</ins>
그런데 그런 snackbar가 앞에 행동을 기다리지 못한다면? 생각보다 사용하기 어렵겠죠? 그렇기에 저는 await를 붙여서 비동기로로 사용하도록 기능을 구현하였습니다.

<b>2. 추가 기능</b>
기존 Snackbar 컴포넌트들은 단순한 알림 표시 기능만 제공하는 경우가 많습니다. 하지만 Minus-UI Snackbar는 다양한 유용한 기능을 추가했습니다.
<ul>
  <li>
자동 닫힘 시간 조절 – 원하는 시간만큼 유지 가능
  </li>
  <li>
닫기 버튼 활성화 – 사용자가 직접 닫을 수도 있음
  </li>
  <li>
슬라이드 애니메이션 – 부드러운 등장 및 사라짐 효과
  </li>
  <li>
Stacking 기능 지원 – 여러 개의 Snackbar를 동시에 띄울 수 있음
  </li>
  <li>
다양한 위치 지정 – 화면 상단, 하단 등 원하는 곳에 띄울 수 있음
  </li>
</ul>

추가로 궁금하신 내용이 있으시면 modal, popup 모드로 docs를 확인해주세요!
    </div>
  );
}
