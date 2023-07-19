import ProductHero from "../views/ProductHero";

export default function Home() {
    return (
        <>
            <ProductHero />
            {
                //TODO: Add infite scroll(not actually infinite, but load more when user scrolls to bottom)
                //TODO: Add pagination / permanent footer
                //Perhaps use product image carousels going from latest s32 bpill to oldest
            }
        </>
    );
}
