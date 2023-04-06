const clockTitle = document.querySelector(".js-clock");

const countDownTimer = function (_class, date) {
  const D_day = new Date(date); //지정 날짜를 D_day에 대입
  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;
  let timer;

  function showRemaining() {
    const now = new Date(); //현재 시간
    const showDate = D_day - now; //

    if (showDate > -(24 * _hour) && showDate < 0) {
      clearInterval(timer);
      _class.textContent = "크리스마스다!!! ";
      return; //이브 저녁 6시부터 24시간 동안
    } else if (showDate < 0) {
      clearInterval(timer);
      _class.textContent = "아쉽지만 2022년 크리스마스가 지났습니다.ㅠㅠ ";
      return; //24시간 후
    }

    const days = (Math.floor(showDate / _day));
    const hours = String(Math.floor((showDate % _day) / _hour)).padStart(2,"0");
    const minutes = String(Math.floor((showDate % _hour) / _minute)).padStart(2,"0");
    const seconds = String(Math.floor((showDate % _minute) / _second)).padStart(2,"0");

    _class.textContent = days + "d " + hours + "h ";
    _class.textContent += minutes + "m " + seconds + "s";
  }
  timer = setInterval(showRemaining, 1000); //1초에 한번 갱신
};
countDownTimer(clockTitle, "12/24/2022 06:00 PM");
//참고 파일: https://goddaehee.tistory.com/229