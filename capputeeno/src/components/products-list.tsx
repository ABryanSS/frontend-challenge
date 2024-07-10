"use client";
import { useProducts } from "@/hooks/useProducts"

interface ProductsLIstProps {

}
export function ProductsList(props : ProductsLIstProps){
    const { data } = useProducts();
    return(
        <></>
    )
}