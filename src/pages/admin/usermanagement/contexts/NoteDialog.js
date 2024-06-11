import { Fragment, useEffect, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { useLogin } from '../../../Auth/Login/contexts/LoginContext';
import { useProfile } from './UserManagementContext';

export default function NoteDialog({ isNoteOpen, notePanel, userId, noteId }) {
    const { userList, fetchUserList, updateNote } = useProfile();
    const [formData, setFormData] = useState({ title: '', description: '' });
  
    useEffect(() => {
      if (isNoteOpen && userList) {
        const selectedUser = userList.find(user => user.userId === userId);
        if (selectedUser) {
          const selectedNote = selectedUser.notes.find(note => note.noteId === noteId);
          if (selectedNote) {
            setFormData({
              title: selectedNote.title || '',
              description: selectedNote.description || '',
            });
          } else {
            setFormData({
              title: '',
              description: '',
            });
          }
        }
      }
    }, [isNoteOpen, userList, noteId, userId]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const updatedNote = {
          title: formData.title,
          description: formData.description,
        };
        await updateNote(userId, noteId, updatedNote);
        console.log('Note updated successfully!');
        notePanel();
        fetchUserList();
      } catch (error) {
        console.error('Error updating note:', error);
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    useEffect(() => {
      if (!userList) {
        fetchUserList();
      }
    }, [userList, fetchUserList]);
  
    return (
      <Transition.Root show={isNoteOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={notePanel}>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-lg">
                    <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                      <div className="px-4 pt-4 pb-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-xl font-semibold leading-6 text-gray-900">
                            Notes
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-transparent"
                              onClick={notePanel}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                          {/* Your content */}
                          <section className="max-w-4xl p-6 mx-auto bg-gray-200 rounded-md dark:bg-gray-800">
                              <form onSubmit={handleSubmit}>
                                  <div className="pb-4">
                                      <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                      Title
                                      </label>
                                      <input
                                      type="text"
                                      name="title"
                                      id="title"
                                      value={formData.title}
                                      onChange={handleChange}
                                      className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                                      />
                                  </div>
  
                                  <div className="pb-4">
                                      <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                      Description
                                      </label>
                                      <textarea
                                      name="description"
                                      id="description"
                                      value={formData.description}
                                      onChange={handleChange}
                                      placeholder="lorem..."
                                      className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 h-40 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                                      ></textarea>
                                  </div>
  
                                  <div className="flex flex-shrink-0 justify-end px-4 py-4">
                                      <button
                                      type="button"
                                      className="w-1/3 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                                      onClick={notePanel}
                                      >
                                      Cancel
                                      </button>
                                      <button
                                      type="submit"
                                      className="w-1/3 ml-4 inline-flex justify-center bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                                      >
                                      Update
                                      </button>
                                  </div>
                              </form>
                          </section>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
