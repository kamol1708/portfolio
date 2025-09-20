import { useQuery } from "@tanstack/react-query";
import { getCarousel } from "../myApi/apiCarousel";

function useCarousel() {
    
    const carouselQuery = useQuery({
        queryKey: ["carousel"],
        queryFn: getCarousel,
        staleTime: 1000 * 60,
    });

    console.log("Carousel Query State:", {
        data: carouselQuery.data,
    });

    return { carouselQuery };
}

export default useCarousel;
