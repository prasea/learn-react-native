import { View, StyleSheet, Button, TextInput } from 'react-native'

function TaskInput({ handleTaskChange, handleSubmit }) {
  const [newTask, setNewTask] = useState('')
  const handleTaskChange = e => setNewTask(e)
  return (
    <View style={styles.formContainer}>
      <TextInput placeholder='Enter Task' style={styles.input} onChangeText={handleTaskChange} />
      <Button title='Add Task' onPress={handleSubmit}></Button>
    </View>
  )
}
const styles = StyleSheet.create({
  formContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  input: { borderWidth: 2, borderColor: 'black', padding: 10, width: '60%' },
})
export default TaskInput