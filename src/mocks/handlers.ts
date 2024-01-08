import { HttpResponse, http } from "msw";
import dailyRecipes from "./data/dailyRecipes.json";
import pizzaImage from "./images/pizza.jpg";

export const handlers = [
  // edamam recipe search
  http.get("https://api.edamam.com/api/recipes/v2", ({ req, res }) => {
    return HttpResponse.json(dailyRecipes);
  }),
  http.get("https://www.edamam.com/web-img/*", async () => {
    const { src } = pizzaImage; // it is actually in _next directory
    const imageBuffer = await fetch(src).then((res) => res.arrayBuffer());
    return HttpResponse.arrayBuffer(imageBuffer, {
      headers: {
        "Content-Type": "image/jpg",
      },
    });
  }),
  http.get(
    "https://edamam-product-images.s3.amazonaws.com/web-img/*",
    async () => {
      const { src } = pizzaImage; // it is actually in _next directory
      const imageBuffer = await fetch(src).then((res) => res.arrayBuffer());
      return HttpResponse.arrayBuffer(imageBuffer, {
        headers: {
          "Content-Type": "image/jpg",
        },
      });
    }
  ),
];
