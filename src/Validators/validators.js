export const required = (value) => {
   if (value) return undefined
   return "Field is required"
}

export const requiredWriteSomething = (value) => {
   if (value) return undefined
   return " "
}

export const maxLengthCreator = (maxLength) => (value) => {
   if (value.length > maxLength) {
      return `Max length is ${maxLength} symbols`
   }
   return undefined
}