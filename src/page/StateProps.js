import { useState } from "react";
// 아래서 useState 자동완성 시키면 위에 자동생성됨


function StateProps({data,name}) {
    console.log(data, name)
    // 1000 props

    let [count, setCount] = useState(0);
        // 0 ,  f 각각 대응시키기 
        // 가상dom과 실제dom
    console.log(count)
    // [0, ƒ]

    
    function plus(){
        // console.log( ++count )
        
        // document.querySelector('button').innerHTML = count;
        // 위처럼 해도 잘 작동함. 하.지.만. document.querySelector('button')을 함수 밖의 변수에 담는순간 에러가 난다. 
        // 왜냐하면 바로 읽혀서?..암튼 그래서 변수를 함수 안에 써야하는데 여러군데 써야할경우 답이 없어진다.
        setCount( ++count );
        // setCount는 출력용, useState와 쌍으로 쓰이며 값을 변하게 하고 출력하고..
    }


  return (
    <>
        <h2>Props</h2>

        * 부모 컴포넌트에서 자식 컴포넌트로 값을 보내줄때 사용<br />
        * 부모안에 있는 &#60;자식컴포넌트 <b>속성='값'</b> /&#62;<br />
        * function 자식( <b>props</b> )&#123; <br />
            &nbsp; &nbsp; 
            console.log( props ) // <b>&#123;속성 : '값'&#125; </b><br />
            &#125;<br />


            <h2>State</h2>
            <button onClick={plus}> {count} </button>
            * useState() //상태 [값, 값 수정함수] <br />
            * 값 수정함수를 이용해서 값을 수정하면 컴포넌트 자체내에 렌더링 발생 <br />
            * 렌더링이 발생하면 바뀐값이 실체 dom에 적용됨 

    </>
  )
}

export default StateProps