import React, { useState } from 'react'
import { useEffect } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native'

import {
  Header,
  EnvButton,
  PlantCardPrimary
} from '../components'

import api from '../services/api'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface EnvProps {
  key: string
  title: string
}

interface PlantProps {
  id: string
  name: string
  about: string
  water_tips: string
  photo: string
  environments: [string]
  frequency: {
    times: number
    repeat_every: string
  }
}

export const PlantSelect = () => {

  const [name, setName] = useState<string>("Davi")

  const [env, setEnv] = useState<EnvProps[]>([])
  const [plants, setPlants] = useState<PlantProps[]>([])
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]) // continue here
  // 1:16:24 video time

  const [envSelected, setEnvSelected] = useState<string>("Todos")

  const handleEnvSelected = (title: string) => {
    setEnvSelected(title)
  }

  useEffect(() => {
    const fetchEnv = async () => {
      const { data } = await api
        .get('plants_environments?_sort=title&asc')
      setEnv([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ])
    }
    fetchEnv()
  }, [])

  useEffect(() => {
    const fetchPlants = async () => {
      const { data } = await api
        .get('plants?_sort=name&asc')
      setPlants(data)
    }
    fetchPlants()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header name={name} />
        <Text style={styles.title}>
          Em qual ambiente
        </Text>
        <Text style={styles.subtitle}>
          você quer colocar sua planta?
        </Text>
      </View>
      <View>
        <FlatList
          data={env}
          renderItem={({ item })=> (
            <EnvButton
              key={item.key}
              title={item.title}
              onPress={() => handleEnvSelected(item.title)}
              active={envSelected}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.envList}
        />
      </View>
      <View style={styles.plants}>
        <FlatList
          data={plants}
          renderItem={({ item })=> (
            <PlantCardPrimary
              data={item}
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    paddingHorizontal: 30
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading
  },
  envList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center'
  }
})