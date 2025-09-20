import apiClient from "../apiClient/apiClient"
import type { CarouselItem } from "../types/types";

export const getCarousel = async () => {
  const response = await apiClient.get<CarouselItem[]>('/carousel');
  return response.data;
}