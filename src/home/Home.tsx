import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, TextInput, Button, StyleSheet } from "react-native";


export default function Home() {

    const [noteText, setNoteText] = useState('');
    const [notes, setNotes] = useState([]);

    function addNote() {
        if (noteText) {
            const newNote = {
                contentNote: noteText,
                time: new Date().toLocaleDateString('pt-br', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                });
            };

            setNotes((prevState) => [...prevState, newNote]);
            setNoteText('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Notes</Text>

            <ScrollView style={styles.notesContainer}>
                {notes.map((note, index) => (
                    <View key={index} style={styles.note}>
                        <Text style={styles.noteText}>{note.contentNote}</Text>
                        <Text style={styles.noteTime}>{note.time}</Text>
                    </View>
                ))}
            </ScrollView>

            <TextInput
                style={styles.input}
                placeholder="Add a note..."
                value={noteText}
                onChangeText={(text) => setNoteText(text)}
            />

            <Button title="Add Note" onPress={addNote} />
        </View>

    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 30,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    notesContainer: {
        marginBottom: 20,
    },
    note: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    noteText: {
        fontSize: 16,
    },
    noteTime: {
        fontSize: 12,
        color: '#888',
        marginTop: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});