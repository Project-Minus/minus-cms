export const SNACKBAR_DOCS_TITLE = "Snackbar";
export const TOOLTIP_DOCS_DESCRIPTION = `rendering 직후에는 보이지 않다가 특정 요소에 hover 이벤트가 발생하면
출력되는 요소로, 부모 요소의 크기를 계산하여 반영한다. 정해진 property를
통해 사용자가 직접 커스텀 할 수 있다.`;
export const SNACKBAR_DOCS_DESCRIPTION = `특정 동작 이후, 사용자에게 주고 싶은 정보를 정해진 시간 동안 보여준다.
컴포넌트를 직접 호출하지 않아도 Snackbar.show(config) 처럼 간단히 사용 가능하다.
property를 통해 시간, 스타일 등을 직접 커스텀 할 수 있다.`;
export const SNACKBAR_WINDOW_CODE = `await SnackBar.error({
    message: <span>It's snackbar!</span>,
    maxCount: Infinity,
    snackbarPosition: "bottom",
    autoClose: false,
    autoCloseTime: "2000ms",
    fontSize: 10,
    });
  }}

  //show, info, success, warning, error 로 사용 가능
`;

export const SNACKBAR_UNMOUNT_CODE = `const safeUnmountSnackbar = () => {
  setTimeout(() => {
    if (snackbarRoot) {
      snackbarRoot.unmount(); 
      snackbarRoot = null;
    }
    const container = document.getElementById("snackbar-root");
    if (container) {
      container.remove();
    }
  }, 0);
};`;
