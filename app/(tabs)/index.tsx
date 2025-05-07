// // import { Text, View } from "react-native";
// //
// // export default function Index() {
// //   return (
// //     <View className="flex-1 justify-center items-center">
// //       <Text className="text-5xl text-blue-500  font-bold">welcome.</Text>
// //     </View
// //       >
// //   );
// // }
// import '../global.css'
// import {Image, ScrollView, Text, View, ActivityIndicator, FlatList} from "react-native";
// import {Link} from "expo-router";
// import {images} from "@/constants/images";
// import {icons} from "@/constants/icons";
// import SearchBar from "@/compnents/SearchBar";
// import {useRouter} from "expo-router";
// import useFetch from "@/servies/useFetch";
// import {fatchMovies} from "@/servies/api";
//
//
// export default function Index() {
//     const router = useRouter();
//
//     const {data:movies, loading:moviesLoading, error:moviesError} =useFetch(()=> fatchMovies({ query: ""}
//        ))
//     return (
//         <View className="flex-1 bg-black">
//             <Image source={images.bg} className="absolute w-full z-0"/>
//             <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: "100%", paddingBottom: 10}}>
//                 <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>
//
//                 {moviesLoading ? (
//                     <ActivityIndicator size="large" color="white"  className="mt-10 self-center" />
//                 ) : moviesError ? (
//                     <Text className="text-white text-center">Error:{moviesError?.massage}</Text>
//                 ) : (
//                     <View className="flex-1 mt-5">
//                         <SearchBar
//                             onPress ={ () => router.push("/search")}
//                             placeholder = 'searchmovie'
//                         />
//                         <>
//                             <Text className="text-white text-lg mt-5 mb-3">Latest Movies</Text>
//                             <FlatList
//                                 data={movies}
//                                 keyExtractor={(item) => item.id?.toString() || item.title}
//                                 renderItem={({ item }) => (
//                                     <Text className="text-white mb-3 mt-5">{item.title}</Text>
//                                 )}
//                             />
//                         </>
//
//
//                     </View>
//                 )}
//
//
//
//             </ScrollView>
//
//
//
//         </View>
//
//     );
// }
//
//
// // eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjkzNjUyZThmZTllYmY0OGFmNzJkMzJkM2IzZDNiZSIsIm5iZiI6MTc0NjU2NDYzOC4xNjUsInN1YiI6IjY4MWE3NjFlYzlhZjljN2YxYmRmOGZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8CQzXmpNHYF6WbF7cw5dRuHL8A1xh-Xaf9BUPi_nzVM
// // 9293652e8fe9ebf48af72d32d3b3d3be
// // <Text className="text-white text-lg mt-5 mb-3">latest movies</Text>
// // <FlatList data={movies} renderItem={({ item})=> (
// //     <Text className="text-white">{item.title}</Text>


import '../global.css';
import {
    Image,
    ScrollView,
    Text,
    View,
    ActivityIndicator,
    FlatList,

} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';
import SearchBar from '@/compnents/SearchBar';
import useFetch from '@/servies/useFetch';
import { fetchMovies } from '@/servies/api'; // Make sure it's renamed correctly

export default function Index() {
    const router = useRouter();

    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError,
    } = useFetch(() => fetchMovies({ query: '' }));

    return (
        <View className="flex-1 bg-black">
            <Image
                source={images.bg}
                className="absolute w-full h-full z-0"
                resizeMode="cover"
            />
            <ScrollView
                className="flex-1 px-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}
            >
                <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

                {moviesLoading ? (
                    <ActivityIndicator
                        size="large"
                        color="white"
                        className="mt-10 self-center"
                    />
                ) : moviesError ? (
                    <Text className="text-white text-center">
                        Error: {moviesError?.message}
                    </Text>
                ) : (
                    <View className="flex-1 mt-5">
                        <SearchBar
                            onPress={() => router.push('/search')}
                            placeholder="Search movie"
                        />
                        <Text className="text-white text-lg mt-5 mb-3">Latest Movies</Text>
                        <FlatList
                            data={movies}
                            keyExtractor={(item) => item.id?.toString()

                          } numColumns={2}
                            renderItem={({ item }) => (
                                <Text className="text-white mb-3 mt-2">{item.title}</Text>
                            )}

                            scrollEnabled={false} // since FlatList is inside ScrollView
                        />
                    </View>
                )}
            </ScrollView>
        </View>
    );
}
