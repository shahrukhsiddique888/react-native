import 'dotenv/config';

export default {
    expo: {
        name: 'movieapp',
        slug: 'movieapp',
        extra: {
            EXPO_PUBLIC_MOVIE_API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
        },
    },
};
