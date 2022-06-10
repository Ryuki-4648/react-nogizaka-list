// import React from 'react'; // React17以降は不要になった
//import logo from './logo.svg';
//import memberImg from './img/dummy01.png';
/*import img01 from './img/color01.png';
import img02 from './img/color02.png';
import img03 from './img/color03.png';*/
import './App.css';
import './reset.css';
import MemberInfo from './memberInfo';
/**
 * import memberInfo from './memberInfo';にしてたら以下3つの警告やエラー
 * ・<memberInfo /> is using incorrect casing.
 * 　Use PascalCase for React components, or lowercase for HTML elements.
 * ・The tag <memberInfo> is unrecognized in this browser.
 * 　If you meant to render a React component, start its name with an uppercase letter.
 * ・memberInfo is defined but never used
 */

const App = () => {
  /*const memberList = [
    {name: 'Mai Shiraishi', birth: '1992/7/16', img: `${img01}`, born: '群馬県', memo:'ああああああ', url:'https://www.instagram.com/m.shiraishi.official/'},
    {name: 'Nanase Nishino', birth: '1995/1/16', img: `${img02}`, born: '大阪府', memo:'乃木坂46の儚さの象徴とも言える存在。', url:'https://www.instagram.com/ikutaerika.official/'},
    {name: 'Erika Ikuta', birth: '1995/3/16', img: `${img03}`, born: 'ドイツ', memo:'その唯一無二の歌声でミュージカルでも活躍。ジャイアン。', url:'https://www.instagram.com/nishino.nanase.official/'},
  ];*/
  // img: {img01}だと、src=""[ObjectObject]となり、画像表示されない

  return (
    <main>
      <div className="container">
        <h1>Nogizaka 46</h1>
        <p className="txt-msg">1st Generation</p>
        <MemberInfo/>
      </div>
    </main>

  )
}

/**
 * NGな例
 * ・keyつけてなかった
 * ・aタグに_blank付けるとエラー。rel="noreferrer"つけるとok。
 * ・<h2 className='txt-name'>{memberList[index].name}</h2>
 * <img src={memberList[index].img} className="" alt="logo" />、<dd>{memberList[index].birth}</dd>
 * とかにしてた
 * ・keyをmemberだけにしてたらエラーになった。
 * Warning: Encountered two children with the same key, `[object Object]`. Keys should be unique so that components maintain their identity across updates.
 * member.nameで解決
 */

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="" alt="logo" />
        <h1>あああ</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
