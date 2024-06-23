import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import { useProfile } from './contexts/UserListContext';
import NoteDialog from './contexts/NoteDialog';

export default function Consultant() {
    const { userList, error, fetchUserList, fetchUserPDF, updateUserStatus } = useProfile();
    const [isNoteOpen, setIsNoteOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [selectedNoteId, setSelectedNoteId] = useState(null);
    const [localUserList, setLocalUserList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUserList, setFilteredUserList] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);
    
    const notePanel = (userId, noteId) => {
        setSelectedUserId(userId);
        setSelectedNoteId(noteId);
        setIsNoteOpen(true);
    };

    const handleStatusChange = (userId, newStatus) => {
        const updatedUserList = localUserList.map(user =>
            user.userId === userId ? { ...user, status: newStatus } : user
        );
        setLocalUserList(updatedUserList);
        updateUserStatus(userId, newStatus); // function to send updated status to backend
    };

    const handleAttachmentClick = async (documentId) => {
        try {
            // Fetch PDF data for the given documentId
            const base64Data = await fetchUserPDF(documentId);

            if (!base64Data) {
                throw new Error('Base64 data is undefined');
            }

            // Convert the Base64 string to a Uint8Array
            const byteArray = new Uint8Array(atob(base64Data.split(',')[1]).split('').map(char => char.charCodeAt(0)));

            // Create a blob from the Uint8Array data
            const blob = new Blob([byteArray], { type: 'application/pdf' });

            // Create a URL for the blob
            const url = URL.createObjectURL(blob);

            // Open the URL in a new tab to view the PDF
            window.open(url);
        } catch (error) {
            console.error('Error handling attachment click:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    useEffect(() => {
        fetchUserList();
    }, []);

    useEffect(() => {
        // Initialize filtered user list with the entire user list when the component mounts
        if (userList && userList.length > 0) {
            setFilteredUserList(userList);
            setTotalPages(Math.ceil(userList.length / itemsPerPage));
            setCurrentItems(userList);
        }
    }, [userList]);
    
    
    useEffect(() => {
        // Filter user list when search term changes
        filterUsers(searchTerm);
    }, [searchTerm]);
    
    useEffect(() => {
        // Update current items when filtered user list or pagination settings change
        console.log('Filtered user list:', filteredUserList);
        console.log('Current page:', currentPage);
        console.log('Items per page:', itemsPerPage);
        
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
    
        // Set current items based on the filtered user list
        setCurrentItems(filteredUserList.slice(startIndex, endIndex));
    }, [filteredUserList, currentPage, itemsPerPage]);
    
    const filterUsers = (searchTerm) => {
        if (!searchTerm) {
            // If no search term, reset filtered user list to entire user list
            if (userList && userList.length > 0) {
                setFilteredUserList(userList);
                setTotalPages(Math.ceil(userList.length / itemsPerPage));
            }
            return;
        }
        
        // Filter user list based on search term
        if (userList && userList.length > 0) {
            const filteredUsers = userList.filter(user =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (user.workExperience && user.workExperience.some(exp => exp.position.toLowerCase().includes(searchTerm.toLowerCase())))
            );
            
            setFilteredUserList(filteredUsers);
            setTotalPages(Math.ceil(filteredUsers.length / itemsPerPage));
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="abel w-full h-screen flex flex-col justify-start ">
            <Sidebar />

            <main className="relative mt-20 lg:pl-96">
                <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
                    <div className="overflow-hidden rounded-lg">
                        <div className="divide-y divide-gray-400">
                            <div className="text-left divide-y divide-gray-200 lg:col-span-9">
                                {/* User section */}
                                <section className="container px-4 mx-auto">
                                    <div className="sm:flex sm:items-center sm:justify-between">
                                        <div>
                                            <div className="flex items-center gap-x-3">
                                                <h2 className="text-2xl font-medium text-black dark:text-white">Home</h2>
                                            </div>
                                        </div>

                                        <div className="relative flex items-center md:mt-0">
                                            <span className="absolute">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                                </svg>
                                            </span>
                                            <input 
                                                type="text" 
                                                placeholder="Search" 
                                                className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                                                value={searchTerm} 
                                                onChange={handleSearchChange} 
                                            />
                                        </div>
                                    </div>

                                    <div className="rounded-lg p-2 bg-[#F1F4F9] mt-6 md:flex md:items-center md:justify-between">
                                        <div className="inline-flex overflow-hidden bg-white divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                                            <button className="px-5 py-2 text-xs font-medium text-black transition-colors duration-200 bg-white sm:text-sm dark:bg-gray-800 dark:text-gray-300 hover:bg-slate-50">
                                                View all
                                            </button>

                                            <button className="px-5 py-2 text-xs font-medium text-black transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-slate-50">
                                                Bookmarked
                                            </button>
                                        </div>

                                    </div>

                                    <div className="flex flex-col mt-6">
                                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                        <thead className="bg-gray-50 dark:bg-gray-800">
                                                            <tr>
                                                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                    <button className="flex items-center gap-x-3 focus:outline-none">
                                                                        <span>Name</span>
                                                                    </button>
                                                                </th>

                                                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                    Position
                                                                </th>

                                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                    Attachment
                                                                </th>

                                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                    Date uploaded
                                                                </th>

                                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                    Consultation progress
                                                                </th>

                                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                    Last Updated
                                                                </th>

                                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                                                    Add notes
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                            {currentItems.map(user => (
                                                                <tr key={user.userId}>
                                                                    <td className="py-4 px-4 text-sm font-medium text-gray-900 dark:text-white">
                                                                        {user.name}
                                                                    </td>
                                                                    <td className="px-12 py-4 text-sm text-gray-500 dark:text-gray-400">
                                                                        {/* Updated to take position from workExperience */}
                                                                        {user.workExperience && user.workExperience.length > 0 && (
                                                                            user.workExperience
                                                                                .filter(we => we.currentEmployer === 1)
                                                                                .map(we => (
                                                                                    <div key={we.workExperienceId}>
                                                                                        {we.position}
                                                                                    </div>
                                                                                ))
                                                                        )}
                                                                    </td>
                                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                                                                        {/* Display attachments for the current user */}
                                                                        {user.applications && user.applications.length > 0 && (
                                                                            user.applications
                                                                                .filter(application => application.documentType === 'Resume')
                                                                                .map(application => (
                                                                                    <div key={application.documentId}>
                                                                                        <a href="#" onClick={() => handleAttachmentClick(application.documentId)} className="text-linkPreviewColor hover:underline">
                                                                                            Preview
                                                                                        </a>
                                                                                    </div>
                                                                                ))
                                                                        )}
                                                                    </td>
                                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                                                                        {/* Updated to format the upload date */}
                                                                        {user.applications && user.applications.length > 0 && (
                                                                            user.applications
                                                                                .filter(application => application.documentType === 'Resume')
                                                                                .map(application => (
                                                                                    <div key={application.documentId}>
                                                                                        {new Date(application.uploadDate).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                                                    </div>
                                                                                ))
                                                                        )}
                                                                    </td>
                                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                                                                    <select
                                                                        value={user.status || ''}
                                                                        onChange={(e) => handleStatusChange(user.userId, e.target.value)}
                                                                        className={`inline px-3 py-1 text-sm font-normal rounded-full cursor-pointer focus:ring-transparent focus:border-transparent sm:text-sm 
                                                                        ${user.status === 'pending' ? 'border-transparent bg-customOrangeBackground text-customOrangeText' :
                                                                          user.status === 'viewed' ? 'border-transparent bg-customRedBackground text-customRedText' :
                                                                          'border-inherit'
                                                                        }`}
                                                                    >
                                                                            <option value=""></option>
                                                                            <option value="pending">Pending</option>
                                                                            <option value="viewed">Viewed</option>
                                                                        </select>
                                                                    </td>
                                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                                                                        {user.workExperience && user.workExperience.length > 0 && (
                                                                            user.workExperience
                                                                            .filter(we => we.currentEmployer === 1)
                                                                            .map(we => (
                                                                                <div key={we.workExperienceId}>
                                                                                {/* Check if uploadDate exists and is not null before formatting */}
                                                                                {we.uploadDate ? (
                                                                                    new Date(we.uploadDate).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
                                                                                ) : (
                                                                                    ""
                                                                                )}
                                                                                </div>
                                                                            ))
                                                                        )}
                                                                    </td>
                                                                    <td className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                                                                        {user.notes && user.notes.length > 0 ? (
                                                                            user.notes.map(note => (
                                                                                <div key={note.noteId}>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="flex inline px-3 py-1 text-sm font-normal rounded-md items-center space-x-1 text-white bg-black hover:text-gray-300"
                                                                                        onClick={() => notePanel(user.userId, note.noteId)}
                                                                                    >
                                                                                        <span>Edit</span>
                                                                                    </button>
                                                                                </div>
                                                                            ))
                                                                        ) : (
                                                                            <button
                                                                                type="button"
                                                                                className="flex inline px-3 py-1 text-sm font-normal rounded-md items-center space-x-1 text-white bg-black hover:text-gray-300"
                                                                                onClick={() => notePanel(user.userId, null)}
                                                                            >
                                                                                <span>Edit</span>
                                                                            </button>
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 sm:flex sm:items-center sm:justify-between">
                                        {/* Pagination */}
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            Page <span className="font-medium text-gray-700 dark:text-gray-100">{currentPage} of {totalPages}</span>
                                        </div>

                                        <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
                                            {/* Previous button */}
                                            <button
                                                onClick={prevPage}
                                                className={`flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800'}`}
                                                disabled={currentPage === 1}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                                </svg>
                                                <span>Previous</span>
                                            </button>

                                            {/* Next button */}
                                            <button
                                                onClick={nextPage}
                                                className={`flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800'}`}
                                                disabled={currentPage === totalPages}
                                            >
                                                <span>Next</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <NoteDialog
                isNoteOpen={isNoteOpen}
                notePanel={() => setIsNoteOpen(false)}
                userId={selectedUserId}
                noteId={selectedNoteId}
            />
        </div>
    );
}
