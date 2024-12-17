<h1>BeomFlix</h1>
<h2>개요</h2>
<p>React를 사용하여 영화 정보를 보여주는 플랫폼을 만든다<p>

<h2>기술 스택</h2>
<ul>
  <li>JSX</li>
  <li>Javascript</li>
  <li>CSS</li>
  <li>React</li>
</ul>

<h2>과정</h2>

***24.11.20***
- 임시 로딩 화면 생성
- Header 컴포넌트 생성
- Header 마진 및 패딩 수정

***24.11.21***

- Home 컴포넌트 제목 및 로그인, 회원가입 구성
- 실시간 추천 영화 목록 중앙 배치
- 영화 자동 슬라이더 css 애니메이션 적용

***24. 11.22***
- Movie 컴포넌트 img 크기 300x400으로 변경
- 실시간 영화 더보기 링크 생성
- 배경 색상 및 폰트 색상 설정 

***24.11.23***
- Home화면 Movie 카드 제목 및 평점 삽입 및 스타일 설정


***24.11.25***
- '더 보기 -> 영화 전체 목록 페이지' Route 설정

***24.11.26***
- Header 컴포넌트 페이지에 따라 리턴 값 수정, 링크 추가, 모든 요소에 text-decoration: none 적용
- MovieList 페이지 Header 추가
- MovieList 페이지 영화 목록 DB 가져오기 및 목록 style 일부 구현

***24.11.27***
- 영화 목록 페이지의 영화 카드 컴포넌트 'MovieListCard' 생성 및 배치


***24.12.2***
- 'TMDB'로 영화 API 변경 진행

***24.12.3***
- MovieList 페이지 영화 API 불러오기 및 이미지 설정 완료

***24.12.5***
- Home화면 실시간 인기 영화-> 실시간 추천 영화 변경
- 영화 평점 7점이상만 불러오도록 url 수정

***24.12.10***
- MovieList 페이지 스크롤 최하단 도달시 다음 영화 목록 불러오기 구현 완료

***24.12.12***
- index.js <React.StrictMode> 제거 => 매번 api가 두번 호출되던 것 해결.
- MovieList.js의 <MovieListCard>에서 key 속성에 주던 값을 movie.id에서 map의 index값으로 변경
=> 키 중복 오류 해결
- api 호출시 사용하는 option 함수 보일러코드 제거 => getOption()로 통일

***24. 12. 17***
- 영화 api 중복호출문제 해결