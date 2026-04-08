/**
 * Pastel Dream Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg,  - 스토리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "박우정",
    nameEn: "Groom",
    father: "아버지 박근배",
    mother: "어머니 백종임",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "정지영",
    nameEn: "Bride",
    father: "아버지 정영호",
    mother: "어머니 정현숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-11-01",
    time: "12:30",
    venue: "루벨",
    hall: "35층 단독홀",
    address: "서울시 강동구 천호대로 1077 이스트센트럴타워 35~36층",
    tel: "02-6956-0230"
  },

  // ── 인사말 ──
  greeting: {
    title: "드디어 저희 결혼합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  mapLinks: {
    kakao: "https://place.map.kakao.com/1185379934",
    naver: "https://map.naver.com/p/search/%EB%A3%A8%EB%B2%A8/place/1064180088?placePath=%3FabtExp%3DNEW-PLACE-SEARCH%253A2%26bk_query%3D%25EB%25A3%25A8%25EB%25B2%25A8%26entry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=abtExp%3DNEW-PLACE-SEARCH%253A2%26bk_query%3D%25EB%25A3%25A8%25EB%25B2%25A8%26entry%3Dpll%26fromNxList%3Dtrue%26x%3D%26y%3D&searchType=place"
  },

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "박우정", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "박근배", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "백종임", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "정지영", bank: "하나은행", number: "000-000-000000" },
      { role: "아버지", name: "정영호", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "정현숙", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "박우정 ♥ 정지영 결혼합니다",
    description: "2026년 11월 1일, 소중한 분들을 초대합니다."
  }
};
