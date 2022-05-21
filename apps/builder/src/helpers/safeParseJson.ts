export default function safeParseJson (jsonString: string, isList = false) {
  try {
    const json = JSON.parse(jsonString)
    return json
  } catch (e) {
    return isList ? [] : {}
  }
}
