import { Component } from "react";
// Component : 가독성 / 재사용성 / 유지 보수성을 높이기 위해 복잡한 HTML 코드를 모듈화 할 수 있는 최소 단위
class Content extends Component{
  render(){
    return(
      <div>이건 Content 입니다.</div>
    );
  }
}

class Title extends Component{
  render(){
    return(
      <div> 이건 Title 입니다.</div>
    );
  }
}
class App extends Component{
  render(){
    return (
      <div>
        <Title/> {/* 아니 여기엔 주석 어케씀?? */}
        <Content/>
      </div>
    );
  }
}
// App이라는 Component가 구현되어 있다
// App은 class이며 Component를 상속받는다. App Component를 사용하면 <div>Hello World!</div> HTML 태그를 렌더링 하게 된다.

export default App;
