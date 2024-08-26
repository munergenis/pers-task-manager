import neostandard from 'neostandard'
import tailwind from 'eslint-plugin-tailwindcss'

export default [
  ...neostandard(),
  ...tailwind.configs['flat/recommended']
]
