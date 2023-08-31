/**
 * ANCHOR: 메인페이지 URL
 */
export const hotelDetailUrl = (id: number) => {
  return {
    pathname: `/api/hotel/${id}`,
  };
};
