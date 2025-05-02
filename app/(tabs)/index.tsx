// import { Text, View } from "react-native";
//
// export default function Index() {
//   return (
//     <View className="flex-1 justify-center items-center">
//       <Text className="text-5xl text-blue-500  font-bold">welcome.</Text>
//     </View
//       >
//   );
// }
import '../global.css'
import { Text, View } from "react-native";
import {Link} from "expo-router";


export default function Index() {
    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-5xl text-quinary font-bold">hi there</Text>
            <Link className="justify-items-start " href="/onboarding">in</Link>
        </View>

    );
}
