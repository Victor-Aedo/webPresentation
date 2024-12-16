import { defineCollection, z } from "astro:content";
// z biblioteca integrada para validar esquemas y tipos de datos


const proyects = defineCollection({
    schema: z.object({
        title: z.string(),
        github: z.string().url(),
        description: z.string(),
        portadaImg: z.string(),
        carrusel: z.object({
            video: z.string(),
            imagenes: z.array(z.string())
        }),
    })
});

export const collections = { proyects }