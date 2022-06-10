import React from "react";

import img01 from './img/color01.png';
import img02 from './img/color02.png';
import img03 from './img/color03.png';
import img04 from './img/color03.png';
import img05 from './img/color03.png';
import img06 from './img/color03.png';


export const MemberInfo = () => {
  const memberList = [
    {name: 'Mai Shiraishi', birth: '1992/8/20', img: `${img01}`, born: '群馬県', memo:'乃木坂46の絶対的エース・まいやん。別名：黒石さん。ハフーン。', url:'https://www.instagram.com/m.shiraishi.official/'},
    {name: 'Nanase Nishino', birth: '1994/5/25', img: `${img02}`, born: '大阪府', memo:'乃木坂46の儚さの象徴ともいえる存在。', url:'https://www.instagram.com/nishino.nanase.official/'},
    {name: 'Erika Ikuta', birth: '1997/1/22', img: `${img03}`, born: 'ドイツ・デュッセルドルフ', memo:'唯一無二の歌声で観客魅了するミュージカル女優。ジャイアン。', url:'https://www.instagram.com/ikutaerika.official/'},
    {name: 'Yuki Yoda', birth: '1997/5/5', img: `${img04}`, born: '福岡県', memo:'奇想天外・キテレツ与田ワールド。朝ご飯は馬刺し。', url:'https://www.instagram.com/yodayuuki_oimo/'},
    {name: 'Minami Umezawa', birth: '1999/1/6', img: `${img05}`, born: '神奈川県', memo:'ひょろなが亭梅マヨ。', url:'https://www.instagram.com/ume_minami.official/'},
    {name: 'Haruka Kaki', birth: '2001/8/8', img: `${img06}`, born: '栃木県', memo:'絵描きのカキ。', url:'https://www.instagram.com/kaki_haruka_1st/'},
  ];
  
  return(
    <ul className="list">
    {memberList.map((member, index) => {
      return (
        <li className="list-item" key={member.name}>
          <div className='img-member'>
            <img src={member.img} className="" alt="logo" />
          </div>
          <div className='box-detail'>
            <h2 className='txt-name'>{member.name}</h2>
            <dl className='list-detail'>
              <dt>BirthDay</dt>
              <dd>{member.birth}</dd>
            </dl>
            <dl className='list-detail'>
              <dt>Born</dt>
              <dd>{member.born}</dd>
            </dl>
            <dl className='list-detail'>
              <dt>Memo</dt>
              <dd>{member.memo}</dd>
            </dl>
          </div>
          <a href={member.url} rel="noreferrer" target="_blank" className='btn'>Instagram</a>
        </li>
      )
    })}

  </ul>
  )
}

export default MemberInfo