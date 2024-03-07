import { createProductSlug } from "../helpers/helper.js";

const blogData = [
    {   
        id: 1,
        title: "This is a Title",
        slug: createProductSlug('This is a Title'),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet inventore debitis magnam perferendis laudantium blanditiis odit repudiandae vel vitae ea!",
        photo: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
    },
    {   
        id: 3,
        title: "The Art of the Image",
        slug: createProductSlug('The Art of the Image'),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet inventore debitis magnam perferendis laudantium blanditiis odit repudiandae vel vitae ea!",
        photo: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {   
        id: 2,
        slug: createProductSlug('The Art of the Image'),
        title: "Discover Photography: The Art of the Image – Shadows Photography",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet inventore debitis magnam perferendis laudantium blanditiis odit repudiandae vel vitae ea!",
        photo: "https://lh3.googleusercontent.com/proxy/HDa7k_1_fDNx5SHKDIgi6R52zhV7gjIKWDAgNdvZ__R-agrVT9gJJ5MEJmdQ7_bBZqxj9vGTfcYIoxUQhanajNFY6vZScy3BFvVsU_Dp59RkTdrfl9Otu46-OgA39-N0IYrxlR9cs1osWAiUmis"
    },
    
]

export default blogData;