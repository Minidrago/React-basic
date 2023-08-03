function Css(){
    return(
        <>
        <h2>CSS </h2>
        *class => jsx문법에서 className <br />
        *jsx문법에서 스크립트를 적용시키려면 &#123; &#125;기호를 반드시 이용 <br />
        *style=&#123; 스크립트기호 &#125; 
        &#123; border:'1px solid white' &#125; <br />

          *style=&#123; &#123; border:'1px solid white' &#125; &#125;
        <hr/>

        <h2>SCSS</h2>
        {/* 먼저 터미널안의 실행되고있는것 중지>>컨트롤 C */}
        *sass install (npm install sass) <br />
        {/* 다시 실행 시키기 위해 npm start */}
        *js문서 안에서 scss파일 호출(import './App.scss') <br />
        {/* 왼쪽 탐색기의 App.css파일 이름을 App.scss로 이름 변경 */}
        {/* src폴더안의 package.json파일의 dependencies에 scss 들어왔는지 확인 */}
        *작성방법은 기존과 동일
        </>
    );
}

export default Css;