## 진학성 포트폴리오


### 소개  
🖥️새로운 기술에 도전하고 끊임없이 노력하는 프론트엔드 개발자

개발자는 말이 아니라 코드로 소통합니다.

더 나은 코드를 위해 끊임없이 고민하고 공부하는 개발자입니다. 



[진학성 포트폴리오 링크](https://harryjin12.github.io/HarryJin12/)

-- -- --

### ⚒️기술스택
<img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white"/> <span/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/> 
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/> 
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/> 
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/>

-- -- --
### 🎉프로젝트

주제 : 광주광역시 범죄 공공데이터를 활용한 광주 안전 정보서비스

<img src="./hakseong_portfolio/src/components/img/광주안전정보_Main.png" width="50%" height="40%" title="px(픽셀) 크기 설정" alt="G-Main"></img>

- 서비스
- 사용자가 선택한 연도와 구의 관한 5대범죄검거현황과, CCTV 설치 수, 보안등(가로등) 설치 수, 광주 아동안전지킴이집 수, 범죄율 등을 확인할 수 있습니다.
- 실시간 게시판을 통해 갑자기 생기는 범죄문제들을 다른 사용자들에게 알릴 수 있고, 범죄에 관한 정보를 실시간으로 공유 할 수 있습니다.
- 안전지도를 통하여 주변의 파출소, 경찰서 위치나 정보를 확인할 수 있습니다.


맡은 역할 : 팀장, 그래프 라이브러리 연동, 카카오 지도 API 연동, 프론트엔드 와 데이터베이스 연동 , 프로젝트 총괄

사용한 라이브러리 및 API : Recharts(그래프라이브러리), 카카오 오픈 지도 API

사용언어 : 리액트, 자바 스크립트, 노드.js(서버)

### 🖥️노드.js 를 통해 오라클 데이터 베이스 연동 코드
- 데이터베이스 초기화 및 8888번 포트에 연결

~~~
app.set('port',process.env.PORT || 8888)

// 데이터베이스 설정
database.init() // DB 초기화
oracledb.autoCommit = true // 자동 커밋
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, "./map/build/index.html")))

app.use('/', indexRouter)    
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 port에서 서버연결 대기중..') 
})
~~~
- 라우터 연결
~~~
router.get('/', (req, res) => {
  console.log('index Router');
  res.send(path.join(__dirname, 'map/build/index.html'));
});
~~~
~~~
const oracledb = require('oracledb')

module.exports = {
    init : function(){
        console.log('데이터베이스 초기화 완료');
        return oracledb.initOracleClient({libDir:__dirname+'./oracle_client'})
    }
}
~~~
-- -- --
#### 📊그래프 라이브러리 예시
- Recharts 설치

~~~
$ npm install recharts
~~~

- public/index.html 안에 스크립트 코드 추가
~~~
<script src="https://unpkg.com/react/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/prop-types/prop-types.min.js"></script>
<script src="https://unpkg.com/recharts/umd/Recharts.js"></script>
~~~
- 위의 과정을 마치면 원하시는 API 클릭 후 그래프를 찾고 안의 코드를 복사 하고 사용할려는 곳에 붙여 넣기 해주면 그래프가 나옵니다.


  
#### 🛠️데이터 넣기  
그래프 라이브러리 사용할 때 가장 문제가 되었던게 "그래프의 데이터 값을 어떻게 넣을까?" 이었습니다.

코드에서 바로 데이터 베이스 데이터를 가져오기가 안되서 이 문제를 해결하기 위해 매개변수를 통해 값을 
전달해서 문제를 해결했습니다.

데이터도 그냥 넣으면 그래프에 적용되는게 아니여서 리스트 형식으로 만들어 넣었습니다.

   
- map함수로 받아오는 데이터베이스 구몬
    

~~~
let sql = `select cctv_year "name", sum(sum(cctv_cnt)) over (order by cctv_year) "pv" from tbl_cctv where cctv_region like :region group by cctv_year`;
let sql2 = `select crime_year "name", crime_count "uv" from tbl_crime where crime_region=:region order by crime_year`;
~~~
     
#### 
-- -- 
#### 비동기 방식으로 보여주는 데이터

  
+ 사용자는 홈페이지 상단에서 연도와 구를 선택하여 비동기 방식으로 바뀌는 데이터를 바로 확인할 수 있습니다.

~~~
<div className="dropdown d-flex">
        <div className="dropdown-group me-3">
          <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            연도선택
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#" onClick={() => handleYearSelect(2017)}>2017</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleYearSelect(2018)}>2018</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleYearSelect(2019)}>2019</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleYearSelect(2020)}>2020</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleYearSelect(2021)}>2021</a></li>
          </ul>
        </div>
        <div className="dropdown-group">
          <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            구 선택
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#" onClick={() => handleRegionSelect('광산구')}>광산구</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleRegionSelect('남구')}>남구</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleRegionSelect('서구')}>서구</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleRegionSelect('북구')}>북구</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleRegionSelect('동구')}>동구</a></li>
          </ul>
        </div>
      </div>
~~~

버튼은 부트스트랩을 사용하여 만들었습니다

버튼 클릭 시 받은 값을 바로 데이터베이스 구몬에 들어가고 바로 실행시키게 만들었습니다.


  
https://github.com/HarryJin12/HarryJin12/assets/132454951/f778ebce-b419-4c63-a46a-12580055ecb5


~~~
 useEffect(() => {
    axios.get('http://localhost:8888/crimeCounter', {
      params: {
        region: selectedRegion,
        year: selectedYear
      }
    })
      .then((res) => {
        setCh1(res.data);
      })
      .catch(() => { });
  }, [selectedYear, selectedRegion]);
~~~


- 받아온 데이터를 매개변수를 통해 라이브러리 차트에 넣어주기


~~~
<div className='FCT2' style={{ width: 700, height: 500 }} > <ThirdChart cdata3={ch3} />
~~~

-- -- --
### 🖼️카카오 오픈 지도 API 사용

 
  
![Main_map](https://github.com/HarryJin12/HarryJin12/assets/132454951/dfbad424-bdd9-4d09-967f-45ebccdfc2c6)


  

- public/index.html 안에 스크립트 코드 추가

  
~~~
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다."></script>
~~~


- 사용할 지도의 코드를 가져와 수정 후 사용하기

   
~~~
import React, { useEffect, useState } from "react";
const { kakao } = window;


export default function Kakaomap({ searchPlace }) {
  const [Places, setPlaces] = useState([]); // 초기 값을 빈 배열로 설정

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    var markers = [];
    let container = document.getElementById("myMap"); // 변수 선언을 let으로 변경

    if (!container) {
      // 컨테이너가 존재하지 않으면 종료
      return;
    }
    const options = {
      center: new kakao.maps.LatLng(35.149939, 126.919812),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

// 코드
~~~
- 실제 코드가 너무 길어 앞 부분만 가져 왔습니다.
  지도의 검색 기능을 넣을려면 미리 검색어 지정을 해줘야 실행이 됩니다.
  
  그리고 새로 .jsx을 만들어 검색해서 나오는 값들을 리스트 모양으로 나오게끔 css를 적용시켰습니다.

~~~
import React, { useState } from 'react';
import Kakaomap from './kakaomap';
import '../components/Main.css';

function LandingPage() {
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('광주파출소');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText('');
  };
 return(
// 코드
)
~~~








-- -- --
<img src="https://github-readme-stats.vercel.app/api?username=HarryJin12&show_icons=true">
