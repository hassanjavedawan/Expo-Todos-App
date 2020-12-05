import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const Home = () => {
    const [item, setItem] = React.useState([]);
    const [value, setValue] = React.useState('');
    const inputValue = (text) => setValue(text);
    const addItem = () => {
        if (value == '') {
            alert('Please enter your task........')
        } else {
            setItem([...item, value])
            setValue('')
            console.log(value)      
        }
    }
    const deleteBtn = (index) => {
        console.log(index)
        item.splice(index, 1)
        setItem([...item])
    }

    return (
        <View style={styles.container}>

            {/* Input and btn */}
            <View style={styles.inputArea} >
                <TextInput
                    style={styles.input}
                    onChangeText={inputValue}
                    placeholder='Enter your todo..... '
                    placeholderTextColor='white'
                    value={value}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={addItem}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            {/* Print list */}
            <ScrollView style={styles.scrollView} >
                {item == '' ? <Text style={styles.NoTask}>No Task.......</Text>
                    :
                    item.map((v, i) => {
                        return <View style={styles.list} key={i}>
                            <Text style={styles.text} >{v}</Text>
                            <TouchableOpacity

                                onPress={() => deleteBtn(i)}>
                                <Text style={styles.delBtn} >Delete</Text>
                            </TouchableOpacity>
                        </View>
                    })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#64B5F6',
        alignItems: 'center',

    },
    inputArea: {
        flexDirection: 'row',
        marginTop: 30,

    },
    input: {
        flexDirection: 'row',
        marginLeft: 3,
        width: '80%',
        paddingLeft: 8,
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderTopLeftRadius: 8,
        fontSize: 25,
        color: 'white',
    },
    button: {
        height: 40,
        width: '18%',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        padding: 5,
        borderTopRightRadius: 8,
    },
    scrollView: {
        width: '80%',


    },
    buttonText: {
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    NoTask: {
        fontSize: 40,
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 20,
        color: 'white'
    },

    list: {    
        flexDirection: 'row',
        marginTop: 10,
        borderRadius: 8,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 4,

        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,

        elevation: 5,
        height: 30,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 13,
        color: '#64B5F6',
    },
    delBtn: {
        backgroundColor: 'red',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 7,
        marginLeft: 40,
        marginTop: 2

    }
})

export default Home;