import { Guid } from './guid';
import { Note } from './note';
import { NoteStore } from './notestore';

export class SessionStorageStore implements NoteStore {

    deleteNote(id: Guid): void {
        const currentNotes: Note[] = this.getNotes();
        const filteredNotes = currentNotes.filter(x => x.id !== id);
        const parsedNotes = JSON.stringify(filteredNotes);
        sessionStorage.setItem('notes', parsedNotes);
    }

    public addNote(note: Note): void {
        const currentNotes: Note[] = this.getNotes();
        currentNotes.push(note);
        const parsedNotes = JSON.stringify(currentNotes);
        sessionStorage.setItem('notes', parsedNotes);
    }

    public getNotes(): Note[] {
        const notesFromStorage = sessionStorage.getItem('notes');
        const notes: Note[] = [];
        if (typeof notesFromStorage === 'string') {
            return JSON.parse(notesFromStorage);
        }
        return notes;
    }

}