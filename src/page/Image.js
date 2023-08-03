import logo from '../logo.svg';

function Image() {
  return (
    <>
        *src폴더안에 이미지 출력 <br/>
        <img src={logo} alt="" />
        
        *public폴더안에 이미지 출력 <br/>
        <img src="./logo512.png" alt="" />
        {/* public폴더안의 이미지 출력,img 리소스를 퍼블릭안에 두면 경로 헷갈릴 일이 없다 위에처럼 */}
    </>
  )
}

export default Image;