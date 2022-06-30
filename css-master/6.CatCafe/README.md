미완성. 글자 숨기는 기능만 넣으면 된다. 
해결: overflow:hidden 이걸 넣어 주면 된다. 

다른사람의 해결방법. 

      .left_bottom_top{
        background:#fff;
        grid-area:left_bottom_top;
        display: grid;
        align-items:center;
        font-size:11px;
        letter-spacing: 3px;
        font-weight:bold;
        color:#F97341;
        text-align:center;

        writing-mode: vertical-rl;
        transform: scale(-1);
/*         transform: rotate(-180deg) translateY(-100%) translateX(-100%); */
글씨를 왼쪽으로 회전시키는걸 나는 노가다 식으로 했는데 이분은 이런식으로 했다. 다음에 나도 실험해 봐야 겠다. 
