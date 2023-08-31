import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    typeA: [
      {
        image:
          'https://hotel-01.s3.ap-northeast-2.amazonaws.com/next/main/banners/typeA-1.png',
        link: 'https://www.livinginhotel.com/promotions/seoul-hotels',
        text1: '서울의 뜨거운 여름,',
        text2: '완벽하게 즐기는 여름의 순간',
        text3: '서울 호텔 최대 68% 할인',
      },
      {
        image:
          'https://hotel-01.s3.ap-northeast-2.amazonaws.com/next/main/banners/typeA-2.png',
        link: 'https://www.livinginhotel.com/promotions/premium-hotels',
        text1: '가장 많이 선택한 그곳',
        text2: '럭셔한 휴가 경험',
        text3: '상반기 결산 BEST 인기 프리미엄 호텔 할인',
      },
      {
        image:
          'https://hotel-01.s3.ap-northeast-2.amazonaws.com/next/main/banners/typeA-3.png',
        link: 'https://www.livinginhotel.com/promotions/jeju-hotels',
        text1: '푸른 하늘 아래 펼쳐지는',
        text2: '제주의 여름',
        text3: '제주 롱스테이 최대 74% 할인',
      },
    ],
  });
}
