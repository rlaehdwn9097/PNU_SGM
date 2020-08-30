import React from "react"
import DashboardLayout from "../components/layout/DashboardLayout"

const MyPage = () => {
  return (
    <>
      <DashboardLayout>
        <div className="mypage-contents">
          <section className="mypage_folder">
            <ul>
              <li>
                <icon>O</icon>
                <div>folder1</div>
              </li>
              <li>
                <icon>O</icon>
                <div>folder2</div>
              </li>
            </ul>
          </section>
          <section className="mypage_strategyList">
            <div>
              원하는 전략을 백테스팅 페이지 또는 공유 플랫폼에 내보낼 수
              있습니다.
            </div>
            <ol>
              <li>strategy1</li>
              <li>strategy2</li>
              <li>strategy3</li>
              <li>strategy4</li>
              <li>strategy5</li>
              <li>strategy6</li>
              <li>strategy7</li>
            </ol>
          </section>
          <section className="mypage_strategyDetail">
            <article>
              <header>STATEGY NAME</header>
              <p>
                맥스턴에서는 고수들의 투자법과 전략을 볼 수도 있으며, 자신만의
                전략을 공유할 수도 있습니다. 자신만의 전략을 수립하기 힘들다면,
                그리고 자신의 전략에 대해 피드백을 받고 싶다면 전략 공유
                커뮤니티를 활용해보세요
              </p>
            </article>

            <article>
              <header>설정지표</header>
              <ul>
                <li>주당순이익</li>
                <li>주당순이익</li>
                <li>주당순이익</li>
                <li>주당순이익</li>
                <li>주당순이익</li>
              </ul>
            </article>
            <article>
              <header>결과표</header>
              <table>
                <tr>
                  <td>투자원금</td>
                  <td>__만원</td>
                </tr>
                <tr>
                  <td>총 손익</td>
                  <td>__원</td>
                </tr>
                <tr>
                  <td>현재 총 자산 (=투자원금+총 손익)</td>
                  <td>__원</td>
                </tr>
                <tr>
                  <td>누적 수익률(CAGR)</td>
                  <td>__%</td>
                </tr>
                <tr>
                  <td>월간 수익률</td>
                  <td>__%</td>
                </tr>
              </table>
            </article>
            <article>
              <button>BACKTEST</button>
              <div>삭제</div>
            </article>
          </section>
        </div>
      </DashboardLayout>
    </>
  )
}

export default MyPage
