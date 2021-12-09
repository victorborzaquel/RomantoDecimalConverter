import React, { useState } from 'react';
import { Alert } from 'react-native';

import {
  Container, Input, Inputs, InputTitle, InputWrapper, Title
} from './styles';

export function Home() {
  const [roman, setRoman] = useState('MCCLIV')
  const [decimal, setDecimal] = useState('1254')

  const romanNumbers = [
    { name: 'M', value: 1000 },
    { name: 'CM', value: 900 },
    { name: 'D', value: 500 },
    { name: 'CD', value: 400 },
    { name: 'C', value: 100 },
    { name: 'XC', value: 90 },
    { name: 'L', value: 50 },
    { name: 'XL', value: 40 },
    { name: 'X', value: 10 },
    { name: 'IX', value: 9 },
    { name: 'V', value: 5 },
    { name: 'IV', value: 4 },
    { name: 'I', value: 1 },
  ]

  function convertToRoman(text: string) {
    let decimal = Number(text)
    let roman = ''

    if (!decimal && text !== '') return Alert.alert('Ops', 'Apenas números são válidos')

    romanNumbers.map(romanNumber => {
      while (decimal >= romanNumber.value) {
        decimal -= romanNumber.value
        roman += romanNumber.name
      }
    })

    setDecimal(String(Number(text)))
    setRoman(roman)
  }

  function convertToDecimal(text: string) {
    const findRoman = (roman: string) => romanNumbers.find(romanNumber => romanNumber.name === roman.toUpperCase())

    const romans = text.split('')

    if (romans.find(roman => !findRoman(roman))) return Alert.alert('Ops', 'Apenas números Romanos são válidos')

    const decimalArray = romans.map(roman => findRoman(roman)!.value)

    const decimal = decimalArray.reduce((acc, currDecimal, index) => {
      const nextDecimal = decimalArray[index + 1]

      const result = !nextDecimal || currDecimal >= nextDecimal
        ? acc + currDecimal
        : acc - currDecimal

      return result
    }, 0)

    setDecimal(String(decimal))
    setRoman(text.toUpperCase())
  }

  return (
    <Container>
      <Title>Converter</Title>
      <Inputs>
        <InputWrapper>
          <InputTitle>Romano</InputTitle>
          <Input
            value={roman}
            onChangeText={convertToDecimal}
            autoCorrect={false}
            autoCapitalize='characters'
          />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Decimal</InputTitle>
          <Input
            value={decimal}
            onChangeText={convertToRoman}
            keyboardType='numeric'
          />
        </InputWrapper>
      </Inputs>
    </Container>
  );
}
