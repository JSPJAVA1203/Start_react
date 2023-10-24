import { Component } from "react";
// Component : 가독성 / 재사용성 / 유지 보수성을 높이기 위해 복잡한 HTML 코드를 모듈화 할 수 있는 최소 단위
//class Content extends Component{
//  render(){
//    return(
//      <div>이건 Content 입니다.</div>
//    );
//  }
//}

// class Title extends Component{
//   render(){
//     return(
//       <div> 이건 Title 입니다.</div>
//     );
//   }
// }
// class App extends Component{
//   render(){
//     return (
//       <div>
//         <Title/> {/* 아니 여기엔 주석 어케씀?? */}
//         <Content/>
//       </div>
//     );
//   }
// }

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      example_state: "이건 Content의 state 텍스트입니다."
    };
  }

  render(){
    return(
      <div>
        {this.state.example_state}
        <input type="button" value="test 버튼"
          onClick={()=>{
            this.setState({example_state:"변경된 state 텍스트 입니다."})
          }}/>
      </div>
    );
  }
}

class Title extends Component{
  render(){
    return(
      <div>{this.props.text123}</div>
    );
  }
}

class App extends Component{
  render(){
    return(
      <div>
        <Title text123="App에서 Title로 전달하는 Text입니다."/>
        <Content example_props="App에서 Content로 전달하는 Text입니다."/>
      </div>
    )
  }
}

// App이라는 Component가 구현되어 있다
// App은 class이며 Component를 상속받는다. App Component를 사용하면 <div>Hello World!</div> HTML 태그를 렌더링 하게 된다.

// props, state 공통점과 차이점
// 공통점
// 공통점은 둘다 Component의 상태 정보를 가지고 있는 멤버 변수이며, 변경 시 render함수가 다시 호출된다.
// 렌더링이 다시된다는 의미로 값을 변경화면 화면에도 적용이 된다는 의미이다.
// 자신 Component뿐만 아니라 하위 Component까지 다시 갱신이 된다.

// props
// 상위 Component가 하위 Component에게 전달하면 생성 되는 변수
// props를 받은 Component에서는 props에 있는 값을 수정할 수 없다.

// state
// 해당 Component가 직접 생성해서 사용하는 변수
// 수정이 가능하다.

export default App;
