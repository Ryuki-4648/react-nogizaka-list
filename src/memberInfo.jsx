import React from "react";

import img01 from './img/color01.png';
import img02 from './img/color02.png';
import img03 from './img/color03.png';


export const MemberInfo = () => {
  const memberList = [
    {name: 'Mai Shiraishi', birth: '1992/7/16', img: `${img01}`, born: '群馬県', memo:'ああああああ'}, // img: {img01}だと、src=""[ObjectObject]となり、画像表示されない
    {name: 'Nanase Nishino', birth: '1995/1/16', img: `${img02}`, born: '大阪府', memo:'いいい'},
    {name: 'Erika Ikuta', birth: '1995/3/16', img: `${img03}`, born: 'ドイツ', memo:'うううううううううううううううううううううううう'},
  ];
  
  return(
    <ul className="list">
    {memberList.map((member, index) => {
      return (
        <li className="list-item" key={member}>
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