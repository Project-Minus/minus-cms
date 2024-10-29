import { AxiosError } from "axios";

import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError() as AxiosError;

  if (error.status !== 404) {
    return (
      <div className={"error-page"}>
        <div>
          <h2>올바른 접근이 아닙니다.</h2>
          <p>
            원하시는 결과를 찾을 수 없습니다.
            <br />
            자세한 내용은 시스템 담당자에게 문의하시기 바랍니다.
          </p>
          <Link to={"/"}>
            <button>메인으로 돌아가기</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={"error-page"}>
      <div>
        <h2>페이지를 찾을 수 없습니다</h2>
        <p>
          원하시는 결과를 찾을 수 없습니다.
          <br />
          올바른 URL을 입력하였는지 확인하세요. 자세한 내용은 시스템 담당자에게
          문의하시기 바랍니다.
        </p>
        <Link to={"/"}>
          <button>메인으로 돌아가기</button>
        </Link>
      </div>
    </div>
  );
}
