/**
 * @description 메인페이지 URL
 * @param id
 */
export const hotelDetailUrl = (id: number) => {
  return {
    pathname: `/api/hotel/${id}`,
  };
};
