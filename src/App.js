import './App.scss';
import Css from './page/Css';
import Image from './page/Image';
import Home from './page/Home';
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';
import Not from './page/Not';
import Router from './page/Router';
import StateProps from './page/StateProps';



/* page폴더
  ㄴCSS.js
  ㄴImage.js
  ㄴRouter.js */

function App() {
  return (
    <BrowserRouter>
    <div className="wrap">
      <header>
        <nav>
          <Link to="/"> HOME </Link>
          <Link to="/css"> CSS 활용 </Link>
          <Link to="/img"> IMAGE 활용</Link>
          <Link to="/router" state='a100'> Router(페이지이동) </Link>
          <Link to="/props"> State&Props </Link>

          {/* jsx공간에서 중괄호는 자바스크립트로 불러오겠다는 뜻 */}
        </nav>
      </header>
      
      <main>
        {/* 컴포넌트를 위 형식(마치 태그인양, 그치만 첫문자 대문자에 닫는거)으로 불러오기만 해도 알아서 맨위처럼 import해준다. */}
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='css' element={ <Css/> } />
          <Route path='/img' element={ <Image/> } />
          <Route path='/router' element={ <Router/> } />
          <Route path='/props' element={ <StateProps data='1000' name='props'/> } />
          <Route path='/*' element={ <Not/> } />

          {/* /*의 의미는 정해지지 않은 이름외 모든것이라는 뜻. 사용자가 틀린 주소를 쓰면 뜨게함 */}
        </Routes>
      </main>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
