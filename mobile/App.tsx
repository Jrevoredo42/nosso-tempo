import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { styled } from 'nativewind'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'

const StyledStripes = styled(Stripes)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 items-center justify-center bg-gray-800 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Nossa capsula do tempo 💜 &#8987;
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Conjunto de recordações e momentos dedicado à todo nosso passado e
            presente, em homenagem a todo o futuro que nos espera!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-3"
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar Lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        feito com 💜 pra Sté, de João Revoredo
      </Text>

      <StatusBar style="auto" />
    </ImageBackground>
  )
}

// eslint-disable-next-line no-lone-blocks
{
  /* <Text className="font-alt text-5xl font-bold text-gray-50">
        Nosso Tempo
      </Text>
      <Text className="mt-3 text-4xl">💜 &#8987;</Text> */
}
